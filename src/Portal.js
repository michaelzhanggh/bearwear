import Button from './Button'
import logo from './bearwear_logo.png'

function Portal() {
    return (
        <header className='flex flex-col items-center relative'>
            <img className='w-1/3 lg:w-1/6' src={logo} alt='hello'></img>
            <div className='text-lg mt-12'>DIGITALIZE YOUR CLOSET</div>
            <div className='relative top-24'><Button name='SignIn' /></div>
            <div className='relative top-32'><Button name='SignUp' /></div>
        </header>
    )
}
export default Portal