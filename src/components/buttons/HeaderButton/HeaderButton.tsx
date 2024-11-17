import React from 'react';

type HeaderButtonProps = {
  text: string;
  action: () => void;
}

export const HeaderButton: React.FC<HeaderButtonProps> = ({text, action}) => {
  return (
    <button
      onClick={action}
      type="button"
      className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-publicamas-main-color focus:ring-offset-2"
    >
      <span className="absolute -inset-1.5" />
      <span className="sr-only">{text}</span>
      {text}
    </button>
  );
};