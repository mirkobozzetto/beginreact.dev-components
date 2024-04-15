// import { useRef } from 'react';
import { useState } from 'react';

const UserForm = ({ onSubmitUser }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }
    onSubmitUser({ name, password });
  };

  const resetError = () => {
    setError(null);
  };

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="vertical-stack form">
      <h2>User Form</h2>
      <label>
        Name
        <input type="text" name="name" value={name} onChange={onNameChange} />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          value={password}
          onChange={(event) => {
            resetError();
            onPasswordChange(event);
          }}
        />
      </label>
      <input type="submit" value="Submit" />
      {error && <p className="error">{error}</p>}
    </form>
  );
};

const Form = () => {
  const onSubmitUser = (data) => {
    alert('Form submitted: ' + JSON.stringify(data));
  };
  return <UserForm onSubmitUser={onSubmitUser} />;
};

export default Form;
