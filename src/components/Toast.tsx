import React, { useState } from "react";

interface ToastProps {
  message: string;
  type?: "success" | "error" | "info";
}

export const Toast: React.FC<ToastProps> = ({ message, type = "info" }) => {
  const typeStyles =
    type === "success"
      ? "bg-green-500 text-white"
      : type === "error"
      ? "bg-red-500 text-white"
      : "bg-blue-500 text-white";

  return (
    <div
      className={`fixed bottom-5 right-5 p-3 rounded shadow ${typeStyles}`}
    >
      {message}
    </div>
  );
};
