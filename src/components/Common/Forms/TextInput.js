import { Form } from 'react-bootstrap';

const TextInput = ({ name, placeholder, value, onChange, error, groupClassName, controlClassName, errorClassName }) => (
  <Form.Group controlId={name} className={groupClassName}>
    <Form.Control
      type="text"
      name={name}
      placeholder={placeholder}
      className={controlClassName}
      value={value}
      onChange={onChange}
    />
    {error && <p className={errorClassName}>{error}</p>}
  </Form.Group>
);

export default TextInput;
