import React from 'react'

export interface InputFieldProps {
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  label?: string
  placeholder?: string
  helperText?: string
  errorMessage?: string
  disabled?: boolean
  invalid?: boolean
  variant?: 'filled' | 'outlined' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled,
  invalid,
  variant = 'outlined',
  size = 'md',
}) => {
  const baseClasses = 'rounded-md w-full focus:outline-none border p-2'
  const variants = {
    filled: 'bg-gray-100 border-transparent',
    outlined: 'border-gray-300',
    ghost: 'border-none bg-transparent',
  }
  const sizes = {
    sm: 'text-sm p-1',
    md: 'text-base p-2',
    lg: 'text-lg p-3',
  }
  return (
    <div className="flex flex-col space-y-1">
      {label && <label className="text-sm font-medium">{label}</label>}
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${
          invalid ? 'border-red-500' : ''
        }`}
      />
      {helperText && !invalid && <span className="text-xs text-gray-500">{helperText}</span>}
      {invalid && errorMessage && <span className="text-xs text-red-500">{errorMessage}</span>}
    </div>
  )
}

export default InputField