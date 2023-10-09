import React from "react";

interface BaseInputProps {
  className?: string;
  value?: string;
  name?: string;
  label?: string;
  type?: string;
  onChange: (event: { value: string | number | Date; name: string }) => void;
}

export const BaseInput: React.FC<BaseInputProps> = ({
  value,
  name,
  onChange,
  label,
  type,
  className,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ value: event.target.value, name: event.target.name });
  };

  return (
    <div className={className}>
      {label?.length && (
        <label className="block font-medium text-gray-700">{label}</label>
      )}
      <input
        type={type?.length ? type : "text"}
        id="teacher"
        name={name}
        placeholder={name}
        value={value}
        onChange={handleChange}
        className="border rounded-md px-3 py-2 w-full outline-none focus:border-blue-300"
      />
    </div>
  );
};
