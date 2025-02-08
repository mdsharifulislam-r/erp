"use client";
import React, { ChangeEvent, useState } from "react";
import InputItem from "../Common/InputForm";
import { ClientType } from "@/types/types";
import { useFormik } from "formik";
import { clientScema } from "@/validation/validation";
import LoadingButton from "../Common/LoadingButton/LoadingButton";
import { otherMethod } from "@/lib/helper/postMethod";
import toast from "react-hot-toast";
import { uploadImage } from "@/lib/helper/uploadImage";

export default function ClientForm({type}:{type:"client"|"supplier"}) {
  const initialValues: ClientType = {
    name: "",
    email: "",
    address: "",
    contact_number: "",
    company: "",
    status: type,
    image: "",
    details: "",
    reference: "",
  };
  const [image,setImage]=useState("")
  const getImage= async (e:ChangeEvent<HTMLInputElement>)=>{
    const image = await uploadImage(e.target.files)
    if(image){
      setImage(image)
    }
  }
  const [loading,setLoading]=useState(false)
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: clientScema,
    onSubmit: async (value, action) => {
      setLoading(true)
      const data = await otherMethod({
        url:"/client",
        body:{
          ...value,
          image:image
        },
        method:"POST",
        validationTag:"client"
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
          label="Client Name"
          required
          error={errors.name}
        />
        <InputItem
          name="contact_number"
          id="contact_number"
          label="Contact Number"
          required
          value={values.contact_number}
          onChange={handleChange}
          error={errors.contact_number}
        />

        <InputItem
          name="email"
          type="email"
          id="email"
          label="Email Address"
          required
          error={errors.email}
          value={values.email}
          onChange={handleChange}
        />
        <InputItem
          name="address"
          id="address"
          label="Address"
          required
          value={values.address}
          onChange={handleChange}
          error={errors.address}
        />

        <InputItem
          name="company"
          id="company"
          label="Company"
          value={values.company}
          onChange={handleChange}
        />
        <InputItem name="image" id="image" label="Image" type="file" onChange={getImage} />
        <InputItem
          name="reference"
          id="reference"
          label="Reference"
          value={values.reference}
          onChange={handleChange}
        />

        <div>
          <label htmlFor="details" className="text-sm text-gray-400">
            Details
          </label>
          <textarea
            name="details"
            value={values.details}
            onChange={handleChange}
            id="details"
            className="w-full rounded-md bg-secondary p-3 border border-gray-400 text-white focus:outline-none"
          ></textarea>
        </div>

        <div>
          <LoadingButton isLoading={loading} className="px-5 py-2 bg-blue-500 text-white rounded-md">
            Submit
          </LoadingButton>
        </div>
      </form>
    </div>
  );
}
