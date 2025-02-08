"use client";
import React, { ChangeEvent, useState } from "react";
import InputItem from "../Common/InputForm";
import { ClientType,ProductType } from "@/types/types";
import { useFormik } from "formik";
import { addProductSchema, clientScema } from "@/validation/validation";
import LoadingButton from "../Common/LoadingButton/LoadingButton";
import { otherMethod } from "@/lib/helper/postMethod";
import toast from "react-hot-toast";
import { uploadImage } from "@/lib/helper/uploadImage";

export default function AddProductForm( ){
  const initialValues:ProductType = {
   buy_price:0,
   sell_price:0,
   product_name:"",
   stock:0,
   unit:"kg",
   image:""
  };


  const [loading,setLoading]=useState(false)
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: addProductSchema,
    onSubmit: async (value, action) => {
      setLoading(true)
      const data = await otherMethod({
        url:"/product",
        body:{
          ...value,
       
        },
        method:"POST",
        validationTag:"product"
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
          name="product_name"
          id="name"
          value={values.product_name}
          onChange={handleChange}
          label="Product Name"
          required
          error={errors.product_name}
        />
        <InputItem
          name="buy_price"
          id="buy_price"
          label="Buy Price"
          required
          value={values.buy_price}
          onChange={handleChange}
          error={errors.buy_price}
        />

        <InputItem
          name="sell_price"
          type="number"
          id="sell_price"
          label="Sale Price"
          required
          error={errors.sell_price}
          value={values.sell_price}
          onChange={handleChange}
        />
        <InputItem
          name="stock"
          id="stock"
          label="Available Stock"
          required
          value={values.stock}
          onChange={handleChange}
          error={errors.stock}
        />

        <InputItem
          name="unit"
          id="unit"
          label="Unit"
          value={values.unit}
          onChange={handleChange}
          error={!["kg",'pcs'].includes(values.unit.toLowerCase())?"Unit Should be kg pr pcs":""}
        />



        <div className="col-span-2">
          <LoadingButton isLoading={loading} className="px-5 py-2 bg-blue-500 text-white rounded-md">
            Submit
          </LoadingButton>
        </div>
      </form>
    </div>
  );
}
