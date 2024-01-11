import { Checkbox, FormControlLabel,  IconButton, InputAdornment, TextField } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { LoadingButton } from '@mui/lab';


const Login = () => {
    const { handleSubmit, register, formState } = useForm();
    const { errors } = formState;

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);

    const onSubmit = async (data) => {
        setLoading(true);
        setTimeout(() => {
            console.log(data);
            setLoading(false)
        }, 2000)
        console.log(data)
    };


    return (
        <div className="w-full flex justify-center items-center h-screen bg-cover bg-no-repeat bg-[url('/images/login.png')]">
            <div className='flex bg-white-50 p-8 rounded-lg flex-col gap-6 '>
                <div className='flex'>
                    <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <p className='text-center text-h4 font-medium'>Log in</p>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-6'>
                            <TextField
                                fullWidth
                                label='Email'
                                variant="outlined"

                                size='large'
                                {...register("email", {
                                    required: "Email Address is required",
                                    validate: {
                                        maxLength: (v) =>
                                            v.length <= 50,
                                        matchPattern: (v) =>
                                            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                                            "Enter correct email address",
                                    },
                                })}
                                error={!!errors.email}
                                helperText={errors.email?.message}
                            // onChange={someChangeHandler}
                            // inputRef={register({ required: true })}
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
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 8,
                                        message: "Enter correct password"
                                    },
                                    matchPattern: (v) =>
                                        /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(v) ||
                                        "Enter correct password",
                                })}
                                //inputRef={register({ required: true })}
                                error={!!errors.password}
                                helperText={errors.password?.message}
                            />

                            {/* <FormHelperText >Enter correct email address</FormHelperText> */}

                        </div>
                        <div className='flex justify-between items-center gap-2 text-white-900'>
                            <FormControlLabel
                                control={<Checkbox

                                />}
                                labelPlacement="end"
                                label="Keep me sign in"
                            />
                            <Link className='underline text-grey-900 text-regular'>Forget your password?</Link>
                        </div>
                        <LoadingButton type='submit' loading={loading} variant='contained' color='primary' size='large'>Log In</LoadingButton>
                    </form>
                </div>
                <div className='flex justify-center items-center border-[1px] border-white-900 border-opacity-60 py-6'>
                    <p className='font-normal text-large text-white-900'>Don’t have an ccount? <Link to={'/signup'} className='underline font-normal text-large text-grey-900'>Sign up</Link> </p>
                </div>
            </div>
        </div>
    )
}

export default Login