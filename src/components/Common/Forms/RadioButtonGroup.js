import { Form } from 'react-bootstrap';

const RadioButtonGroup = ({
  label,
  name,
  options,
  value,
  onChange,
  error,
  groupClassName,
  labelClassName,
  radioClassName,
  errorClassName
}) => (
  <Form.Group className={groupClassName}>
    <Form.Label className={labelClassName}>{label}</Form.Label>
    {options.map((opt) => (
      <Form.Check
        inline
        key={opt.value}
        type="radio"
        id={`${name}-${opt.value}`}
        name={name}
        value={opt.value}
        label={opt.label}
        className={radioClassName}
        checked={value === opt.value}
        onChange={onChange}
        disabled={opt.isDisabled}
      />
    ))}
    {error && <p className={errorClassName}>{error}</p>}
  </Form.Group>
);

export default RadioButtonGroup;
