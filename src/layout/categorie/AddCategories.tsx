import { RxCross2 } from "react-icons/rx";
import { useFormik } from "formik";
import { addCategoriesSchema } from '../schemas/schama';
import axios from "axios";
import Swal from 'sweetalert2';

export default function AddCategories({ setVisible }: any) {

    const onSubmit = (values: any) => {
        console.log(values);
        const token = localStorage.getItem('token');
        console.log('Token:', token);  // Debug: Check the token
    
        axios.post('http://localhost:5000/api/categories/add-categories', values, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            Swal.fire({
                title: "success",
                text: "Add brand successfully",
                icon: "success"
              });
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
    }
    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
            name: '',
        },
        validationSchema: addCategoriesSchema,
        onSubmit,
    });
    return (
        <div>
            <div className='flex justify-between  p-5 text-black text-xl'>
                <h1 className='text-2xl font-medium '>Add Category</h1>
                <RxCross2 className='cursor-pointer ' onClick={() => setVisible(false)} />
            </div>
            <hr />
            <form className='w-full bg-[#f7f8fa] py-5 px-5  flex flex-col space-y-2 ' onSubmit={handleSubmit}>
                <label className="flex mb-2 flex-col text-black">
                <span className="font-semibold text-gray-600 font-raleway">Category Name</span>
                    <input
                       className="block w-full px-2 py-3 text-base rounded-sm out  font-raleway font-medium bg-white outline-gray-300 focus:outline-p-purple outline outline-[1px]"
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id="name"
                        placeholder="Type Category name"
                    />
                    {errors.name && touched.name && <p className="text-red-600 text-xs">{errors.name}</p>}
                </label>
                <div className='flex justify-end space-x-1'>
                    <button onClick={() => setVisible(false)} className="px-5 py-2 rounded font-semibold border-none bg-[#fd3c3c] font-raleway text-white">Cancel</button>
                    <button type="submit" className="px-5 py-2 rounded font-semibold border-none bg-p-purple font-raleway text-white">Add Category</button>
                </div>
            </form>
        </div>
    )
}