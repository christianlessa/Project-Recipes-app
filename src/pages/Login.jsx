import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { userContext } from '../context';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUserEmail } = useContext(userContext);

  const setDisabled = () => {
    const SIX = 6;
    if (email.includes('@') && email.includes('.com') && password.length > SIX) {
      return false;
    }
    return true;
  };

  const saveStorageLogin = (event) => {
    event.preventDefault();
    localStorage.setItem('mealsToken', '1');
    localStorage.setItem('cocktailsToken', '1');
    localStorage.setItem('user', JSON.stringify({ email }));
    setUserEmail(email);
    history.push('/foods');
  };

  return (
    <form>
      <label htmlFor="email">
        Email:
        <input
          type="text"
          data-testid="email-input"
          name="email"
          id="email"
          placeholder="Digite seu Email"
          value={ email }
          onChange={ ({ target }) => setEmail(target.value) }
        />
      </label>
      <label htmlFor="password">
        Senha:
        <input
          data-testid="password-input"
          id="password"
          name="password"
          type="password"
          placeholder="Digite sua senha"
          value={ password }
          onChange={ ({ target }) => setPassword(target.value) }
        />
      </label>
      <button
        type="submit"
        data-testid="login-submit-btn"
        onClick={ saveStorageLogin }
        disabled={ setDisabled() }
      >
        Enter
      </button>
    </form>
  );
}

export default Login;
