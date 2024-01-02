import { Link,  useNavigate } from "react-router-dom";
import swal from "sweetalert";
import  { Toaster } from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";




const Login = () => {
    const { login, } = useAuth()


    const Navigate = useNavigate()
    const handleLoginForm = e =>{

        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')

        // Login Method
        login(email, password)
        .then(() => {
            swal('Good Job', 'Your Login Successfully', 'success')
            Navigate('/ ')
        })
        .catch(() =>{
            swal( 'Dont’t Have An Account ?',`Create a New Account `, 'error')
        })
    }




    return (
        <div className="bg-[#F3F3F3]  py-16">


            <div className="w-10/12 md:w-1/2 mx-auto bg-white p-3 py-3 md:px-20 md:py-5">
                <div>

            <h1 className="font-semibold text-4xl text-titleGrey   text-center">Login your account</h1>
            <hr className="text-titleGrey my-8" />
            <form onSubmit={handleLoginForm}>
                    <div className="form-control">
                    <label className="label">
                        <span className="font-semibold text-xl text-titleGrey   text-center label-text">Email address</span>
                    </label>
                    <input  type="text" placeholder="Enter your email address" name="email" className="input input-bordered border-none text-lg bg-[#F3F3F3]" required />

                    </div>
                    <div className="form-control">
                    <label className="label">
                    <span className="font-semibold mt-6 text-xl text-titleGrey   text-center label-text">Password</span>

                    </label>
                    <input type="password" placeholder="password" name="password" className="input input-bordered border-none text-lg bg-[#F3F3F3]" required />

                    </div>
                    <div className="form-control mt-6">
                    <button    className="bg-primary py-2 rounded text-white text-xl font-semibold">Login</button>
                    </div>
            </form>
                    <div className="text-titleGrey mt-7 text-center font-semibold " >
                        <span>Dont’t Have A Account ?</span>
                        <Link to={'/register'} className="ml-1 text-[#F75B5F] link-hover">Register</Link>
                    </div>
                </div>
            </div>



        <Toaster/>
        </div>
    );
};

export default Login;