import { useRef } from 'react';
import { useState } from 'react';

const UserForm = ({ onSubmitUser }) => {
  const nameRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const password = passwordRef.current.value;

    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      console.log('Password must be at least 8 characters long');
      return;
    }

    onSubmitUser({ name, password });
    // console.log({ name, password });
  };

  return (
    <form onSubmit={handleSubmit} className="vertical-stack form">
      <h2>User Form</h2>
      <label>
        Name
        <input type="text" name="name" ref={nameRef} />
      </label>
      <label>
        Password
        <input type="password" name="password" ref={passwordRef} />
      </label>
      <input type="submit" value="Submit" />
      {error && <div className="error">{error}</div>}
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
