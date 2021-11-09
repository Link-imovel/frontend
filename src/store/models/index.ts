import { Models } from '@rematch/core';
import { user } from './user';
import { store } from './store';

interface RootModel extends Models<RootModel> {
  user: typeof user;
  store: typeof store;
}

const models: RootModel = { user, store };

export { models };
export type { RootModel };
