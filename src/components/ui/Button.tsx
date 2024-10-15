type IButton = {
  text: string;
  type: "submit" | "button" | "reset";
};

const Button = ({ text, type }: IButton) => {
  return (
    <button
      type={type}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      {text}
    </button>
  );
};

export default Button;
