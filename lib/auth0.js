import { initAuth0 } from '@auth0/nextjs-auth0'
import config from './auth0-config'

export default initAuth0({
    baseURL: process.env.AUTH0_BASE_URL,
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    secret: process.env.AUTH0_SECRET,
    authorizationParams: {
        scope: config.AUTH0_SCOPE,
        audience: config.AUTH0_AUDIENCE
    },
    routes: {
        callback: config.REDIRECT_URI,
        postLogoutRedirect: '/',
    },
    session: {
        rollingDuration: 60 * 60 * 8,
    }
})