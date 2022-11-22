import {
  RegisterStyledDıvImg,
  RegisterStyledForm,
  RegisterBody,
} from "./Register.Styled";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../auth/firebase";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { REGISTER } from "../redux/types/reduxTypes";
import falseicon from "../assets/incorrect-icon.png"


const Register = () => {
  const dispatch = useDispatch();

  const email = useSelector((state) => state.email);
  const password = useSelector((state) => state.password);
  const user = useSelector((state) => state.user);

  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const [emailError, setEmailError] = useState(false);
  const [passwordError , setPasswordError] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [registerUnsuccess, setRegisterUnsuccess] = useState(false);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleRegisterEmail = (e) => {
    dispatch({
      type: REGISTER,
      email: e.target.value,
      password: password,
      payload: user,
    });
    console.log(email);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.match(reg)) {
      setEmailError(false);
      setRegisterUnsuccess(false)
    } else {
      setEmailError(true);
    }

    if(String(password).length<6){
      setPasswordError(true)
      setRegisterUnsuccess(true)
    }else{
      setPasswordError(true)
    }

    if (!emailError) {
      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        dispatch({
          type: REGISTER,
          payload: user,
          email: email,
          password: password,
        });
        setRegisterSuccess(true);
        console.log(user);
      } catch (error) {}
    }
  };

  console.log(`${email}  ${password}`);
  // console.log(user)

  return (
    <RegisterBody>
      <div className="d-flex">
        <RegisterStyledDıvImg></RegisterStyledDıvImg>
        <RegisterStyledForm className="d-flex flex-column justify-content-center">
          <h2 className="text-center">REGISTER</h2>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div className="d-flex flex-column align-items-center">
              <TextField
                id="outlined-required"
                label="Email"
                type=""
                required
                sx={{ width: "80% !important" }}
                fullWidth
                error={emailError}
                helperText={emailError && "Invalid Email"}
                onChange={handleRegisterEmail}
              />
              <FormControl sx={{ m: 1, width: "80%" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                  required
                  fullWidth
                  error={passwordError && "Min 6 ch"}
                  onChangeCapture={(e) =>
                    dispatch({
                      type: REGISTER,
                      password: e.target.value,
                      email: email,
                      payload: user,
                    })
                  }
                />
                <Button
                  sx={{ marginTop: "1rem", width: "100%" }}
                  type="submit"
                  variant="contained"
                  onClick={handleRegister}
                >
                  REGISTER
                </Button>
              </FormControl>
            </div>
          </Box>
          <div className="d-flex justify-content-center mt-1">
            {registerSuccess && (
              <img
                style={{ width: "3rem" }}
                src="https://cdn4.vectorstock.com/i/1000x1000/75/73/flat-true-icon-vector-28867573.jpg"
                alt="successfully-registered"
              />
            )}
            {registerUnsuccess && <img  style={{ width: "3rem" }}
                src={falseicon}
                alt="successfully-registered"  /> }
          </div>
        </RegisterStyledForm>
      </div>
    </RegisterBody>
  );
};

export default Register;
