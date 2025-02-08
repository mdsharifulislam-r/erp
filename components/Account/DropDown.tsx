import React from 'react'
import { HiDotsVertical } from "react-icons/hi";
export default function DropDown() {
  return (
    <div className="dropdown dropdown-left dropdown-end">
  <div tabIndex={0} role="button" className=" m-1">
    <HiDotsVertical className="text-gray-500"/>
  </div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
  )
}
