"use client"
import React, { useState, useRef, useEffect, ChangeEvent } from 'react';
import InputItem from './InputForm';
import { getMehod } from '@/lib/helper/getMethod';
import { useFormStatus } from 'react-dom';

const InputWithDropdown = ({getOption,endpoint,label,listItems}:{getOption:React.Dispatch<React.SetStateAction<string>>,endpoint?:string,label:string,listItems?:string[]}) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const handleFocus = () => setIsDropdownVisible(true);
  const handleBlur = () => setTimeout(() => setIsDropdownVisible(false), 100); // Delay to allow click on dropdown
  const [text,setText]=useState("")
  const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
    setText(e.target.value)
    getOption(e.target.value)

    if(listItems?.length){
      setList(prev=>{
        return listItems.filter(item=>item.toLowerCase().includes(e.target.value.toLowerCase()))
      })
    }
    
  }
  const id = label.toLowerCase().replace(" ","-")
  const {data} = useFormStatus()

  useEffect(()=>{
    if(data){
      setText("")
    }
  },[data])

  useEffect(() => {
    const handleClickOutside = (e:any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target) && inputRef.current && !inputRef.current.contains(e.target)) {
        setIsDropdownVisible(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const getItem=(str:string)=>{
   setTimeout(()=>setText(str),100)
   getOption(str)

   document.getElementById(id)?.setAttribute("value",str)

  }

  const [list,setList]=useState<string[]>([])
  useEffect(()=>{
    if(endpoint){
      getMehod(
        `${endpoint}list=true&search=${text}`
    ).then(data=>setList(data))
    }
   if(listItems?.length){
     setList(listItems)

   }
  },[text])


  const showList = list?.map((item,index)=>(
<div onClick={()=>getItem(item)} className="px-4 py-2 cursor-pointer hover:bg-gray-100" key={index}>{item}</div>
  ))
  return (
    <div className="relative w-full">
      <InputItem
        ref={inputRef}
        type="text"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
     
        error={text && !list?.includes(text) ?"Item is not in list":""}
        label={label}
        id={id}
      />
      {isDropdownVisible && (
        <div
          ref={dropdownRef}
          className="absolute left-0 w-full mt-1 bg-primary border border-gray-300 rounded-md shadow-lg max-h-40 overflow-y-auto z-10"
        >
          {showList}
        </div>
      )}
    </div>
  );
};

export default InputWithDropdown;
