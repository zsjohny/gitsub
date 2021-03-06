import { createContext, useContext } from 'react';

import Main from './main.store';
import Unsubscribe from './unsubscribe.store';
import Subscribe from './subscribe.store';
import Followers from './followers.store';
import Users from './users.store';

const main = new Main();

const BaseStore = {
  main,
  subscribe: new Subscribe(main),
  unsubscribe: new Unsubscribe(main),
  followers: new Followers(main),
  users: new Users(main),
};

export const rootContext = createContext(BaseStore);

export function useBaseStore() {
  return useContext(rootContext);
}

export default BaseStore;
