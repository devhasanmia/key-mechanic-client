import { UseFormRegisterReturn } from "react-hook-form";
type TInputWithLabel = {
  label: string;
  type: string;
  placeholder: string;
  register?: UseFormRegisterReturn;
};

const InputWihtLabel = ({
  label,
  type,
  placeholder,
  register,
}: TInputWithLabel) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <input
        type={type}
        {...(register || {})}
        className=" border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputWihtLabel;
