import userFixture from '../../../tests/unit/fixtures/user'

console.log("from mock actions" , userFixture)

export default {
  // eslint-disable-next-line no-undef
  SEARCH_USER: jest.fn().mockResolvedValue("Hardik")
}