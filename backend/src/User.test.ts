import { UserDBEntity } from './entities/UserDBEntity';
import User from './User';

jest.mock('./entities/UserDBEntity');

jest.mock('bcrypt');

const mockedUserDBEntity = UserDBEntity as jest.MockedClass<typeof UserDBEntity>;

beforeEach(() => {
  jest.resetAllMocks();
});

describe('Authentication', () => {
  describe('User does not exist', () => {
    it('will return false when checking password', async () => {
      const user = new User('foo');
      const isCorrectPassword = await user.checkPassword('foo');
      expect(isCorrectPassword).toBeFalsy();
    });
  });

  describe('Adding a user', () => {
    it('adds a user', async () => {
      const user = new User('foo');
      await user.addUser('secret');
      expect(mockedUserDBEntity).toHaveBeenCalledTimes(1);
      const mockedUser: any = mockedUserDBEntity.mock.instances[0];
      expect(mockedUser.save).toHaveBeenCalled();
    });
  });
});
