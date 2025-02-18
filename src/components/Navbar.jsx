import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'
import { GoogleLogin } from "@react-oauth/google";

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <div >
            <div className='flex justify-end h-1 '>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
                />
            </div>
          
        <div className='flex justify-center items-center cursor-pointer gap-10 text-xl font-bold'>
          <div onClick={() => navigate('/form')} className='hover:underline hover:decoration-orange-500'> Form </div>
          <div onClick={() => navigate('/')}> <img src={logo} alt="logo" /> </div>
          <div onClick={() => navigate('/editor')} className='hover:underline hover:decoration-orange-500'> Editor </div>
        </div>
      </div>
    )
}

export default Navbar
