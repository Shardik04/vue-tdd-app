/* what exactly do we test in our components?
    1. If the component renders
    2. If it renders the right thing
    3. Its binds
    4. The events
    5. Extreme cases (i.e. how it will behave with an empty list, a list with 5 items, or 100 items.)
*/
import { shallowMount } from '@vue/test-utils'
import UserView from '@/views/UserView'

// demo 
describe('UserView', () => {
    it('works', () => {})
})

// 1. Renders the component test
describe('UserView', () => {
    it('renders the component', () => {
      // arrange
      const wrapper = shallowMount(UserView)
  
      // assert
      expect(wrapper.html()).toMatchSnapshot()
    })
  })