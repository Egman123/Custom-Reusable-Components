import React, { useState } from 'react'; 
 
type MenuItem = { 
  label: string; 
  onClick?: () => void; 
}; 

type DropdownProps = {
  menuItems: MenuItem[]; 
  direction?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'; 
  trigger?: 'click' | 'hover'; 
};

const Dropdown: React.FC<DropdownProps> = ({
  menuItems,
  direction = 'bottom-right',
  trigger = 'click',
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (trigger === 'click') {
      setIsVisible(!isVisible);
    }
  };

  const showMenu = () => {
    if (trigger === 'hover') {
      setIsVisible(true);
    }
  };

  const hideMenu = () => {
    if (trigger === 'hover') {
      setIsVisible(false);
    }
  };

  const directionClass = {
    'bottom-right': 'top-full left-0',
    'bottom-left': 'top-full right-0',
    'top-right': 'bottom-full left-0',
    'top-left': 'bottom-full right-0',
  }[direction];

  return (
    <div
      className="relative inline-block"
      onMouseEnter={showMenu}
      onMouseLeave={hideMenu}
    >
      <button
        onClick={toggleVisibility}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Open Menu
      </button>

      {isVisible && (
        <ul
          className={`absolute ${directionClass} mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg`}
        >
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                item.onClick && item.onClick();
                if (trigger === 'click') setIsVisible(false);
              }}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;

