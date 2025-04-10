import { Form } from 'react-bootstrap';

const DateInput = ({ name, label, value, onChange, error, groupClassName, labelClassName, controlClassName, errorClassName }) => {
  const today = new Date().toISOString().split('T')[0];

  return (
    <Form.Group controlId={name} className={groupClassName}>
      <Form.Label className={labelClassName}>{label}</Form.Label>
      <Form.Control
        type="date"
        name={name}
        min={today}
        className={controlClassName}
        value={value}
        onChange={onChange}
      />
      {error && <p className={errorClassName}>{error}</p>}
    </Form.Group>
  );
};

export default DateInput;
