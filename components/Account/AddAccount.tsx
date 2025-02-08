'use client'
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import InputItem from "../Common/InputForm";
import { AccountType } from "@/types/types";
import { useFormik } from "formik";
import { addAccountScema } from "@/validation/validation";
import { otherMethod } from "@/lib/helper/postMethod";
import toast from "react-hot-toast";
import LoadingButton from "../Common/LoadingButton/LoadingButton";

export default function AddAccount() {
  const initialValues: AccountType = {
    account_type: "",
    account_number: "",
    balance: 0,
  };
  const [loading, setLoading] = useState(false);
  const { values, errors, handleSubmit, handleChange } = useFormik({
    initialValues,
    validationSchema: addAccountScema,
    onSubmit: async (values, action) => {
      setLoading(true);
      const data = await otherMethod({
        url: "/account",
        method: "POST",
        body: values,
        validationTag:"account"
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
        htmlFor="my_modal_6"
        className="flex place-items-center text-sm gap-2 px-3 py-2 bg-blue-500 text-white rounded-md"
      >
        <span>
          <AiOutlinePlus />
        </span>
        <span>Add Account</span>
      </label>
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal " role="dialog">
        <div className="modal-box !bg-secondary">
          <h3 className="text-lg font-bold">Add Payment Method</h3>
          <form onSubmit={handleSubmit} action="" className="flex flex-col gap-3 my-2">
            <InputItem
              label="Payment Name"
              type="text"
              name="account_type"
              onChange={handleChange}
              value={values.account_type}
              error={errors.account_type}
            />
            <InputItem
              label="Account Number"
              type="text"
              name="account_number"
              onChange={handleChange}
              value={values.account_number}
              error={errors.account_number}
            />

            <InputItem
              label="Initial Balance"
              type="number"
              name="balance"
              onChange={handleChange}
              value={values.balance}
              error={errors.balance}
            />
            <div className="modal-action">
              <LoadingButton isLoading={loading} className="btn bg-emerald-500 text-white">Add</LoadingButton>
              <label
                htmlFor="my_modal_6"
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
