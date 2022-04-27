import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import { useNavigate } from "react-router-dom";

function SignUp() {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPw, setRegisterPw] = useState("");
    const [signInEmail, setSignInEmail] = useState("");
    const [signInPw, setSignInPw] = useState("");

    const [user, setUser] = useState({});
    let navigate = useNavigate();


    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPw);
            navigate('/');
        } catch (error) {
            console.log(error.message);
        }
    }

    const signIn = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, signInEmail, signInPw);
        } catch (error) {
            console.log(error.message);
        }
    }

    const logOut = async () => {
        await signOut(auth);
    }

    return (
        <div className="flex flex-col justify-center items-center mt-48"> 

            <div className="flex flex-col justify-center">
                <div className="flex justify-center text-3xl font-bold">Sign Up</div>
                <input className='border-2 p-1 mt-5' type="text" placeholder="Email" onChange={(e) => setRegisterEmail(e.target.value)}/>
                <input className='border-2 p-1 mt-5' type="password" placeholder="Password" onChange={(e) => setRegisterPw(e.target.value)}/>
                <button className='text-gray-500 p-1 mt-5 font-bold' onClick={register}>Submit</button>
            </div>

        </div>
    )
}
export default SignUp