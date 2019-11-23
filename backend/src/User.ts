import { UserDBEntity } from './entities/UserDBEntity';
import * as bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

export default class User {
  constructor(public username: string) {}

  /** Returns true if the given password is correct, else false. */
  async checkPassword(password: string) {
    const user = await UserDBEntity.findOne({ username: this.username });
    if (!user) {
      return false;
    }
    const passwordHash = user.passwordHash;
    const isCorrectPassword = bcrypt.compareSync(password, passwordHash);
    return isCorrectPassword;
  }

  /** Adds a user to the database with the given password. */
  async addUser(password: string) {
    let userCreated = false;
    const existingUser = await UserDBEntity.findOne({ username: this.username });
    if (!existingUser) {
      const passwordHash = bcrypt.hashSync(password, SALT_ROUNDS);
      const user = new UserDBEntity();
      user.passwordHash = passwordHash;
      await user.save();
      userCreated = true;
    }
    return userCreated;
  }
}
