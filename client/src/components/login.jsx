// login template code (client id is accurate, copy+paste the same one each time)
import { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode"; // to decode json webtokens that we get from a user login via google sign-in
// global google script added to index.html under ../public

function Login() { // this will essentially create a sign-in button with a sign-out button fully implemented
    const [ user, setUser ] = useState({});

    function handleCallbackResponse(response) {
        console.log("Encoded JWT ID token: " + response.credential); // logs the user's json webtoken for decoding (this is how we get the info on who's who from google)
        var userObject = jwt_decode(response.credential); // this is from jwt-decode to decode the user data from a json webtoken
        console.log(userObject);
        setUser(userObject);
        document.getElementById("signInDiv").hidden = true; // hides sign-in button after a successful login
    } // authorized test sign-in users: casey (gmail, tamu email), ryan (gmail, tamu email)

    function handleSignOut(event) { // we don't really need event, this is here incase of additional functionality
        setUser({});
        document.getElementById("signInDiv").hidden = false; // show the sign-in div so users have the option to sign in again after logging out
    }

    useEffect(() => {
    
        /* global google */
        google.accounts.id.initialize({
            client_id: "892235413140-53t2tbh7i0dbau2vvntgfcam0mg1ordl.apps.googleusercontent.com", // our app's unique sign in id authorized for localhost, localhost:3000, and the thrive-together vercel app link 
            callback: handleCallbackResponse
        });

        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { theme: "outline", size: "large"}
        );
        

        google.accounts.id.prompt(); // automatically will prompt returning users to login with chrome
    }, []);

    return (
        <div className="Login">
            <script src="https://accounts.google.com/gsi/client" async defer></script>
            <div className="p-4 flex items-center justify-center">
                <div id="signInDiv"></div>
                <div className="flex flex-col justify-center">
                    

                    { user && // this is a display of the user's pfp and username to show that they have been successfully logged in for testing
                        <div className="flex flex-col justify-center">
                            <h2 className="text-xl m-4 font-bold text-emerald-700 dark:text-teal-400">{user ? "" : "Success! Signed in as:"}</h2>
                            <img className="rounded-full" src={user.picture} alt={user ? "" : "user image"}/>
                            
                            {/* <img className="fixed top-0 right-0 z-[100] rounded-full w-10 mt-3 mr-8" src={user.picture} alt=""/> */}

                            <h3 className="text-center text-slate-600 dark:text-slate-400">{user.name}</h3>
                        </div>
                        
                    }

                    { Object.keys(user).length != 0 && // only shows sign out button if a user is signed in
                        <button 
                            className="m-4 p-4 font-bold bg-emerald-500 rounded-md hover:bg-emerald-400 hover:rounded-xl duration-500" 
                            onClick={ (e) => handleSignOut(e)}
                        >
                            Sign Out?
                        </button>
                    }
                </div>
                
            </div>
        </div>
    );
}

export default Login;