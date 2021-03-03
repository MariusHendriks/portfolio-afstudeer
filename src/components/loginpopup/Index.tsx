import React, { useState } from "react";
import Cookies from 'universal-cookie';


const LoginPopup: React.FC = () => {
    const [cookieToSet, setCookie] = useState("");

    const cookies = new Cookies();
    const handleClick = () => {

        cookies.set('code', cookieToSet, { path: '/' });

        window.location.reload();

    }
    const cookie = cookies.get('code');
    let wrong = <></>
    if (cookie !== '1337' && cookie !== undefined) {
        wrong = <div className="wrongcode">It appears you entered the wrong code!</div>
    }
    return (
        <div className="loginPopup">
            <h1>hey!</h1>
            <h2>Please use the login code, provided by Mark Hendriks!</h2>
            <input type="text" value={cookieToSet} onChange={e => setCookie(e.target.value)} />
            <input onClick={handleClick} type="submit" value="Submit"></input>
            {wrong}
        </div>
    );
};
export default LoginPopup;