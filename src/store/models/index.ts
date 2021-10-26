import { Models } from '@rematch/core';
import { user } from './user';

interface RootModel extends Models<RootModel> {
  user: typeof user;
}

const models: RootModel = { user };

export { models };
export type { RootModel };
