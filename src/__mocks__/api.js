import userFixture from '../../tests/unit/fixtures/user'

export default {
  // eslint-disable-next-line no-undef
  searchUser: jest.fn().mockResolvedValue(userFixture)
}