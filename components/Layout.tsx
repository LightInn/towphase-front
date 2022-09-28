// components/layout.js

// import Navbar from './navbar'
// import Footer from './footer'

import SideNavbar from "./SideNavbar";
import Profile from "../pages/app/profile";
import {useUser} from "@auth0/nextjs-auth0";
import {useRouter} from "next/router";


// @ts-ignore
export default function Layout({children}) {

    const {user, error, isLoading} = useUser();
    const router = useRouter();

    if (isLoading) return <div>Loading... !</div>;
    if (error) return <div>{error.message}</div>;

    if (!user) {


        const privatePath = ['app'];
        const path = router.asPath.split('?')[0].split('/')[1];
        console.log("path : ", path);

        if (privatePath.includes(path)) {
            router.push({
                pathname: '/'
            });
        }


        return (

            <>
                <main>{children}</main>
            </>

        );
    }


    return (
        <>
            <SideNavbar/>

            {/*<Navbar />*/}
            <main>{children}</main>
            {/*<Footer />*/}
        </>
    )
}
