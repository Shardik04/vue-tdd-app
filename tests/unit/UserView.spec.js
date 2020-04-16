/* what exactly do we test in our components?
    1. If the component renders
    2. If it renders the right thing
    3. Its binds
    4. The events
    5. Extreme cases (i.e. how it will behave with an empty list, a list with 5 items, or 100 items.)
*/

import { shallowMount } from "@vue/test-utils";
import UserView from "@/views/UserView";
import VUserSearchForm from "@/components/VUserSearchForm";
import VUserProfile from "@/components/VUserProfile";

// demo
describe("UserView", () => {
  it("works", () => {});
});

// 1. Renders the component test
describe("UserView", () => {
  // for 1.
  it("renders the component", () => {
    // arrange
    const wrapper = shallowMount(UserView);

    // assert
    expect(wrapper.html()).toMatchSnapshot();
  });

  // for 2. (test if component renders the right thing.)
  it("renders main child componets", () => {
    // arrange
    const wrapper = shallowMount(UserView);
    const userSearchForm = wrapper.find(VUserSearchForm);
    const userProfile = wrapper.find(VUserProfile);

    // assert
    expect(userSearchForm.exists()).toBe(true);
    expect(userProfile.exists()).toBe(true);
  });
});

// refactor with point 1. and 2.
describe("UserView", () => {
  const build = () => {
    const wrapper = shallowMount(UserView, {
      data: () => ({
        user: {}
      })
    });

    return {
      wrapper,
      userSearchForm: () => wrapper.find(VUserSearchForm),
      userProfile: () => wrapper.find(VUserProfile)
    };
  };

  it("renders the component", () => {
    //arrange
    const { wrapper } = build();

    //assert
    expect(wrapper.html()).toMatchInlineSnapshot(`
      <div>
        <vusersearchform-stub></vusersearchform-stub>
        <vuserprofile-stub user="[object Object]"></vuserprofile-stub>
      </div>
    `);
  });

  it("renders main child components", () => {
    //arrange
    const { userProfile, userSearchForm } = build();

    // assert
    expect(userSearchForm().exists()).toBe(true);
    expect(userProfile().exists()).toBe(true);
  });

  // 3. binds data to component
  it("passes a binded user prop to user profile component", () => {
    const { wrapper, userProfile } = build();

    wrapper.setData({
      user: {
        name: "Hardik"
      }
    });

    //assert
    expect(userProfile().vm.user).toBe(wrapper.vm.user);
  });
});
