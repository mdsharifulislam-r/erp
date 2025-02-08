"use client";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import InputItem from "../Common/InputForm";
import { AccountType, DipositType } from "@/types/types";
import { useFormik } from "formik";
import { addAccountScema } from "@/validation/validation";
import { otherMethod } from "@/lib/helper/postMethod";
import toast from "react-hot-toast";
import LoadingButton from "../Common/LoadingButton/LoadingButton";
import InputWithDropdown from "../Common/DropInput";

export default function AddBalance() {
  const [payment_type, setPaymentType] = useState("");
  const initialValues: DipositType = {
    payment_type: payment_type,
    transection_id: "",
    balance: 0,
  };
  const [loading, setLoading] = useState(false);

  const { values, errors, handleSubmit, handleChange } = useFormik({
    initialValues,
    onSubmit: async (values, action) => {
      
      if(!payment_type){
        toast.error("Please fill all required field")
        return
      }
      setLoading(true);
      const data = await otherMethod({
        url: "/account/diposit",
        method: "POST",
        body:{...values,payment_type} ,
        validationTag: "account",
      });

      if (data.status) {
        setLoading(false);
        toast.success(data.message);
        action.resetForm();
      } else {
        setLoading(false);
        toast.error(data.message);
      }
    },
  });
  return (
    <div>
      <label
        htmlFor="add-balance"
        className="flex place-items-center text-sm gap-2 px-3 py-2 cursor-pointer bg-emerald-500 text-white rounded-md"
      >
        <span>
          <AiOutlinePlus />
        </span>
        <span>Add Balance</span>
      </label>
      <input type="checkbox" id="add-balance" className="modal-toggle" />
      <div className="modal " role="dialog">
        <div className="modal-box !bg-secondary">
          <h3 className="text-lg font-bold">Deposit Money</h3>
          <form
            onSubmit={handleSubmit}
            action=""
            className="flex flex-col gap-3 my-2"
          >
            <InputWithDropdown
              endpoint="/account?"
              getOption={setPaymentType}
              label="Payment Method"
            />

            <InputItem
              label="Balance"
              type="number"
              name="balance"
              onChange={handleChange}
              value={values.balance}
              required
            />

            <InputItem
              label="Transiction Id"
              type="text"
              name="transection_id"
              onChange={handleChange}
              value={values.transection_id}
            />

            <div className="modal-action">
              <LoadingButton
                isLoading={loading}
                className="btn bg-emerald-500 text-white"
              >
                Diposit
              </LoadingButton>
              <label
                htmlFor="add-balance"
                className="btn bg-blue-500 text-white"
              >
                Close!
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
