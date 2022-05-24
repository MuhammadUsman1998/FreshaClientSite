import { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from 'react-redux';
// import { userLogin } from '../../redux/Actions/userActions';
import service from "../../assets/images/service.webp"
import { useLocation } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal);



export const LoginSuccess = () => {
    // const [disabledButton, setDisabledButton] = useState(false);

    const location = useLocation();
    const { selectedTime, selectedDate, salonName, salonLocation, serviceTotal, services } = location?.state ? location.state : "";
    console.log('Selected Time:', selectedTime)
    console.log('Selected Date:', selectedDate)
    console.log('Salon Name:', salonName);
    console.log('Salon Location:', salonLocation);
    console.log('Service Total:', serviceTotal);
    console.log('Services', services);

    // const [inputForm, setInputForm] = useState({
    //     contactNumber: "",
    //     password: ""
    // });


    // const dispatch = useDispatch();
    // const navigate = useNavigate();
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const obj = {
    //         contactNumber: inputForm.contactNumber,
    //         password: inputForm.password,

    //     }
    //     dispatch(userLogin(obj));
    //     navigate("")
    // }
    // localStorage.setItem("user", JSON.stringify(""));

    // const handleFormDisabled = () => {
    //     if (!inputForm.contactNumber || !inputForm.password) {
    //         return true
    //     } else {
    //         return false
    //     }
    // }


    // useEffect(() => {
    //     MySwal.fire({
    //         title: "APOINTMENT SUCCESSFULL",
    //         icon: "success",
    //         // allowOutsideClick: false,
    //         showConfirmButton: false,

    //     });
    // }

    //     , []);

    return (

        <div>
            <div className='bg-slate-900 h-36'>
                <div className="max-w-7xl mx-auto px-32 sm:px-6 lg:px-8">
                    <div className=' p-4'>
                        <div className='flex justify-between '>
                            <div className='flex'>
                                <div className='pl-3'>
                                    <Link to="/loginContinue" className="hover:text-gray-600 text-white fa-solid fa-arrow-left float-left pr-5" ></Link>
                                </div>
                                <p className='text-white '>Step 3/3 </p>
                            </div>
                        </div>
                        <h1 className="text-4xl font-bold text-white pl-10">Login Success</h1>
                    </div>
                </div>
            </div >


            <div className='bg-gray-200'>
                <div className="max-w-7xl mx-auto px-48 sm:px-6 lg:px-8">
                    <div className=" flex justify-between  sm:px-6 lg:px-8">
                        <div className="w-2/3  sm:mx-auto sm:w-full sm:max-w-md  xl:w-full">
                            <div className=" bg-white h-96 py-8 px-4 shadow rounded-lg sm:px-10 w-full ">
                                <div className='flex justify-center  h-28  '>
                                    <img className='rounded-full border-5 border-solid border-gray-200 p-3' src="https://img.icons8.com/fluency/48/000000/checkmark.png" />
                                </div>
                                <div className='text-center py-20'>
                                    <h1 className='font-bold text-4xl'>LOGIN SUCCESSFULL</h1>
                                </div>



                            </div>
                        </div >

                        <div className=" bg-white  w-64 shadow-lg rounded-lg sm:mt-5 lg:hidden mr-3 xl:ml-24 xl:w-3/4">
                            <div className='-mt-10 flex justify-center  '>
                                <img className=' rounded-lg shadow-md border-4 border-neutral-100' src={service} />
                            </div>
                            <div className='text-center  pt-3'>
                                {salonName}
                                <br></br>
                                <h1 className='text-gray-400 pt-2'>  {salonLocation}</h1>
                                <hr className='mt-4'></hr>
                            </div>
                            <div className='px-4 py-3 font-bold flex justify-between'>
                                <h1>{selectedDate}</h1>
                                <h1> {selectedTime}</h1>
                            </div>
                            {
                                services?.map((serviceData) => {
                                    return (
                                        <>
                                            <div className="">

                                                <hr className='mt-3'></hr>
                                                <div className="flex justify-between px-4 py-3 ">
                                                    <h1> {serviceData.serviceTitle}</h1>
                                                    <h1> ${serviceData.price}</h1>
                                                </div>
                                                <div className="text-gray-500 px-4">
                                                    <h1> {serviceData.duration}Min</h1>
                                                </div>
                                                <hr className='mt-3'></hr>

                                            </div>

                                        </>

                                    )
                                })
                            }
                            <div className=' flex justify-between px-4 py-3 font-bold'>
                                <h1>Total</h1>
                                <h1 className=' '>${serviceTotal}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className=' bg-white py-2 mt-4  sticky bottom-0'>
                <div className='flex justify-end '>
                    <Link to='/orderSuccess' >
                        <button
                            className='bg-slate-900 w-32 h-12 mr-16  rounded-lg sticky 
                     text-white  font-bold'
                        >
                            Book
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}