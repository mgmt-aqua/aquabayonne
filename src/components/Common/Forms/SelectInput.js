import { Form } from 'react-bootstrap';

const SelectInput = ({ name, options, value, onChange, error, groupClassName, controlClassName, errorClassName }) => (
  <Form.Group controlId={name} className={groupClassName}>
    <Form.Control
      as="select"
      name={name}
      className={controlClassName}
      value={value}
      onChange={onChange}
    >
      {options.map((opt, idx) => (
        <option disabled={opt.isDisabled} key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </Form.Control>
    {error && <p className={errorClassName}>{error}</p>}
  </Form.Group>
);

export default SelectInput;
