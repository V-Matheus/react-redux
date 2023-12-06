import store from './store/configurStore.js';
import { tokenFetch } from './store/middleware/token.js';
import { userFetch } from './store/middleware/user.js';

async function login(user) {
  let state = store.getState();
  if (state.token.data === null) {
    await store.dispatch(tokenFetch(user));
    state = store.getState();
  }
  await store.dispatch(userFetch(state.token.data));
}

login({ username: 'dog', password: 'dog' });
