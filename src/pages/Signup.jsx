import { Visibility, VisibilityOff } from "@mui/icons-material"
import { Button, Checkbox, FormControlLabel, IconButton, InputAdornment, TextField } from "@mui/material"
import { useState } from "react"
import { Link } from "react-router-dom"

const Signup = () => {

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    promotions: true,
  })

  return (
    <div className='w-full flex justify-between '>
      <div className="w-full md:w-2/3 lg:w-1/2 flex flex-col items-start p-10 gap-10">
        <div className="w-full">
          <h1 className="font-medium text-h4">Sign Up</h1>
        </div>
        <div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col sm:flex-row justify-between gap-8">
              <TextField
                fullWidth
                label='First Name'
                variant="outlined"
                size='large'
                // onChange={someChangeHandler}
                error
                helperText="Only have a-z characters"
              />
              <TextField
                fullWidth
                label='Last Name'
                variant="outlined"
                size='large'
                // onChange={someChangeHandler}
                error
                helperText="Only have a-z characters"
              />
            </div>
            <TextField
              fullWidth
              label='Email'
              variant="outlined"
              size='large'
              // onChange={someChangeHandler}
              error
              helperText="must have @ or ."
            />
            <TextField
              fullWidth
              label='Password'
              variant="outlined"
              size='large'
              type={showPassword ? "text" : "password"} // <-- This is where the magic happens
              // onChange={someChangeHandler}
              InputProps={{ // <-- This is where the toggle button is added.
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
              // error
              // helperText="Incorrect password"
            />
          </div>
          <ul className="flex flex-wrap gap-[18px] list-disc list-inside">
            <li>Use 8 or more characters</li>
            <li>One Uppercase character</li>
            <li>One lowercase character</li>
            <li>One special character</li>
            <li>One number</li>
          </ul>
          <div className="flex flex-col gap-8 mt-6">
            <FormControlLabel
              control={<Checkbox />}
              labelPlacement="end"
              label="I want to receive emails about the product, feature updates, events, and marketing promotions."
            />
            <p>By creating an account, you agree to the Terms of use and Privacy Policy.</p>
          </div>
          <div className="flex flex-col w-full md:w-1/2 gap-2 mt-4">
            <Button fullWidth variant="contained" color="primary" size="large">Log In</Button>
            <p>Already have an account? <Link className="underline">Log in</Link></p>
          </div>
        </div>
      </div>
      <div className="hidden md:block md:w-1/3 ">
        <img className="bg-cover h-[100%]" src='./images/signup.png' alt='signup image' />
      </div>
    </div>
  )
}

export default Signup