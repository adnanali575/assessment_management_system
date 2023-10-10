import React from "react";

interface BaseSelectBoxProps {
  className?: string;
  value?: string;
  name?: string;
  label?: string;
  options: string[];
  required?: boolean;
  onChange: (event: { value: string | number; name: string }) => void;
}

const SelectBox: React.FC<BaseSelectBoxProps> = ({
  value,
  name,
  onChange,
  label,
  options,
  required,
  className,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange({ value: event.target.value, name: event.target.name });
  };

  return (
    <div className={className}>
      {label && (
        <label className="block font-medium text-gray-700">{label}</label>
      )}
      <select
        required={required}
        id="teacher" // You can change the id if needed
        name={name}
        value={value}
        onChange={handleChange}
        className="border rounded-md px-3 py-2 w-full outline-none focus:border-blue-300"
      >
        <option disabled value="">
          {label}
        </option>
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectBox;
