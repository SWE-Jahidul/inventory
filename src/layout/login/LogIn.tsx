// components/LogIn.tsx
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../api/authApi';

// Validation schema
const loginSchema = Yup.object({
  phone: Yup.string().required('Phone number is required'), 
  password: Yup.string().required('Password is required'),
});

const LogIn: React.FC = () => {
  const [login] = useLoginMutation();
  const navigate = useNavigate();

  const onSubmit = async (values: { phone: string; password: string }) => {
    try {
      const response = await login({ phoneNumber: values.phone, password: values.password }).unwrap();
      localStorage.setItem('token', response.token);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      phone: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit,
  });

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="mx-2 md:mx-auto bg-slate-500 rounded-xl lg:w-3/12 md:w-2/6 w-3/4 p-5">
        <h1 className="text-3xl text-white font-semibold text-center mb-2">Log in</h1>
        <form className="space-y-2 text-black" onSubmit={handleSubmit} autoCapitalize="off">
          <div>
            <input
              className="block w-full px-2 py-2 text-base font-medium bg-gray-300 rounded-md"
              type="text" // Change to 'text' to keep leading zeros
              name="phone"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              id="phone"
              placeholder="Phone"
            />
            {errors.phone && touched.phone && <p className="text-red-600 text-xs">{errors.phone}</p>}
          </div>
          <div className="relative">
            <input
              className="w-full px-2 py-2 text-base font-medium bg-gray-300 rounded-md"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              id="password"
              placeholder="Password"
            />
            {errors.password && touched.password && <p className="text-red-600 text-xs">{errors.password}</p>}
          </div>
          <button className="btn w-full border-none text-xl bg-blue-600 text-white">Log in</button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
