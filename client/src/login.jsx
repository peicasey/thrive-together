// login template code (client id is accurate, copy+paste the same one each time)
import { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";
import './Login.css' // hypothetical css import for login styling

function Login() {
    const [ user, setUser ] = useState({});

    function handleCallbackResponse(response) {
        console.log("Encoded JWT ID token: " + response.credential);
        var userObject = jwt_decode(response.credential);
        console.log(userObject);
        setUser(userObject);
        document.getElementById("signInDiv").hidden = true;
    }

    function handleSignOut(event) {
        setUser({});
        document.getElementById("signInDiv").hidden = false;
    }

    useEffect(() => {
        /* global google */
        google.accounts.id.initalize({
            client_id: "892235413140-53t2tbh7i0dbau2vvntgfcam0mg1ordl.apps.googleusercontent.com",
            callback: handleCallbackResponse
        });

        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { theme: "outline", size: "large"}
        );

        google.accounts.id.prompt();
    }, []);

    return (
        <div className="Login">
            <div id="signInDiv"></div>
            { Object.keys(user).length != 0 &&
                <button onClick={ (e) => handleSignOut(e)}>Sign Out</button>
            }

            { user &&
                <div>
                    <img src={user.picture}></img>
                    <h3>{user.name}</h3>
                </div>
            }
        </div>
    );
}

export default Login;