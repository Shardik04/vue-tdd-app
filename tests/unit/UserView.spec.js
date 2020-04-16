/* what exactly do we test in our components?
    1. If the component renders
    2. If it renders the right thing
    3. Its binds
    4. The events
    5. Extreme cases (i.e. how it will behave with an empty list, a list with 5 items, or 100 items.)
*/

import { shallowMount, createLocalVue } from "@vue/test-utils";
import UserView from "@/views/UserView";
import VUserSearchForm from "@/components/VUserSearchForm";
import VUserProfile from "@/components/VUserProfile";
import Vuex from 'vuex'
import initialState from '@/store/state'
import userFixture from './fixtures/user'


const localVue = createLocalVue()
localVue.use(Vuex)

// demo
describe("UserView", () => {
  it("works", () => {});
});

// 1. Renders the component test
// describe("UserView", () => {
//   // for 1.
//   it("renders the component old code", () => {
//     // arrange
//     const wrapper = shallowMount(UserView);

//     // assert
//     expect(wrapper.html()).toMatchSnapshot();
//   });

//   // for 2. (test if component renders the right thing.)
//   it("renders main child componets old code", () => {
//     // arrange
//     const wrapper = shallowMount(UserView);
//     const userSearchForm = wrapper.find(VUserSearchForm);
//     const userProfile = wrapper.find(VUserProfile);

//     // assert
//     expect(userSearchForm.exists()).toBe(true);
//     expect(userProfile.exists()).toBe(true);
//   });
// });

// refactor with point 1. and 2.
describe("UserView", () => {
  let state

  const build = () => {
    // without vuex
    // const wrapper = shallowMount(UserView, {
    //   data: () => ({
    //     user: {}
    //   })
    // });

    // with vuex above code
    const wrapper = shallowMount(UserView, {
      localVue,
      store: new Vuex.Store({ state })
    })

    return {
      wrapper,
      userSearchForm: () => wrapper.find(VUserSearchForm),
      userProfile: () => wrapper.find(VUserProfile)
    };
  };

  it("renders the component refactored", () => {
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

  it("renders main child components refactored", () => {
    //arrange
    const { userProfile, userSearchForm } = build();

    // assert
    expect(userSearchForm().exists()).toBe(true);
    expect(userProfile().exists()).toBe(true);
  });

  // when using vuex states
  beforeEach(() => {
    state = { ...initialState }
  })

  // 3. binds data to component
  it("passes a binded user prop to user profile component", () => {
    // with out vuex
        // const { wrapper, userProfile } = build();

        // wrapper.setData({
        //   user: {
        //     name: "Hardik"
        //   }
        // });

        // //assert
        // expect(userProfile().vm.user).toBe(wrapper.vm.user);

    // above code with vuex
        //arrange
        state.user = userFixture
        const { userProfile } = build()
        
        // assert
        expect(userProfile().vm.user).toBe(state.user)

  });
});
