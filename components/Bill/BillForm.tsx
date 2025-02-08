"use client";
import React, { ChangeEvent, useState } from "react";
import InputItem from "../Common/InputForm";
import { BillType, ClientType } from "@/types/types";
import { useFormik } from "formik";
import { clientScema } from "@/validation/validation";
import LoadingButton from "../Common/LoadingButton/LoadingButton";
import { otherMethod } from "@/lib/helper/postMethod";
import toast from "react-hot-toast";
import { uploadImage } from "@/lib/helper/uploadImage";
import InputWithDropdown from "../Common/DropInput";

export default function ClientForm() {
  const initialValues: BillType = {
    name: "",
    amount:0,
    method:"",
  };

  
  const [loading,setLoading]=useState(false)
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues,
   
    onSubmit: async (value, action) => {

        if(!value.method){
          toast.error("Please select payment method")
          return
        }
        if(value.amount<=0){
          toast.error("Please fill Amount")
          return
        }

      setLoading(true)
      const data = await otherMethod({
        url:"/bill",
        body:{
          ...value,
    
        },
        method:"POST",
        validationTag:"account"
      })
      if(data.status){
        setLoading(false)
        toast.success(data.message)
        action.resetForm()
      }
      else{
        setLoading(false)
        toast.error(data.message)
      }
    },
  });
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        action=""
        className="grid grid-cols-2 gap-5"
      >
        <InputItem
          name="name"
          id="name"
          value={values.name}
          onChange={handleChange}
            label="Name"
            required
        />
        <InputItem
          name="amount"
          id="amount"
          type="number"
          value={values.amount}
          onChange={handleChange}
            label="Amount"
            required
        />

        <InputWithDropdown
        getOption={(value)=>handleChange({target:{name:"method",value}})}
        label="Method"
        endpoint="/account?"
        />

        <InputItem
          name="details"
          id="details"
          label="Details"
          onChange={handleChange}
        />

        <div>
          <LoadingButton isLoading={loading} className="px-5 py-2 bg-blue-500 text-white rounded-md">
            Pay Bill
          </LoadingButton>
        </div>
      </form>
    </div>
  );
}
