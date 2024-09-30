import { useEffect, useState } from "react";
import { IoIosAdd, IoIosSearch } from "react-icons/io";
import Modal from 'react-modal';
import AddCustomer from "./AddCustomer";
import Swal from 'sweetalert2';
import { MdDeleteForever, MdEdit } from "react-icons/md";

interface Customer {
    _id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
}

export default function Customers() {
    const [visible, setVisible] = useState(false)
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');

        fetch('http://localhost:5000/api/customers', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log("data", data);
                setCustomers(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleDelete = (id: string) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result: any) => {
          if (result.isConfirmed) {
            fetch(`http://localhost:5000/api/customers/${id}`, {
              method: "DELETE",
            })
              .then(res => {
                if (!res.ok) {
                  throw new Error('Failed to delete the product');
                }
                return res.json();
              })
              .then(data => {
                const remainProducts = customers.filter(customer => customer._id !== id);
                setCustomers(remainProducts);
                console.log('Product deleted successfully:', data);
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
                });
              })
              .catch(error => {
                Swal.fire({
                  title: "Error!",
                  text: "Failed to delete the product.",
                  icon: "error"
                });
                console.error('Error deleting the product:', error);
              });
          }
        });
      };

    const filteredProducts = customers.filter(customer =>
        customer.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className='bg-[#e2e0e03a]'>
            <div className='flex justify-between py-3 px-3'>
                <div className='flex w-1/2 '>
                    <h1 className='text-3xl text-black font-semibold'>Customers</h1>
                    <div className='flex ml-10 items-center rounded-md border w-11/12 bg-white px-3 py-2 cursor-pointer'>
                        <IoIosSearch className='text-2xl text-black mr-2' /><input
                            className='bg-white w-11/12 font-raleway text-black outline-none'
                            type="text"
                            id='search'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search by customer name..."
                        />
                    </div>
                </div>
                <h1 className='flex rounded cursor-pointer items-center bg-p-purple font-medium pr-4 py-2 pl-2  text-white' onClick={() => setVisible(true)}><IoIosAdd className='text-white text-2xl mr-1 rounded font-medium  bg-[#1c2c5e]' /> <span>Add Customer </span> </h1>
            </div>
            <Modal
                isOpen={visible}
                onRequestClose={() => setVisible(false)}
                style={{
                    overlay: {
                        backgroundColor: 'transparent',
                    },
                    content: {
                        top: '30%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        width: '50%',
                        transform: 'translate(-50%, -50%)',
                        padding: 0,
                    },
                }}
            >
                <AddCustomer setVisible={setVisible} />
            </Modal>
            <div className='overflow-y-auto  scrollbar-hide mx-3' style={{ height: "calc(100vh - 125px)" }}>
                <table className='table-auto table rounded-none bg-white font-raleway text-black w-full'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProducts.map((product, index) => (
                            <tr className='font-semibold text-p-purple' key={product._id}>
                                <th className='border-y'>{index + 1}</th>
                                <td className='border-y'>{product.name}</td>
                                <td className='border-y'>{product.email}</td>
                                <td className='border-y'>{product.phone}</td>
                                <td className='border-y'>{product.address}</td>
                                <td className='border-y'>{product.city}</td>
                                <td className='border-y'>
                                    <span className='flex'>
                                        <MdDeleteForever onClick={() => handleDelete(product._id)} className="text-3xl text-[#ff3c3c] rounded hover:bg-[#ff3c3c36]" />
                                        <MdEdit className="text-2xl mt-1 text-[#5d84ee] rounded hover:bg-[#5d84ee63]" />
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}