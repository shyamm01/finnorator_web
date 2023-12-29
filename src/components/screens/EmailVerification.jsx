import { LoadingButton } from '@mui/lab'
import { useEffect, useState } from 'react';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const EmailVerification = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [resend, setResend] = useState(false);
    const [timer, setTimer] = useState(60);
    const navigate = useNavigate();

    const resendEmail = () => {
        setLoading(true);
        setResend(true);
        setTimeout(() => {
            console.log('email resend successfully');
            setLoading(false);
        }, 2000);
    };

    const sendEmail = () => {
        setLoading(true)
        setTimeout(() => {
            console.log('Email has been sent successfully');
            setLoading(false);
            setSuccess(true);
        }, 2000)
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (timer > 0) {
                setTimer(timer - 1);
            }else{
                setResend(false);
                clearInterval(interval);
                setTimer(60)
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [timer]);

    return (

        <div className='w-full flex justify-between '>
            <div className="w-full md:w-2/3 flex flex-col items-center  p-10 gap-10">
                <div className='p-8 flex flex-col justify-center items-center gap-12 border-white-600 border-[1px]'>
                    <p className='text-center font-medium font-sans text-h4'>Email Verification</p>
                    <div className='h-[115px] w-[115px] '>
                        {!success ?
                            <img className='bg-cover rounded-[50%] bg-[#D9ECF7] ' src='./images/Emailspinner.png' /> :
                            <img className='bg-cover' src='./images/emailverificationsuccess.png' />
                        }

                    </div>
                    {!success ? <>
                        <div className='flex flex-col gap-8 justify-center'>
                            <p className='text-center font-normal font-sans text-h5'>Open email app for Verify</p>
                            <div className=''>
                                <LoadingButton fullWidth onClick={sendEmail} loading={loading} variant='contained' color='primary'>Open email app</LoadingButton>
                                {!resend ?
                                    <p className=' mt-2 text-center font-normal font-sans text-regular'>Didn’t receive the email? <span className='underline cursor-pointer' onClick={resendEmail}>Click to resend</span></p> :
                                    <p className=' mt-2 text-center font-normal font-sans text-regular'>Resend Verification after {`00:${timer}`}</p>
                                }
                            </div>
                        </div>
                        <div className='flex justify-around items-center'>
                            <MdKeyboardArrowLeft className='me-2' />
                            <span className='cursor-pointer' onClick={()=>navigate('/signup')}>Back to sign up</span>
                        </div>
                    </> : <>
                        <div className='flex flex-col gap-8 justify-center'>
                            <p className='text-center font-normal font-sans text-h4'>Welcome to Company Experience</p>

                        </div>
                        <div className='flex justify-around items-center'>
                            <span className='text-center font-normal font-sans text-h5'>Email verification was successful.</span>
                        </div>
                    </>
                    }
                </div>
            </div>
            <div className="hidden md:block md:w-1/3 ">
                <img className="bg-cover h-[100%]" src='./images/signup.png' alt='signup image' />
            </div>
        </div>
    )
}

export default EmailVerification