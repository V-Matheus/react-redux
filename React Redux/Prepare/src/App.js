import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { somar } from './store/contador';
import { autoLogin, login } from './store/login';

function App() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const dispatch = useDispatch();

  const {data} = useSelector((state) => state.login.user);

  React.useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch]);

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(login({ username, password }));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label style={{ displey: 'block' }} htmlFor="username">
          Usuário
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <br />
        <label style={{ displey: 'block' }} htmlFor="password">
          Senha
        </label>
        <input
          type="password"
          id="username"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <button>Enviar</button>
      </form>
      <p>{data?.email}</p>
      <button onClick={() => dispatch(somar(5))}>Somar</button>
    </div>
  );
}

export default App;
