import { Visibility, VisibilityOff } from "@mui/icons-material"
import { Checkbox, FormControlLabel, IconButton, InputAdornment, TextField } from "@mui/material"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { LoadingButton } from '@mui/lab';
import { EmailVerificationLoadingScreen } from "../components/screens/EmailVerification"

const Signup = () => {
  const { handleSubmit, register, watch, formState } = useForm();
  const { errors } = formState;
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setloading] = useState(false)
  const [loadingEmail, setloadingEmail] = useState(false)
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const password = watch('password');
  const onSubmit = async (data) => {
    setloading(true);
    setTimeout(() => {
      console.log(data);
      setloading(false);
      setloadingEmail(true)
      
    }, 3000);
    setTimeout(()=>{
      setloadingEmail(false)
      navigate('/email-verification');
    },5000)
  };
  console.log(errors)
  console.log(formState)
  console.log(watch('password'));


  return (
    <>
      {!loadingEmail?
      <div className='w-full flex justify-between '>
        <div className="w-full md:w-2/3 lg:w-1/2 flex flex-col items-start p-10 gap-10">
          <div className="w-full">
            <h1 className="font-medium text-h4">Sign Up</h1>
          </div>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col sm:flex-row  justify-between gap-8">
                <TextField
                  fullWidth
                  label='First Name'
                  variant="outlined"
                  size='large'
                  {...register("firstName", {
                    required: "First name is required",
                    validate: {
                      maxLength: (v) =>
                        v.length <= 50,
                      matchPattern: (v) =>
                        /^[a-zA-Z]+$/.test(v) ||
                        "Only have a-z characters",
                    },
                  })}
                  error={!!errors.firstName}
                  helperText={errors.firstName?.message}

                />
                <TextField
                  fullWidth
                  label='Last Name'
                  variant="outlined"
                  size='large'
                  {...register("lastName", {
                    validate: {
                      maxLength: (v) =>
                        v.length <= 50,
                      matchPattern: (v) =>
                        /^[a-zA-Z]+$/.test(v) ||
                        "Only have a-z characters",
                    },
                  })}
                  error={!!errors.lastName}
                  helperText={errors.lastName?.message}
                />
              </div>
              <TextField
                fullWidth
                label='Email'
                variant="outlined"
                size='large'
                {...register("email", {
                  required: "Email is required",
                  validate: {
                    maxLength: (v) =>
                      v.length <= 50,
                    matchPattern: (v) =>
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                      "must have @ or .",
                  },
                })}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
              <TextField
                fullWidth
                label='Password'
                variant="outlined"
                size='large'
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
                {...register("password", {
                  required: "Password is required",
                  validate: {
                    maxLength: (v) =>
                      v.length >= 8 || "Use 8 or more characters",
                    matchPattern: (v) =>
                      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/.test(v) ||
                      "Enter Strong Valid Password",
                  },
                })}
                error={!!errors.password}
              />
            </div>
            <ul className="flex flex-wrap gap-x-[18px]  list-disc list-inside">
              <li className={`${password?.length >= 8 ? "text-success-700" : "text-error-500"}`}>Use 8 or more characters</li>
              <li className={`${password?.match(/[A-Z]/) ? "text-success-700" : "text-error-500"}`}>One Uppercase character</li>
              <li className={`${password?.match(/[a-z]/) ? "text-success-700" : "text-error-500"}`}>One lowercase character</li>
              <li className={`${password?.match(/[#?!@$ %^&*-]/) ? "text-success-700" : "text-error-500"}`}>One special character</li>
              <li className={`${password?.match(/[0-9]/) ? "text-success-700" : "text-error-500"}`}>One number</li>
            </ul>
            <div className="flex flex-col gap-8 mt-6">
              <FormControlLabel
                control={
                  <Checkbox
                    {...register("promotion", {
                      required: "Field is required"
                    })}

                    error={!!errors.promotion}
                  />
                }
                labelPlacement="end"
                label="I want to receive emails about the product, feature updates, events, and marketing promotions."
              />
              <p className="text-white-900">By creating an account, you agree to the <Link className="text-grey-900 underline">Terms of use</Link> and <Link className="text-grey-900 underline">Privacy Policy.</Link></p>
            </div>
            <div className="flex flex-col w-full md:w-1/2 gap-2 mt-4">
              <LoadingButton fullWidth type="submit" variant="contained" loading={loading} color="primary" size="large">Log In</LoadingButton>
              <p className="text-white-900">Already have an account? <Link to='/login' className="underline text-grey-900">Log in</Link></p>
            </div>
          </form>
        </div>
        <div className="hidden md:block md:w-1/3 ">
          <img className="bg-cover h-[100%]" src='./images/signup.png' alt='signup image' />
        </div>

      </div>:<EmailVerificationLoadingScreen />}
     
    </>
  )
}

export default Signup