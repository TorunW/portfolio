<<<<<<< HEAD
import { SessionProvider } from "next-auth/react";

import Layout from "../components/Layout";
import "../styles/globals.css";
=======
import { SessionProvider } from 'next-auth/react';
import Layout from '../components/Layout';
import '../styles/globals.css';
>>>>>>> 023ceb926f3563ebc6b04687b8d056e4d1bce5a7

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
