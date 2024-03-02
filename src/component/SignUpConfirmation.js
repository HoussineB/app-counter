import React from "react";
import { useLocation } from "react-router-dom";

const SignUpConfirmation = () => {
  const location = useLocation();
  const valuesform = location.state.values;

  return (
    <div>
      <h2>Confirmation d'inscription</h2>
      <p>Nom : {valuesform.lastName}</p>
      <p>Prénom : {valuesform.firstName}</p>
      <p>Email : {valuesform.email}</p>
      <p>Password : {valuesform.password}</p>
    </div>
  );
};

export default SignUpConfirmation;
