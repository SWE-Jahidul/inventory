import { useEffect, useState } from "react";
import Modal from 'react-modal';
import AddBrand from "./AddBrand";
import { IoIosAdd } from "react-icons/io";
import { MdDeleteForever, MdEdit } from "react-icons/md";

export default function Dashboard() {
    const [visible, setVisible] = useState(false)
    const [brands, setBrand] = useState([]);
    useEffect(() => {
        const token = localStorage.getItem('token'); // Retrieve the token from local storage
        fetch('http://localhost:5000/api/brands/brands', {
            method: 'GET', // Specify the method (GET, POST, etc.)
            headers: {
                'Content-Type': 'application/json', // Set content type
                'Authorization': `Bearer ${token}` // Include the token in the Authorization header
            }
        })
            .then(res => res.json()) // Parse the JSON response
            .then(data => {
                console.log("data", data);
                setBrand(data)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
    return (
        <div className='bg-[#e2e0e03a]'>
            <div className='flex justify-between py-3 px-3'>
                <h1 className='text-3xl text-black font-semibold'>Brands</h1>
                <h1 className='flex rounded cursor-pointer items-center bg-p-purple font-medium pr-4 py-2 pl-2  text-white' onClick={() => setVisible(true)}><IoIosAdd className='text-white text-2xl mr-1 rounded font-medium  bg-[#1c2c5e]' /> <span>Add Brands </span> </h1>
            </div>
            <Modal isOpen={visible} onRequestClose={() => setVisible(false)} style={{
                overlay: {
                    backgroundColor: 'transparent'
                },
                content: {
                    top: '20%',
                    left: '60%',
                    right: 'auto',
                    width: '30%',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    padding: 0,
                }
            }}>
                <AddBrand setVisible={setVisible} ></AddBrand>
            </Modal>
            <div className='overflow-y-auto  mx-3' style={{ height: "calc(100vh - 125px)" }}>
                <table className='table-auto  table rounded-none bg-white font-raleway text-black '>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            brands.map((brand, index) => (
                                <tr className='font-semibold text-p-purple' key={brand.name}>
                                    <th className='border-y'>{index + 1}</th>
                                    <td className='border-y'>{brand.name}</td>
                                    <td className='border-y'>
                                    <span className='flex'>
                                        <MdDeleteForever  className="text-3xl text-[#ff3c3c] rounded hover:bg-[#ff3c3c36]" />
                                        <MdEdit className="text-2xl mt-1 text-[#5d84ee] rounded hover:bg-[#5d84ee63]" />
                                    </span>
                                </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}