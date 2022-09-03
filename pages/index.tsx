import type {NextPage} from 'next'
import Dash from "./dash";
import {useUser} from '@auth0/nextjs-auth0';
import Profile from "./profile";


const Home: NextPage = () => {


    const {user, error, isLoading} = useUser();

    if (isLoading) return <div>Loading... !</div>;
    if (error) return <div>{error.message}</div>;

    if (user) {
        return (

            <Profile/>
        );
    }

    return <Dash/>;


}

export default Home;