import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { Alert, TextField } from "@mui/material";
import Box from "@mui/material/Box";

const SignUpForm = () => {
  //call router
  const navigate = useNavigate();
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  //validation formik
  const formik = useFormik({
    //initialiser champs formulaire
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phoneNumber: "",
    },

    //envoyer data values validate ok
    onSubmit: (values) => {
      navigate("/confirmation", { state: { values: values } });
    },

    validate: (values) => {
      const errors = {};

      if (!values.firstName) {
        errors.firstName = "Le prénom requis";
      }

      if (!values.lastName) {
        errors.lastName = "Le nom de famille est requis";
      }

      if (!values.email) {
        errors.email = "L'adresse email est requise";
      } else if (!regex.test(values.email)) {
        errors.email = "Adresse email invalide";
      }

      if (!values.password) {
        errors.password = "Le mot de passe est requis";
      } else if (values.password.length < 6) {
        errors.password = "Le mot de passe doit contenir au moins 6 caractères";
      } else if (!values.password.match(/[A-Z]/g)) {
        errors.password =
          "Le mot de passe doit contenir au moins un caractères majuscules";
      }

      if (!values.phoneNumber) {
        errors.phoneNumber = "Number phone est requise";
      }

      return errors;
    },
  });

  return (
    <>
      <h1>Inscription</h1>
      <Box
        sx={{
          p: 2,
          border: "1px solid blue",
        }}
      >
        <form onSubmit={formik.handleSubmit}>
          <div>
            <TextField
              fullWidth
              error={Boolean(formik.errors.firstName)}
              helperText={formik.errors.firstName}
              label="First Name"
              type="text"
              id="firstName"
              name="firstName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <Alert severity="error">{formik.errors.firstName}</Alert>
            ) : null}
          </div>
          <div>
            <label htmlFor="phoneNumber">phoneNumber</label>
            <input
              type="number"
              id="phoneNumber"
              name="phoneNumber"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phoneNumber}
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
              <div>{formik.errors.phoneNumber}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="lastName">Nom de famille</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div>{formik.errors.lastName}</div>
            ) : null}
          </div>

          <div>
            <label htmlFor="email">Adresse email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </div>

          <div>
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </div>

          <button type="submit">S'inscrire</button>
        </form>
      </Box>
    </>
  );
};

export default SignUpForm;
