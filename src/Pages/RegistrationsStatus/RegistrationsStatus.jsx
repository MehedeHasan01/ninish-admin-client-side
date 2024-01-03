import {  useLoaderData } from "react-router-dom";
import swal from "sweetalert";
import useAuth from "../../Hooks/useAuth";

const RegistrationsStatus = () => {
    const {user} = useAuth()
    const allRegistrations = useLoaderData();

    const registrations = allRegistrations.myRegistrationsData;







    // handle users Status put (update) function
    const handleRegistrationStatus =(status)=>{
        fetch(`http://localhost:5000/registration/${user?.email}`,{
            method: "PUT",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(status)
        })
        .then(res => res.json())
        .then(() =>{
                window.location.reload();
                swal('Good Job', 'Registration Status Change', 'success')

            });
    };

    const handleRegistrationStatusPending =()=>{
        const registrationStatus = 'pending';
        handleRegistrationStatus({registrationStatus});

    }

    const handleRegistrationStatusApproved =()=>{
        const registrationStatus = 'approved'
        handleRegistrationStatus({registrationStatus})
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
                        <th className="text-lg border border-gray-300 px-4 py-2">Email </th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            registrations?.map(registration => <tr key={registration._id}>
                                <th className="text-base border border-gray-300 px-4 py-2">1 </th>
                                <td className="text-base border border-gray-300 px-4 py-2">{registration?.displayName}</td>
                                <td className="text-base border border-gray-300 px-4 py-2"><div className="flex items-center gap-1  font-semibold">
                                    {registration?.registrationStatus}
                                    <div className="flex flex-col gap-2">
                                        <button onClick={handleRegistrationStatusPending}  className="badge badge-primary text-sm">Pending</button>
                                        <button  onClick={handleRegistrationStatusApproved} className="badge badge-success text-white text-sm">Approved</button>
                                    </div>
                                    </div></td>
                                <td className="text-base border border-gray-300 px-4 py-2">{registration.userEmail}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

            </div>



        </div>
    );
};

export default RegistrationsStatus;
