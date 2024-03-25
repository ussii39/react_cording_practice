import React from "react";

interface ProfileFormProps {
  label: string;
  value: string;
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ProfileFormComponent = React.memo(
  ({ label, value, type, onChange }: ProfileFormProps) => {
    const inputId = `input-${label}`;

    return (
      <div className="mb-4">
        <label htmlFor={inputId} className="block text-gray-700 font-bold mb-2">
          {label}
        </label>
        {type === "file" ? (
          <input
            id={inputId}
            className="shadow appearance-none border rounded w-2/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="file"
            accept="image/*"
            name={label}
            onChange={onChange}
          />
        ) : (
          <input
            id={inputId}
            className="shadow appearance-none border rounded w-2/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type={type}
            value={value}
            name={label}
            onChange={onChange}
          />
        )}
      </div>
    );
  }
);
