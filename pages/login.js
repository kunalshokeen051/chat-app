import Link from 'next/link'
import React,{useEffect} from 'react'
import { IoLogoGoogle, IoLogoFacebook } from 'react-icons/io'
import {auth} from "@/firebase/firebase";
import { signInWithEmailAndPassword, GoogleAuthProvider } from 'firebase/auth';
import {useAuth} from '@/context/authContext';
import { useRouter } from 'next/router';

const gProvider = new GoogleAuthProvider();

const Login = () => {
const router = useRouter();

const { currentUser, isLoading} = useAuth();

useEffect(() => {
if(!isLoading && currentUser){
    // it means that the user is logged in

     router.push("/");
}
}, [currentUser, isLoading]);


    const handleSubmit = async (e) =>{
      e.preventDefault();  //prevent application refresh
      const email = e.target[0].value;
      const password = e.target[1].value;
      try{
        await signInWithEmailAndPassword(auth, email, password);
      }
      catch(err){
        console.log(err);
      }
    }
    

    return isLoading || (!isLoading && currentUser) ? 'Loader...' : (
        <div className='h-[100vh] flex justify-center items-center bg-c1'>
            <div className="flex items-center flex-col">
                <div className="text-center">
                    <div className="text-4xl font-bold">
                        Login to your account
                    </div>
                    <div className="mt-3 text-c3">
                        Connect and chat with anyone, anywhere
                    </div>
                </div>
               {/* login buttons */}
                <div className="flex items-center gap-2 w-full mt-10 mb-5">

                    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-1/2 h-14 rounded-md cursor-pointer p-[1px] ">
                        <div className='flex items-center justify-center gap-3 text-white font-semibold bg-c1 w-full h-full rounded-md'>
                            <IoLogoGoogle size={24} />
                            <span> Login With Google</span>
                        </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-1/2 h-14 rounded-md cursor-pointer p-[1px] ">
                        <div className='flex items-center justify-center gap-3 text-white font-semibold bg-c1 w-full h-full rounded-md'>
                            <IoLogoFacebook size={24} />
                            <span>Login With Facebook</span>
                        </div>
                    </div>
                </div>


                <div className="flex items-center gap-1">
                    <span className='w-5 h-[1px] bg-c3'></span>
                    <span className='text-c3 font-semibold'>OR</span>
                    <span className='w-5 h-[1px] bg-c3'></span>
                </div>

                <form className='flex flex-col items-center gap-3  w-[500px] mt-5'
                onSubmit={handleSubmit}
                >
                    <input type="email" className='w-full h-14 bg-c5 rounded-xl outline-none border-none px-5 text-c3' placeholder='email' autoComplete='off' />
                    <input type="password" className='w-full h-14 bg-c5 rounded-xl outline-none border-none px-5 text-c3' placeholder='password' autoComplete='off' />
                    <div className="text-right w-full text-c3">
                        <span className='cursor-pointer'>Forgot Password?</span>
                    </div>
                    <button className='mt-4 w-full h-14 rounded-xl outline-none text-base font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Login to Your Account</button>
                </form>

                <div className="flex justify-center gap-1 text-c3 mt-5 ">
                   <span>Not a Member Yet?</span>
                   <Link 
                   href='/register'
                   className='font-semibold text-white underline-offset-2 cursor-pointer'
                   >Register Now</Link>
                </div>
            </div>
        </div>
    )
}

export default Login