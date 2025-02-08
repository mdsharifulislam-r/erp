import * as yup from 'yup'


export const loginSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
})

export const clientScema = yup.object().shape({
    name:yup.string().required("name is required"),
    contact_number:yup.string().required("contact number is required"),
    email:yup.string().required("email is required").email("invalid email address"),
    address:yup.string().required("address is required")
  })

  export const addAccountScema=yup.object().shape({
    account_type:yup.string().required("account name is required"),
    account_number:yup.number().required("account number is required"),
    balance:yup.number().required("balance is required"),
    
  })

  export const dipositMoneyScema=yup.object().shape({
    payment_type:yup.string().required('Payment type is required'),

    balance:yup.number().required('Balance is required')
    
  })

  export const addProductSchema=yup.object().shape({
    product_name:yup.string().required('Product Name is required'),
    stock:yup.number().required('Stock is required'),
    buy_price:yup.number().required('buy price is required'),
    sell_price:yup.number().required('sell is required')
    
  })

