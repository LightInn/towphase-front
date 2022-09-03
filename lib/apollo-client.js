import {ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import fetch from "isomorphic-unfetch";


const requestAccessToken = async () => {

    const res = await fetch(`/api/auth/token`)
    if (res.ok) {
        const json = await res.json()
        return json.accessToken.accessToken;
    } else {
        return 'public';
    }
}

const httpLink = createHttpLink({
    uri: 'https://hasura.brev.al/v1/graphql',
});


const authLink = setContext(async (_, {headers}) => {

    // get the authentication token from local storage if it exists
    const token = await requestAccessToken();

    // return the headers to the context so httpLink can read them
    return {

        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    }
});


const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

export default client;