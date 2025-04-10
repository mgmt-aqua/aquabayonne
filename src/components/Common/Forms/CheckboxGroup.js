import { Form } from 'react-bootstrap';

const CheckboxGroup = ({ label, name, options, values, onChange, error, groupClassName, labelClassName, controlClassName, errorClassName }) => {
  const handleChange = (e) => {
    const { name: checkboxName, checked } = e.target;
    onChange(name, checkboxName, checked);
  };

  return (
    <Form.Group controlId={name} className={groupClassName}>
      <Form.Label className={labelClassName}>{label}</Form.Label>
      <div className="d-flex">
        {options.map((opt, idx) => (
          <Form.Check
            key={opt.name || `fallback-${idx}`}
            type="checkbox"
            name={opt.name}
            label={opt.label}
            className={controlClassName}
            checked={values[opt.name]}
            onChange={handleChange}
            inline
          />
        ))}
      </div>
      {error && <p className={errorClassName}>{error}</p>}
    </Form.Group>
  );
};

export default CheckboxGroup;