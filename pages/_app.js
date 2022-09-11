import NextNProgress from 'nextjs-progressbar'
import '../styles/globals.css'
import '../styles/custom.css'
import { ThemeProvider } from 'next-themes';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider as ThemeTailwindcss } from "@material-tailwind/react";
import { AuthProvider } from '../Components/context/AuthContext';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps, session }) {
  return (
    <div dir='rtl' className='w-full select-none'>
      <SessionProvider session={session}>
        <AuthProvider>
          <ThemeTailwindcss>
            <ThemeProvider enableSystem={false} attribute="class" storageKey='theme' defaultTheme='light' >
              <div className='overflow-hidden w-full dark:to-[#24303e] bg-textdark dark:bg-[#1C1C1E] dark:text-textdark text-blacker'>
                <NextNProgress
                  color="#0065FD"
                  startPosition={0.3}
                  stopDelayMs={200}
                  height={2}
                  showOnShallow={true}
                />
                <div className='text-sm z-[999999] relative bg-wither sans-bolisher'>
                  <Toaster
                    toastOptions={{
                      duration: 4000,
                    }}
                    containerStyle={{ top: '5rem', right: '2rem', fontFamily: ' estedad-bolish' }}
                    position="top-center"
                    gutter={8}
                  />
                </div>
                <Component {...pageProps} />
              </div>
            </ThemeProvider>
          </ThemeTailwindcss>
        </AuthProvider>
      </SessionProvider>
    </div>
  )
}

export default MyApp
