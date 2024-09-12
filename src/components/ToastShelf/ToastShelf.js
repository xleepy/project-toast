import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, onClose }) {
  return (
    <ol
      role="region"
      aria-live="polite"
      aria-label="Notification"
      className={styles.wrapper}
    >
      {toasts.map(({ value, id, variant }) => {
        return (
          <li key={id} className={styles.toastWrapper}>
            <Toast onClose={() => onClose(id)} variant={variant}>
              {value}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
