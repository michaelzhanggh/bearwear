import { Link } from 'react-router-dom'
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import { useNavigate } from 'react-router-dom'

function Navbar() {
    let navigate = useNavigate();
    const logOut = async () => {
        await signOut(auth);
        navigate('/')
    }
    return (
        <div className='flex flex-row justify-end items-center'>
            <div className='pb-7 pt-5 justify-start mr-auto'>
                <Link className='text-3xl font-bold pl-5'
                to={"/"}>Bearwear</Link>
            </div>
            <button className='ml-5 mr-5 text-base' onClick={ logOut }>Log Out</button>
        </div>
    );
}
export default Navbar