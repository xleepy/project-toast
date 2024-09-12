import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

const NotFoundIcon = ({ size }) => {
  return (
    <div>
      <AlertTriangle size={size} />
      Icon not found
    </div>
  );
};

function Toast({ variant, onClose, children }) {
  const Icon = ICONS_BY_VARIANT[variant] ?? NotFoundIcon;
  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>{children}</p>
      <button
        aria-label="Dismiss message"
        aria-live="off"
        onClick={onClose}
        className={styles.closeButton}
      >
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
