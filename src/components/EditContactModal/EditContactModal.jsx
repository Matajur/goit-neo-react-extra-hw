import Modal from "react-modal";
import { useState } from "react";
import styles from "./EditContactModal.module.css";

Modal.setAppElement("#root");

export const EditContactModal = ({
  isOpen,
  onRequestClose,
  contact,
  onConfirm,
}) => {
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm({ name, number });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        content: {
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "300px",
          height: "200px",
          background: "gray",
          padding: "20px",
          borderRadius: "8px",
        },
      }}
    >
      <h2>Edit Contact</h2>
      <form onSubmit={handleSubmit} className={styles.editForm}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Number:
          <input
            type="tel"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
        </label>
        <div className={styles.actions}>
          <button type="submit" className={styles.confirmButton}>
            Confirm
          </button>
          <button
            type="button"
            onClick={onRequestClose}
            className={styles.cancelButton}
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};
