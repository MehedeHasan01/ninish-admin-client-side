

import { useState } from 'react';
import QrReader from 'react-qr-reader';


const QRScanner = () => {
    const [webcamResult, setWebcamResult] = useState()
    const [userData, setUserData] = useState(null);

    const webcamError = (error)=>{
        console.log(error);
    }
    // const webcamScan =(result)=>{
    //     if(result){
    //         setWebcamResult(result)
    //     }
    // }

    const webcamScan = async (email) => {
        if (email) {
            setWebcamResult(email);
            // Fetch data from Node.js backend using the scanned email
            try {
            // const response = await axios.get(http://localhost:5000/auth/${email});
            // setUserData(response.data);

            fetch(`http://localhost:5000/auth/${email}`,{
            method: "GET",
            })
            .then(res => res.json())
            .then((data) =>{
                setUserData(data);
                console.log(userData);
            });

            } catch (error) {
                console.error(error);
                // Handle error fetching data
            }
        }
    }
    console.log(userData);
    return (
        <div className="w-fit mx-auto  py-10">
            <div className="card w-96 bg-white text-primary-content shadow-2xl border border-blue-600">
            <div className="card-body">

                 <QrReader
                delay ={200}
                onError = {webcamError}
                onScan = {webcamScan}
                legacyMode = {false}
                facingMode ={'user'}
                />


                <p className=' text-black '>
                <p>Webcam Result: <span>{webcamResult}</span></p>
                </p>
                <div className="card-actions justify-center ">
                {userData && (
                    <div className='text-black flex gap-6 justify-start'>
                        <div>
                        <h2 className='font-semibold'>User Data</h2>
                        <p>Name: {userData?.myUserData[0]?.displayName}</p>
                        </div>
                        {/* Display other fetched data properties */}
                        <div>
                        <h2 className='font-semibold'>Registrations</h2>
                        {
                            userData?.myRegistrationsData?.map(myRegistration => <p key={myRegistration._id}>Name: {myRegistration?.displayName}</p>)
                        }
                        </div>
                    </div>
                )}


                </div>
            </div>
            </div>
        </div>
    );
};

export default QRScanner;