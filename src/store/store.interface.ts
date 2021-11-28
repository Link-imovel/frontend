import { PublicationStore } from "./ducks/publications/publications.interface";
import { Store } from "./ducks/store/store.interface";
import { UserStore } from "./ducks/user/user.interface";

export interface RootStore {
  store: Store;
  user: UserStore;
  publication: PublicationStore;
}
