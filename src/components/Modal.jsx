import { useEffect } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md p-6 rounded-[16px] bg-[#140926] text-white shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <button
          className="absolute top-3 right-3 text-gray-300 hover:text-white"
          onClick={onClose}
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default Modal;
