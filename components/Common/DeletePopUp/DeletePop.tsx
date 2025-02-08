"use client"

import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const DeleteConfirmation = ({ onDelete }:{onDelete:()=>void}) => {
  const handleDelete = () => {
    MySwal.fire({
      title: 'Are you sure?',
      text: 'Do you really want to delete this client?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        onDelete();
        Swal.fire('Deleted!', 'The client has been deleted.', 'success');
      }
    });
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
    >
      Delete
    </button>
  );
};

export default DeleteConfirmation;
