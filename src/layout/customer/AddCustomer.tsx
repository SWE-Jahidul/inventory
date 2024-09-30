import { RxCross2 } from "react-icons/rx";
import { useFormik } from 'formik';
import { addCustomerSchema } from "../schemas/schama";
import axios from "axios"

export default function AddCustomer({ setVisible }: any) {
    const onSubmit = (values: any) => {
        console.log('Submitting values:', values);
        const token = localStorage.getItem('token');
        axios.post('http://localhost:5000/api/customers/add-customer', values, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                console.log('Data posted successfully:', response.data);
            })
            .catch(error => {
                if (error.response) {
                    console.error('Error Response:', error.response.data);
                    console.error('Status:', error.response.status);
                    console.error('Headers:', error.response.headers);
                } else if (error.request) {
                    console.error('Error Request:', error.request);
                } else {
                    console.error('Error Message:', error.message);
                }
            });
    };

    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            address: '',
            city: '',
            state: '',
            zipCode: '',
            type: '',
        },
        validationSchema: addCustomerSchema,
        onSubmit,
    });
    return (
        <div>
            <div className='flex justify-between  p-5 text-black text-xl'>
                <h1 className='text-2xl font-medium '>Add Customer</h1>
                <RxCross2 className='cursor-pointer ' onClick={() => setVisible(false)} />
            </div>
            <hr />
            <form className='w-full bg-[#f7f8fa] py-5 px-5  flex flex-col space-y-2 ' onSubmit={handleSubmit}>
                <div className="flex w-full  gap-x-8">
                    <label className="flex w-1/2 flex-col text-black">
                        <span className="font-semibold text-gray-600 font-raleway">Customer name</span>
                        <input
                            className="block w-full px-2 py-3 text-base rounded-sm out  font-raleway font-medium bg-white outline-gray-300 focus:outline-p-purple outline outline-[1px]"
                            type="text"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id="name"
                            placeholder="Type Product name"
                        />
                        {errors.name && touched.name && <p className="text-red-600 text-xs">{errors.name}</p>}
                    </label>
                    <label className="flex w-1/2 flex-col text-black">
                        <span className="font-semibold text-gray-600 font-raleway">Email</span>
                        <input
                            className="block w-full px-2 py-3 text-base rounded-sm out  font-raleway font-medium bg-white outline-gray-300 focus:outline-p-purple outline outline-[1px]"
                            type="text"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id="email"
                            placeholder="type email"
                        />
                        {errors.email && touched.email && <p className="text-red-600 text-xs">{errors.email}</p>}
                    </label>
                </div>
                <div className="flex w-full  gap-x-8">
                    <label className="flex w-1/2 flex-col text-black">
                        <span className="font-semibold text-gray-600 font-raleway">Phone number</span>
                        <input
                            className="block w-full px-2 py-3 text-base rounded-sm out  font-raleway font-medium bg-white outline-gray-300 focus:outline-p-purple outline outline-[1px]"
                            type="text"
                            name="phone"
                            value={values.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id="phone"
                            placeholder="Type phone number"
                        />
                        {errors.phone && touched.phone && <p className="text-red-600 text-xs">{errors.phone}</p>}
                    </label>
                    <label className="flex w-1/2 flex-col text-black">
                        <span className="font-semibold text-gray-600 font-raleway">City</span>
                        <input
                            className="block w-full px-2 py-3 text-base rounded-sm out  font-raleway font-medium bg-white outline-gray-300 focus:outline-p-purple outline outline-[1px]"
                            type="text"
                            name="city"
                            value={values.city}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id="city"
                            placeholder="city"
                        />
                        {errors.city && touched.city && <p className="text-red-600 text-xs">{errors.city}</p>}
                    </label>
                </div>
                <div className="flex w-full  gap-x-8">
                    <label className="flex w-1/2 flex-col text-black">
                        <span className="font-semibold text-gray-600 font-raleway">Address</span>
                        <input
                            className="block w-full px-2 py-3 text-base rounded-sm out  font-raleway font-medium bg-white outline-gray-300 focus:outline-p-purple outline outline-[1px]"
                            type="text"
                            name="address"
                            value={values.address}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id="address"
                            placeholder="Address"
                        />
                        {errors.address && touched.address && <p className="text-red-600 text-xs">{errors.address}</p>}
                    </label>
                    <label className="flex w-1/2 flex-col text-black">
                        <span className="font-semibold text-gray-600 font-raleway">State</span>
                        <input
                            className="block w-full px-2 py-3 text-base rounded-sm out  font-raleway font-medium bg-white outline-gray-300 focus:outline-p-purple outline outline-[1px]"
                            type="text"
                            name="state"
                            value={values.state}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id="state"
                            placeholder="state"
                        />
                        {errors.state && touched.state && <p className="text-red-600 text-xs">{errors.state}</p>}
                    </label>
                    <label className="flex w-1/3 flex-col text-black">
                        <span className="font-semibold text-gray-600 font-raleway">Zip code</span>
                        <input
                            className="block w-full px-2 py-3 text-base rounded-sm out  font-raleway font-medium bg-white outline-gray-300 focus:outline-p-purple outline outline-[1px]"
                            type="text"
                            name="zipCode"
                            value={values.zipCode}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id="zipCode"
                            placeholder="zip code"
                        />
                        {errors.zipCode && touched.zipCode && <p className="text-red-600 text-xs">{errors.zipCode}</p>}
                    </label>
                </div>
                <div className="flex w-full  gap-x-8">
                    <label className="flex w-1/2 flex-col text-black">
                        <span className="font-semibold text-gray-600 font-raleway">Customer Type</span>
                        <select
                            className="block w-full px-2 py-3 text-base rounded-sm out font-raleway font-medium bg-white outline-gray-300 focus:outline-p-purple outline outline-[1px]"
                            name="type"
                            value={values.type}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id="type"
                        >
                            <option value="" disabled>Select customer type</option>
                            <option value="regular">Regular</option>
                            <option value="walk-in">Walk-in</option>
                        </select>
                        {errors.type && touched.type && <p className="text-red-600 text-xs">{errors.type}</p>}
                    </label>
                    
                </div>
                <div className='flex justify-end space-x-1'>
                    <button onClick={() => setVisible(false)} className="px-5 py-2 rounded font-semibold border-none bg-[#fd3c3c] font-raleway text-white">Cancel</button>
                    <button type="submit" className="px-5 py-2 rounded font-semibold border-none bg-p-purple font-raleway text-white">Add Product</button>
                </div>
            </form>
        </div>
    )
}