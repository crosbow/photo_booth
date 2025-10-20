import { useEffect, useRef } from "react";
import { PlusIcon } from "../../assets";
import "../modals/modal.css";

const Modal = ({ isOpen, onClose, hasCloseBtn = true, children }) => {
  const modalRef = useRef(null);

  const handleCloseModal = () => {
    if (onClose) {
      onClose();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      handleCloseModal();
    }
  };

  useEffect(() => {
    const modalElement = modalRef.current;

    if (!modalElement) return;

    // Open modal when 'isOpen' changes to true
    if (isOpen) {
      modalElement.showModal();
    } else {
      modalElement.close();
    }
  }, [isOpen]);

  return (
    <dialog
      ref={modalRef}
      onKeyDown={handleKeyDown}
      className="  m-auto flex justify-center  items-center"
    >
      <div className="dialog relative">
        {children}
        {hasCloseBtn && (
          <button
            onClick={handleCloseModal}
            className="rotate-45  absolute top-2 right-2 cursor-pointer "
          >
            <PlusIcon />
          </button>
        )}
      </div>
    </dialog>
  );
};
export default Modal;
