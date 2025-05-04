import { useEffect } from "react";

export default function Notification({ message, type = "success", onClose }) {
  // Auto-close after 5 seconds
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const typeStyles = {
    success: "bg-green-500",
    error: "bg-red-500",
    warning: "bg-yellow-500",
  };

  return (
    <div
      className={`fixed top-4 right-4 ${typeStyles[type]} text-white px-4 py-3 rounded-md shadow-lg flex items-center animate-fade-in`}
    >
      <span>{message}</span>
    </div>
  );
}
