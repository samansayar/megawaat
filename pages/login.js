import Head from 'next/head';
import Link from 'next/link';
import React, { useContext, useState } from 'react'
import Header from '../Layouts/Header';
import { signIn } from "next-auth/react"
import AuthContext from '../Components/context/AuthContext';
import toast from 'react-hot-toast';

export default function Login() {
    const { register, login } = useContext(AuthContext);
    const [step, setstep] = useState(1);
    const [loading, setloading] = useState(false)
    const [showPass, setshowPass] = useState('password');
    const [PhoneOREmail, setPhoneOREmail] = useState('09016189372');
    const [password, setpassword] = useState('12345678');
    const [flname, setflname] = useState('')
    const [username, setusername] = useState('')

    async function LoginAuthentication() {
        setloading(true);
        if (PhoneOREmail === '' || PhoneOREmail.length < 10) {
            toast.error('مقدار وارد شده اشتباه است');
            setloading(false);
            return;
        }
        if (password.length < 5) {
            toast.error('رمزعبور باید بیشتر از ۸ کاراکتر باشد');
            setloading(false);
            return;
        }
        if (step === 1) {
            setTimeout(async () => {
                await fetch('https://megawaat.com/api/Login/LoginCheckMobile', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        'accept': 'application/json',
                    },
                    body: JSON.stringify({
                        mobile: PhoneOREmail,
                        passwordHash: password,
                        rememberMe: false,
                        userName: "",
                    }),
                }).then(async response => {
                    const data = await response.json();
                    if (response.ok) {
                        switch (data) {
                            case 'Login':
                                login({ PhoneOREmail, password });
                                break;
                            case 'Register':
                                setstep(2);
                                break;
                        }
                    } else {
                        toast.error(data);
                    }
                    setloading(false);
                }).catch(err => {
                    setloading(false);
                    console.log('err::::', err);
                });
            }, 500);
        }
        if (step === 2) {
            register({ PhoneOREmail, password, flname, username });
            setloading(false);
        }
    }

    return (
        <Header title={'ورود به حساب کاربری - مگاوات'}>
            <div className='auth-page'>
                <div className='auth-box'>
                    <h1 className='text-center my-2 text-xl sans-bold sans-bolisher text-blacker dark:text-textdark'>
                        ورود به حساب کاربری
                    </h1>
                    <div autoComplete="off" className='mt-5 mb-3 w-full flex flex-col space-y-4'>
                        <div></div>
                        {step === 1 && (
                            <>
                                <>
                                    <div className='relative block w-full'>
                                        <input
                                            value={PhoneOREmail}
                                            disabled={loading}
                                            onChange={(e) => setPhoneOREmail(e.target.value)}
                                            className='text-sm sans-bolish placeholder:text-black dark:border-secondery rounded-xl py-4 px-6 bg-transparent border w-full border-gray-300 focus:outline-none focus:border-gray-400 transition duration-150'
                                            type={'text'} placeholder="ایمیل یا شماره همراه" />
                                    </div>
                                </>
                                <>
                                    <div className='relative block w-full mt-3'>
                                        <input
                                            value={password}
                                            onChange={(e) => setpassword(e.target.value)}
                                            className='text-sm sans-bolish placeholder:text-black dark:border-secondery rounded-xl py-4 px-6 bg-transparent border w-full border-gray-300 focus:outline-none focus:border-gray-400 transition duration-150'
                                            type={`${showPass}`} placeholder="رمز عبور" />
                                        <div className='absolute left-0 top-0 bottom-0 flex justify-center items-center rounded-xl w-12'>
                                            {showPass === 'password' ? (
                                                <button type='button' onClick={() => setshowPass(showPass === 'password' ? 'text' : 'password')} className='ml-3 active:scale-75 transation duration-150'>
                                                    <svg className='w-6 h-6 text-gray-400' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M15.1643 12.0519C15.1643 13.7979 13.7483 15.2139 12.0023 15.2139C10.2563 15.2139 8.84033 13.7979 8.84033 12.0519C8.84033 10.3049 10.2563 8.88989 12.0023 8.88989C13.7483 8.88989 15.1643 10.3049 15.1643 12.0519Z" stroke="CurrentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M2.75024 12.052C2.75024 15.332 6.89224 19.354 12.0022 19.354C17.1112 19.354 21.2542 15.335 21.2542 12.052C21.2542 8.769 17.1112 4.75 12.0022 4.75C6.89224 4.75 2.75024 8.772 2.75024 12.052Z" stroke="CurrentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </button>
                                            ) : (
                                                <button type='button' onClick={() => setshowPass(showPass === 'password' ? 'text' : 'password')} className='ml-3 active:scale-75 transation duration-150'>
                                                    <svg className='w-6 h-6 text-gray-400' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6.42 17.7298C4.19 16.2698 2.75 14.0698 2.75 12.1398C2.75 8.85984 6.89 4.83984 12 4.83984C14.09 4.83984 16.03 5.50984 17.59 6.54984" stroke="CurrentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M19.8498 8.61035C20.7408 9.74035 21.2598 10.9904 21.2598 12.1404C21.2598 15.4204 17.1098 19.4404 11.9998 19.4404C11.0898 19.4404 10.2008 19.3104 9.36975 19.0804" stroke="CurrentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M9.76572 14.3672C9.17072 13.7782 8.83772 12.9752 8.84072 12.1382C8.83672 10.3932 10.2487 8.97518 11.9947 8.97218C12.8347 8.97018 13.6407 9.30318 14.2347 9.89718" stroke="CurrentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M15.1095 12.6992C14.8755 13.9912 13.8645 15.0042 12.5725 15.2412" stroke="CurrentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M19.8917 4.25L4.11768 20.024" stroke="CurrentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </>
                            </>
                        )}
                        {step === 2 && (
                            <>
                                <>
                                    <div className='relative block w-full'>
                                        <input
                                            value={flname}
                                            disabled={loading}
                                            onChange={(e) => setflname(e.target.value)}
                                            className='text-sm sans-bolish placeholder:text-black dark:border-secondery rounded-xl py-4 px-6 bg-transparent border w-full border-gray-300 focus:outline-none focus:border-gray-400 transition duration-150'
                                            type={'text'} placeholder="نام نام خانوادگی" />
                                    </div>
                                </>
                                <>
                                    <div className='relative block w-full'>
                                        <input
                                            value={username}
                                            disabled={loading}
                                            onChange={(e) => setusername(e.target.value)}
                                            className='text-sm sans-bolish placeholder:text-black dark:border-secondery rounded-xl py-4 px-6 bg-transparent border w-full border-gray-300 focus:outline-none focus:border-gray-400 transition duration-150'
                                            type={'text'} placeholder="نام نمایشی در سایت" />
                                    </div>
                                </>
                            </>
                        )}

                        <>
                            <Link href="/forget-password">
                                <div className='flex items-center w-full text-blue-500'>
                                    <svg className='w-5 h-5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M2.74976 12C2.74976 5.063 5.06276 2.75 11.9998 2.75C18.9368 2.75 21.2498 5.063 21.2498 12C21.2498 18.937 18.9368 21.25 11.9998 21.25C5.06276 21.25 2.74976 18.937 2.74976 12Z" stroke="CurrentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M11.9998 8.10498V12" stroke="CurrentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M11.9955 15.5H12.0045" stroke="CurrentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span className='text-xs mr-2 sans-bolish tracking-tight'>گـذرواژه خـود را فـراموش کـرده اید؟</span>
                                </div>
                            </Link>
                        </>
                        <div className='mt-16 flex flex-col items-center justify-center w-full'>
                            <button type='button' onClick={LoginAuthentication} disabled={loading}
                                className='btn py-4 bg-primary px-3 flex text-sm sans-bolish justify-center text-center items-center w-full rounded-xl text-white'>
                                {loading ? (
                                    <div role="status" className=' capitalize flex justify-center items-center'>
                                        <svg aria-hidden="true" className="mr-2 w-6 h-6 text-black animate-spin fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                        </svg>
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                ) : (
                                    <>
                                        {step === 1 ? 'ورود به حساب کاربری' : 'ثبت نام در مگاوات'}
                                    </>
                                )}
                            </button>
                            <div className="mt-8 grid space-y-4 w-full">
                                <button onClick={() => signIn()} className="social-box hover:bg-primary text-gray-700  hover:text-white">
                                    <div className="relative flex items-center space-x-4 justify-center">
                                        <div></div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-4 mr-2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill="#EA4335"
                                                d="M5.266 9.765A7.077 7.077 0 0112 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115z"
                                            ></path>
                                            <path
                                                fill="#34A853"
                                                d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 01-6.723-4.823l-4.04 3.067A11.965 11.965 0 0012 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987z"
                                            ></path>
                                            <path
                                                fill="#4A90E2"
                                                d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21z"
                                            ></path>
                                            <path
                                                fill="#FBBC05"
                                                d="M5.277 14.268A7.12 7.12 0 014.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 000 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067z"
                                            ></path>
                                        </svg>
                                        <span className="text-social-box sans-bolish">ورود با حساب گوگل</span>
                                    </div>
                                </button>
                            </div>
                            {/* <Link href="/register" className='cursor-pointer'>
                                <div className='flex justify-center items-center w-full mt-6 mb-2'>
                                    <span className='text-sm sans-bolish tracking-tight text-gray-600'>حساب کـاربری ندارید؟</span>
                                    <span className='text-sm mr-1 sans-bolish tracking-tight text-blue-500'>ثبت نام کنید</span>
                                </div>
                            </Link> */}
                        </div>
                    </div>
                    {/* <>
                <button type='button' onClick={() => setstep(1)}>
                  <div className='flex items-center w-full text-blue-500'>
                    <svg className='w-5 h-5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M2.74976 12C2.74976 5.063 5.06276 2.75 11.9998 2.75C18.9368 2.75 21.2498 5.063 21.2498 12C21.2498 18.937 18.9368 21.25 11.9998 21.25C5.06276 21.25 2.74976 18.937 2.74976 12Z" stroke="CurrentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M11.9998 8.10498V12" stroke="CurrentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M11.9955 15.5H12.0045" stroke="CurrentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className='text-xs mr-2 sans-bolish tracking-tight'>ویرایش شماره موبایل؟</span>
                  </div>
                </button>
              </> */}

                </div>
            </div>
        </Header>
    )
}
