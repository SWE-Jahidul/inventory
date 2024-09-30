import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { FiPlusCircle } from "react-icons/fi";
import { addProductSchema } from '../../schemas/schama';
import { RxCross2 } from "react-icons/rx";
import axios from "axios"





export default function AddProduct({ setVisible }: any) {
    const [image, setImage] = useState<string | null>(null);
    const [categories, setCategory] = useState([])
    const [brands, setBrand] = useState([])

    const onSubmit = (values: any) => {
        console.log('Submitting values:', values);
        const token = localStorage.getItem('token');
        axios.post('http://localhost:5000/api/products/add-product', values, {
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

    useEffect(() => {
        const token = localStorage.getItem('token');

        fetch('http://localhost:5000/api/brands/brands', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log("data", data);
                setBrand(data)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    useEffect(() => {
        fetch('http://localhost:5000/api/categories/categories', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log("API response:", data);
                if (Array.isArray(data)) {
                    setCategory(data);
                } else if (data && Array.isArray(data.categories)) {
                    setCategory(data.categories);
                } else {
                    setCategory([]);
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const { values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue } = useFormik({
        initialValues: {
            name: '',
            price: '',
            dosageForm: '',
            strength: '',
            manufacturer: '',
            lotNumber: '',
            quantity: '',
            image: null,
            category: '',
            brand: '',
        },
        validationSchema: addProductSchema,
        onSubmit,
    });
    return (
        <div>
            <div className='flex justify-between  p-5 text-black text-xl'>
                <h1 className='text-2xl font-medium '>Add Product</h1>
                <RxCross2 className='cursor-pointer ' onClick={() => setVisible(false)} />
            </div>
            <hr />
            <form className='w-full bg-[#f7f8fa] py-2 px-5  flex flex-col space-y-2 ' onSubmit={handleSubmit}>
                <div className="flex w-full  gap-x-8">
                    <label className="flex w-1/2 flex-col text-black">
                        <span className="font-semibold text-gray-600 font-raleway">Product name</span>
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
                        <span className="font-semibold text-gray-600 font-raleway">Category</span>
                        <select
                            className="block w-full px-2 py-3 text-base rounded-sm font-raleway font-medium bg-white outline-gray-300 focus:outline-p-purple outline outline-[1px]"
                            name="category"
                            value={values.category}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id="category"
                        >
                            <option className='' value="" label="Select category" disabled />
                            {categories.map((category: { name: string }, index) => (
                                <option key={index} value={category.name} label={category.name} />
                            ))}
                        </select>
                        {errors.category && touched.category && <p className="text-red-600 text-xs">{errors.category}</p>}
                    </label>
                </div>
                <div className="flex  gap-x-8">
                    <label className="flex w-1/2 flex-col text-black">
                        <span className="font-semibold text-gray-600 font-raleway">Brand</span>
                        <select
                            className="block w-full px-2 py-3 text-base rounded-sm font-raleway font-medium bg-white outline-gray-300 focus:outline-p-purple outline outline-[1px]"
                            name="brand"
                            value={values.brand}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id="brand"
                        >
                            <option value="" label="Select brand" disabled />
                            {brands.map((brand: { name: string }, index) => (
                                <option key={index} value={brand.name} label={brand.name} />
                            ))}
                        </select>
                        {errors.brand && touched.brand && <p className="text-red-600 text-xs">{errors.brand}</p>}
                    </label>
                    <label className="flex w-1/2 flex-col text-black">
                        <span className="font-semibold text-gray-600 font-raleway">Price</span>
                        <input
                            className="block w-full px-2 py-3 text-base rounded-sm out  font-raleway font-medium bg-white outline-gray-300 focus:outline-p-purple outline outline-[1px]"
                            type="text"
                            name="price"
                            value={values.price}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id="Price"
                            placeholder="Type price"
                        />
                        {errors.price && touched.price && <p className="text-red-600 text-xs">{errors.price}</p>}
                    </label>
                </div>
                <div className="flex  gap-x-8">
                    <label className="flex w-1/2 flex-col text-black">
                        <span className="font-semibold text-gray-600 font-raleway">Dosage Form</span>
                        <input
                            className="block w-full px-2 py-3 text-base rounded-sm out  font-raleway font-medium bg-white outline-gray-300 focus:outline-p-purple outline outline-[1px]"
                            type="text"
                            name="dosageForm"
                            value={values.dosageForm}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id="dosageForm"
                            placeholder="Type Dosage Form"
                        />
                        {errors.dosageForm && touched.dosageForm && <p className="text-red-600 text-xs">{errors.dosageForm}</p>}
                    </label>
                    <label className="flex w-1/2 flex-col text-black">
                        <span className="font-semibold text-gray-600 font-raleway">Strength</span>
                        <input
                            className="block w-full px-2 py-3 text-base rounded-sm out  font-raleway font-medium bg-white outline-gray-300 focus:outline-p-purple outline outline-[1px]"
                            type="text"
                            name="strength"
                            value={values.strength}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id="strength"
                            placeholder="Type strength"
                        />
                        {errors.strength && touched.strength && <p className="text-red-600 text-xs">{errors.strength}</p>}
                    </label>
                </div>
                <div className="flex  gap-x-8">
                    <label className="flex w-1/2 flex-col text-black">
                        <span className="font-semibold text-gray-600 font-raleway">Manufacturer</span>
                        <input
                            className="block w-full px-2 py-3 text-base rounded-sm out  font-raleway font-medium bg-white outline-gray-300 focus:outline-p-purple outline outline-[1px]"
                            type="text"
                            name="manufacturer"
                            value={values.manufacturer}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id="manufacturer"
                            placeholder="Type manufacturer"
                        />
                        {errors.manufacturer && touched.manufacturer && <p className="text-red-600 text-xs">{errors.manufacturer}</p>}
                    </label>
                    <label className="flex w-1/2 flex-col text-black">
                        <span className="font-semibold text-gray-600 font-raleway">Lot Number</span>
                        <input
                            className="block w-full px-2 py-3 text-base rounded-sm out  font-raleway font-medium bg-white outline-gray-300 focus:outline-p-purple outline outline-[1px]"
                            type="text"
                            name="lotNumber"
                            value={values.lotNumber}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id="lotNumber"
                            placeholder="Type lotNumber"
                        />
                        {errors.lotNumber && touched.lotNumber && <p className="text-red-600 text-xs">{errors.lotNumber}</p>}
                    </label>

                </div>
                <div className="flex  gap-x-8">
                    <label className="flex w-1/2 flex-col text-black">
                        <span className="font-semibold text-gray-600 font-raleway">Quantity</span>
                        <input
                            className="block w-full px-2 py-3 text-base rounded-sm out  font-raleway font-medium bg-white outline-gray-300 focus:outline-p-purple outline outline-[1px]"
                            type="text"
                            name="quantity"
                            value={values.quantity}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id="quantity"
                            placeholder="Type quantity"
                        />
                        {errors.quantity && touched.quantity && <p className="text-red-600 text-xs">{errors.quantity}</p>}
                    </label>

                </div>

                <div className='w-full bg-gray-300 rounded-md my-5 p-2'>
                    <label className="text-black">
                        <span className="font-medium">Upload Image</span>
                        {!image && (
                            <FiPlusCircle className="text-9xl mx-auto text-neutral-400" />
                        )}
                        <input
                            type="file"
                            name="image"
                            accept="image/*"
                            onChange={(event) => {
                                const files = event.currentTarget.files;
                                if (files && files.length > 0) {
                                    const file = files[0];
                                    setFieldValue("image", file);
                                    setImage(URL.createObjectURL(file));
                                }
                            }}
                            className="block w-full px-2 py-2  text-base font-medium bg-gray-300 rounded-md focus:outline-none"
                        />
                        {image && (
                            <img
                                src={image}
                                alt="Preview"
                                className="mt-2 w-24 h-24 object-cover rounded-md"
                            />
                        )}
                    </label>
                </div>
                <div className='flex justify-end space-x-1'>
                    <button onClick={() => setVisible(false)} className="px-5 py-2 rounded font-semibold border-none bg-[#fd3c3c] font-raleway text-white">Cancel</button>
                    <button type="submit" className="px-5 py-2 rounded font-semibold border-none bg-p-purple font-raleway text-white">Add Product</button>
                </div>
            </form>
        </div>
    );
}
