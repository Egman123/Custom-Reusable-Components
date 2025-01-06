import React from "react";

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset'; 
  size?: string; 
  onClick?: () => void; 
};

const Button: React.FC<ButtonProps> = ({ type = 'button', size, onClick }) => {
  return (
    <div>
      <button
        type={type}
        onClick={onClick}
        className={`bg-blue-500 text-white rounded ${size || ''}`}
      >
        Click
      </button>
    </div>
  );
};

export default Button;