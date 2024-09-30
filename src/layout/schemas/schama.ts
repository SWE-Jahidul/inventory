import * as yup from "yup";

export const loginSchema = yup.object().shape({
  phone: yup
    .string()
    .matches(/^\d+$/, "Phone number must contain only digits")
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number can't be longer than 15 digits")
    .required("Phone number is required"),

  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password can't be longer than 20 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/\d/, "Password must contain at least one number")
    .matches(/[@$!%*?&#]/, "Password must contain at least one special character")
    .required("Password is required"),
});


export const addProductSchema = yup.object().shape({
  name: yup
    .string()
    .min(1, "Product name is required")
    .required("Product name is required"),
  category: yup
    .string()
    .required("Category is required"),
  brand: yup
    .string()
    .required("Brand is required"),
  price: yup
    .number()
    .min(1, "Price is required")
    .required("Price is required"),
  dosageForm: yup
    .string()
    .min(1, "dosageForm is required")
    .required("dosageForm is required"),
  strength: yup
    .string()
    .min(1, "strength is required")
    .required("strength is required"),
  manufacturer: yup
    .string()
    .min(1, "manufacturer is required")
    .required("manufacturer is required"),
  lotNumber: yup
    .string()
    .min(1, "Lot Number must be a positive number")
    .required("Lot Number is required"),
  quantity: yup
    .number()
    .min(1, "Quantity must be at least 1")
    .required("Quantity is required"),
});

// Add Brand Schema
export const addBrandSchema = yup.object().shape({
  name: yup
    .string()
    .min(1, "Brand name is required")
    .required("Brand name is required")
});

//Add Categories Schema
export const addCategoriesSchema = yup.object().shape({
  name: yup
    .string()
    .min(1, "Brand name is required")
    .required("Brand name is required")
})

export const addCustomerSchema = yup.object().shape({
  name: yup
    .string()
    .min(1, "Customer name is required")
    .required("Customer name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: yup
    .string()
    .matches(/^\d+$/, "Phone number must contain only digits")
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number can't be longer than 15 digits")
    .required("Phone number is required"),
  address: yup
    .string()
    .required("Address is required"),
  city: yup
    .string()
    .required("City is required"),
  state: yup
    .string()
    .required("State is required"),
  zipCode: yup
    .string()
    .matches(/^\d+$/, "Zip code must contain only digits")
    .min(5, "Zip code must be at least 5 digits")
    .required("Zip code is required"),
  type: yup
    .string()
    .required("Country is required"),
})
