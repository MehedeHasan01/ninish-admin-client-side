import { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoMenu } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from '../../assets/images/Logo/logo.png'

import useAuth from "../../Hooks/useAuth";
import swal from "sweetalert";



const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const {user, logOut} = useAuth();
    const navigate = useNavigate()

    const handleLogOut =()=>{
        logOut()
        .then(()=> {
            swal('Good Job', 'Your Log Out Successfully', 'success');
            navigate('/')
        })
        .catch(error => console.error(error))
    }


    return (
        <>
        <nav className="bg-white  sticky w-full border-b z-20 top-0 start-0 ">

        <div className=" flex flex-wrap items-center justify-between  max-w-[1200px]  mx-auto px-3  xl:px-0 z-50  py-2">

            {/* Menu bar */}
            <button className="lg:hidden" type="button" onClick={()=> setOpenMenu(!openMenu)}>
                        <div className="text-4xl">
                        {
                            openMenu ? <BiMenuAltLeft/> : <IoMenu/>
                        }
                        </div>
            </button>


            {/* Logo */}
            <Link to={'/'} className="rtl:space-x-reverse">
                <img src={Logo} alt="" className="h-[2.90rem]" />
            </Link>


        {/* Account btn*/}

        {
            user ?
            <div className="flex lg:order-2  rtl:space-x-reverse items-center gap-2">
                <h3 className="hidden sm:block">{user?.displayName}</h3>
                 <Link to={'/'} >
                {/* <img src={user?.photoURL} alt="Ninish" className=" h-[2.90rem] rounded-full border border-indigo-800" /> */}
            </Link>

            <button onClick={handleLogOut} className=" cursor-pointer rounded-md bg-gradient-to-tr  from-violet-700 to-indigo-800 px-4 py-2 text-white">
                LogOut
             </button>

            </div>

            :
            <div className="flex lg:order-2  rtl:space-x-reverse">
                    <Link to={'/login'} className=" cursor-pointer rounded-md bg-gradient-to-tr  from-violet-700 to-indigo-800 px-4 py-2 text-white">
                Login
                    </Link>
        </div>
        }



        {/* Nav link */}
        <div className={`items-center justify-between  w-full lg:flex h-[100vh]  lg:h-fit  lg:w-auto lg:order-1 ${openMenu? 'block' : 'hidden'} `}
        onClick={()=> setOpenMenu(!openMenu)}
        >

            <ul className="flex flex-col p-4 lg:p-0 mt-4 font-medium  border-t lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 duration-500">


            <li>
                <NavLink className={'hover:text-[#6d28d9]'}  to={'/users'}>Users</NavLink>
                <hr className="my-2 lg:hidden"/>
            </li>

            <li>
                <NavLink className={'hover:text-[#6d28d9]'}  to={'/registrations'}>Registrations</NavLink>
                <hr className="my-2 lg:hidden"/>
            </li>

            <li>
                <NavLink className={'hover:text-[#6d28d9]'}  to={'/register'}>Register</NavLink>
                <hr className="my-2 lg:hidden"/>
            </li>

            <li>
                <NavLink className={'hover:text-[#6d28d9]'}  to={'/QRScanner'}>QRScanner</NavLink>
                <hr className="my-2 lg:hidden"/>
            </li>




            </ul>
        </div>
        </div>
        </nav>
        </>
    );
};

export default Navbar;