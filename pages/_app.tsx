import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {UserProvider} from '@auth0/nextjs-auth0';


import {ApolloProvider} from "@apollo/client";
import client from "../lib/apollo-client";





function MyApp({Component, pageProps}: AppProps) {


    return (
        <ApolloProvider client={client}>
            <UserProvider>
                <Component {...pageProps} />
            </UserProvider>
        </ApolloProvider>
    );

}

export default MyApp
