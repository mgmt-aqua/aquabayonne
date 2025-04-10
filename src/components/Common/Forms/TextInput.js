import { Form } from 'react-bootstrap';

const TextInput = ({ label, name, placeholder, value, onChange, error, groupClassName, labelClassName, controlClassName, errorClassName }) => (
  <Form.Group controlId={name} className={groupClassName}>
    <Form.Label className={labelClassName}>{label}</Form.Label>
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
