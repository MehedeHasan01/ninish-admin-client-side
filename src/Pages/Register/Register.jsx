import { Link, useNavigate } from "react-router-dom";
import {  updateProfile } from "firebase/auth";
import { useState } from "react";
import swal from "sweetalert";
import { IoEye, IoEyeOff} from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";

import useAuth from "../../Hooks/useAuth";



const Register = () => {
    const { createUser} = useAuth()
    const [success, setSuccess] = useState()
    const [showPassword, setShowPassword] = useState(false)
    const Navigate = useNavigate()




    const handleRegisterForm = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const email = form.get('email')
        const password = form.get('password')
        const adminInfo ={name, email, password}

        // admin data post

        fetch('http://localhost:5000/admins',{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(adminInfo)
        })
        .then(res => res.json())
        .then(data =>{
          console.log(data);
        });

        createUser(email, password)
        .then(res => {
            const user = res.user
            updateProfile(user, {
                displayName: name,


            });





            swal( 'Good Job','User Create SuccessFully!', 'success');
            setSuccess('User Create Successfully!!')
            e.target.reset()
            Navigate('/')

        })
        .catch(() =>{
            toast.error('Email-Already-in-use')

        })
    }


    return (
        <div className="bg-[#F3F3F3] py-10">

            <div className="w-10/12 md:w-1/2 mx-auto bg-white p-3 md:px-20 md:py-5">
            <div>

            <h1 className="font-bold text-3xl md:text-4xl text-titleGrey   text-center">Register your account</h1>
            <hr className="text-titleGrey my-8" />
            <form onSubmit={handleRegisterForm} >

                    <div className="form-control">
                    <label className="label">
                        <span className="font-semibold text-xl text-titleGrey   text-center label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Enter your Name" name="name" className="input input-bordered border-none text-lg bg-[#F3F3F3]" required />
                    </div>



                    <div className="form-control">
                    <label className="label">
                        <span className="font-semibold text-xl text-titleGrey   text-center label- mt-5">Email address</span>
                    </label>
                    <input type="email" placeholder="Enter your email address" name="email" className="input input-bordered border-none text-lg bg-[#F3F3F3]" required />
                    </div>

                    <div className="form-control relative">
                    <label className="label">
                    <span className="font-semibold mt-5 text-xl text-titleGrey   text-center label-text">Password</span>
                    </label>

                    <input id="password" type={ showPassword ? 'text': "password"  } placeholder="password" name="password" className="input input-bordered border-none text-lg bg-[#F3F3F3]" required />

                    <label htmlFor="password"  onClick={()=> setShowPassword(!showPassword)} className="text-xl absolute right-3 top-20 w-fit cursor-pointer text-titleGrey">
                        {
                            showPassword ?

                            <IoEyeOff/>
                            :
                            <IoEye/>
                        }
                    </label>

                    </div>
                    <div className="form-control mt-6">
                    <button className="bg-primary py-2 rounded text-white text-xl font-semibold">Register</button>
                    </div>

                    <p className="text-success font-bold text-xl my-1 pt-2">{success}</p>

                    <div className="text-titleGrey mt-7 text-center font-semibold " >
                        <span>Already create account Now vigite ?</span>
                        <Link to={'/login'} className="ml-1 text-[#F75B5F] link-hover">Login</Link>
                    </div>


            </form>
                </div>
            </div>


            <Toaster/>
        </div>
    );
};

export default Register;