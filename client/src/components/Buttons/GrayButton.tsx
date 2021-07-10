import { printIntrospectionSchema } from "graphql";
import React from "react";

interface Props {
  children?: React.ReactNode;
  onClick: () => void;
  full?: boolean;
}

export const GrayButton: React.FC<Props> = ({
  children,
  onClick,
  full,
}) => {
  return (
    <button
      onClick={onClick}
      className="bg-gray-200 rounded text-black w-20 h-10 uppercase text-sm  font-semibold"
    >
      {children}
    </button>
  );
};
