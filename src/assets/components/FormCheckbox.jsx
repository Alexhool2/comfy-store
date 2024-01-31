const FormCheckbox = ({ label, name, defaultValue, size }) => {
  return (
    <div className='form-control items-center'>
      <label htmlFor={name} className='label cursor-pointer '>
        <span className='label-text capitalize'>
          {label}
          <input
            type='checkbox'
            name={name}
            defaultChecked={defaultValue}
            className={`checkbox checkbox-primary ${size}`}
          />
        </span>
      </label>
    </div>
  );
};
export default FormCheckbox;
