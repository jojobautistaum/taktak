import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react';

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

// Deprecated: react-google-login
// import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { GoogleOAuthProvider } from '@react-oauth/google';


const MyApp = ({ Component, pageProps }: AppProps) => {
  // SSR: Server-Side Render set as the initial value to TRUE
  const [isSSR, setIsSSR] = useState(true);

  // SSR to FALSE when it is running in the client side
  useEffect(() => {
    setIsSSR(false);
  }, []);

  // if SSR then we don't want to show our component
  if(isSSR) return null;

  return (
    <GoogleOAuthProvider clientId={`${process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN}`}>
      <Navbar />
      <div className='flex gap-6 md:gap-20'>
        <div className='h-[92vh] overflow-hidden xl:hover:overflow-auto'>
          <Sidebar />
        </div>
        <div className='mt-4 flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1'>
          <Component {...pageProps} />
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

export default MyApp
