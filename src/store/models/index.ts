import { Models } from '@rematch/core';
import { user } from './user';
import { store } from './store';
import { publication } from './publications';

interface RootModel extends Models<RootModel> {
  user: typeof user;
  store: typeof store;
  publication: typeof publication;
}

const models: RootModel = { user, store, publication };

export { models };
export type { RootModel };
