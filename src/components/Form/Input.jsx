import { memo } from 'react';
import s from './Input.module.css';

function InputField({ label, type, name, handleChange, errorMessage, isValid, value }) {
  return (
    <div className={s.inputContainer}>
      <label className={s.formLabel}>{label}</label>
      <input
        className={s.formInput}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
      />
      {errorMessage && !isValid && <span className={s.error}>{errorMessage}</span>}
    </div>
  );
}

export default memo(InputField);
