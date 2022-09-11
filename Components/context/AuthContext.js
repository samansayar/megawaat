import Router, { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const router = useRouter();
    // register the AuthProvider
    const register = async (user) => {
        await fetch('https://megawaat.com/api/Login/SendSmsCode', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json',
            },
            body: JSON.stringify({
                mobile: user.PhoneOREmail,
                passwordHash: user.password,
                rememberMe: false,
                userName: user.username,
            }),
        })
            .then(res => {
                console.log('ارسال کد به شماره تلفن', res)
            })
            .catch(error => console.log('مشکل برای ارسال کد به تلفن', error));
    }
    // Login the AuthProvider
    const login = async (user) => {
        console.log('login', user)
        await fetch('https://megawaat.com/api/Login/LoginWithMobilePassword', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json',
            },
            body: JSON.stringify({
                mobile: user.PhoneOREmail,
                passwordHash: user.password,
                rememberMe: true,
                userName: "",
            }),
        })
            .then(res => res.json()).then((response, req) => {
                if (response.status === 200) {
                    localStorage.setItem('tk_mega', response.data.token);
                    localStorage.setItem('datauser', JSON.stringify(response.data.userdata));
                    router.push('/');
                    toast.success('با موفقیت وارد شدید');
                    return;
                }
                console.log(response)
                toast.error(response);
            })
            .catch(error => console.log('شماره تلفن و پسورد', error));
    }
    // Logout the AuthProvider
    const logout = () => {
        toast.loading('از حساب خود خارج شدید');
        localStorage.clear();
        window.location.href = '/';
    }


    return (
        <AuthContext.Provider value={{ register, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;