import "./Modal.css";
function Modal({ show, onClose, children }) {
  if (show === false) return null;
  return (
    <div className="backdrop" onClick={onClose}>
      <div className="Modal" onClick={(event) => event.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export default Modal;
