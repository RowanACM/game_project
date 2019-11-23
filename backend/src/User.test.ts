import { UserDBEntity } from './entities/UserDBEntity';
import * as bcrypt from 'bcrypt';
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

  describe('Adding and authenticating', () => {
    it('adds a user', async () => {
      const user = new User('foo');
      await user.addUser('secret');
      expect(mockedUserDBEntity).toHaveBeenCalledTimes(1);

      const mockedUser: any = mockedUserDBEntity.mock.instances[0];
      expect(mockedUser.save).toHaveBeenCalled();
    });

    it("checks a user's password", async () => {
      mockedUserDBEntity.findOne = jest.fn().mockResolvedValue({ password: 'secret' });
      Object.defineProperty(bcrypt, 'compareSync', { value: jest.fn().mockReturnValue(true) });

      const user = new User('foo');
      const isCorrectPassword = await user.checkPassword('secret');
      expect(isCorrectPassword).toBeTruthy();
    });
  });
});
