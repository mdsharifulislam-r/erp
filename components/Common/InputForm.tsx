import React, { forwardRef } from 'react';

interface InputItemProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const InputItem = forwardRef<HTMLInputElement, InputItemProps>((props, ref) => {
  const { label, error, required, id, ...inputProps } = props;

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={id || ''} className="text-sm font-semibold text-gray-400">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        {...inputProps}
        ref={ref} 
        id={id}
        className="px-4 py-2 border border-gray-400 bg-secondary text-gray-400 rounded-md focus:outline-none"
      />
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
});

export default InputItem;
