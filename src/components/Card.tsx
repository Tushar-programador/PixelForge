import React from "react";

interface CardProps {
  title: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="border rounded shadow p-4 bg-white">
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <div>{children}</div>
    </div>
  );
};
