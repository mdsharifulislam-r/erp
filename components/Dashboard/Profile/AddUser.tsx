"use client";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

import { AccountType } from "@/types/types";
import { useFormik } from "formik";
import { addAccountScema } from "@/validation/validation";
import { otherMethod } from "@/lib/helper/postMethod";
import toast from "react-hot-toast";
import InputItem from "@/components/Common/InputForm";
import LoadingButton from "@/components/Common/LoadingButton/LoadingButton";
import ValueField from "./ValueField";

export default function AddUser() {
  const initialValues = {
    name: "",
  };
  const [account, setAccount] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const { values, errors, handleSubmit, handleChange } = useFormik({
    initialValues,
    onSubmit: async (values, action) => {
      setLoading(true);
      const data = await otherMethod({
        url: "/auth/add-user",
        method: "POST",
        body: values,
        validationTag: "account",
      });

      if (data.username) {
        setLoading(false);
        toast.success(data.message);
        setAccount({
          username: data.username,
          password: data.password,
        });
        action.resetForm();
      } else {
        setLoading(false);
        toast.error(data.message);
      }
    },
  });
  return (
    <div>
      <input type="checkbox" id="add-user" className="modal-toggle" />
      <div className="modal " role="dialog">
        <div className="modal-box !bg-secondary">
          <h3 className="text-lg font-bold">Add Member</h3>
          <form
            onSubmit={handleSubmit}
            action=""
            className="flex flex-col gap-3 my-2"
          >
            <InputItem
              label="User Name"
              type="text"
              name="name"
              onChange={handleChange}
            />
            {account.username && (
              <ValueField value={account.username} label="Username" />
            )}
            {account.password && (
              <ValueField value={account.password} label="Password" />
            )}

            <div role="alert" className="alert  text-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <span>
                The Rasult will be shown for one time . Whenever you close the
                window you will lost the credintials
              </span>
            </div>
            <div className="modal-action">
              <LoadingButton
                isLoading={loading}
                className="btn bg-emerald-500 text-white"
              >
                Add
              </LoadingButton>
              <label
                htmlFor="add-user"
                className="btn bg-blue-500 text-white"
                onClick={() =>
                  setAccount({
                    username: "",
                    password: "",
                  })
                }
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
