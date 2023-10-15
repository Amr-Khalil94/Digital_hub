import * as Yup from "yup";

//regex password rules
const passwordRequrements = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

export default Yup.object({
  email: Yup.string().email(),

  password: Yup.string()
    .required()
    .matches(
      passwordRequrements,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
});
