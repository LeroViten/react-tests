import React from 'react';
import useForm from '../../hooks/useForm';
import { signUpForm } from '../../utils/formConfig';
import s from './SignUpForm.module.css';

export default function SignUpForm() {
  const { renderFormInputs, isFormValid } = useForm(signUpForm);

  return (
    <form className={s.signUpForm} autoComplete="off">
      <h1>Sign Up</h1>
      {renderFormInputs()}
      <button className={s.formButton} type="submit" disabled={!isFormValid()}>
        Submit
      </button>
    </form>
  );
}
