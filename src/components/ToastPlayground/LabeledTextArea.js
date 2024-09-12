import React from "react";
import styles from "./ToastPlayground.module.css";

function LabeledTextArea({ label, className, ...delegated }) {
  const id = React.useId();
  const generatedId = `${label}-${id}`;
  return (
    <div className={className}>
      <label
        htmlFor={generatedId}
        className={styles.label}
        style={{ alignSelf: "baseline" }}
      >
        {label}
      </label>
      <div className={styles.inputWrapper}>
        <textarea
          id={generatedId}
          className={styles.messageInput}
          {...delegated}
        />
      </div>
    </div>
  );
}

export default React.memo(LabeledTextArea);
