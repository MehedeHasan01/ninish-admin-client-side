import { Link, useLoaderData } from "react-router-dom";
import swal from "sweetalert";
import useAuth from "../../Hooks/useAuth";

const Users = () => {
    const {user} = useAuth()
    const allUsers = useLoaderData();
    const users = allUsers.usersData;
    const userEmail = users?.find(user => user?.userEmail);



    // handle users Status put (update) function
    const handleUserStatus =(status)=>{
        fetch(`http://localhost:5000/user/${user?.email}`,{
            method: "PUT",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(status)
        })
        .then(res => res.json())
        .then(() =>{

                window.location.reload();
                swal('Good Job', 'Users Status Change', 'success')


        });
    };

    // const handleUserStatusPending =()=>{
    //     const status = 'pending';
    //     handleUserStatus({status})
    // }

    const handleUserStatusApproved =()=>{
        const status = 'approved'
        handleUserStatus({status})
    }

    return (
        <div className="max-w-[1200px] mx-auto px-3 xl:px-0 h-[88vh] ">

            <div className="flex flex-col md:flex-row gap-3 py-10">

            <div className="">
                <img src='https://i.ibb.co/b5txrkJ/3.png' alt="" className="w-[400px]  border-2 border-red-400" />
            </div>

            <div className="overflow-x-auto bg-white p-5 h-fit">
                <table className="table border-collapse border border-gray-300">
                    {/* head */}
                    <thead>
                    <tr >
                        <th></th>
                        <th className="text-lg border border-gray-300 px-4 py-2">Name</th>
                        <th className="text-lg border border-gray-300 px-4 py-2">Status</th>
                        <th className="text-lg border border-gray-300 px-4 py-2">Email Color</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map(user => <tr key={user._id}>
                                <th className="text-base border border-gray-300 px-4 py-2">1 </th>
                                <td className="text-base border border-gray-300 px-4 py-2">{user?.displayName}</td>
                                <td className="text-base border border-gray-300 px-4 py-2"><div className="flex items-center gap-1  font-semibold">
                                    {user?.status}
                                    <div className="flex flex-col gap-2">
                                        {/* <button onClick={handleUserStatusPending}  className="badge badge-primary text-sm">Pending</button> */}
                                        <button  onClick={handleUserStatusApproved} className="badge badge-success text-white text-sm">Approved</button>
                                    </div>
                                    </div></td>
                                <td className="text-base border border-gray-300 px-4 py-2">{user.userEmail}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
                <Link to={`/user/registrations/${userEmail.userEmail}`} className="btn btn-primary btn-sm text-lg my-2">
                    See Registrations
                </Link>
            </div>

            </div>



        </div>
    );
};

export default Users;
