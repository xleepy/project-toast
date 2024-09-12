import React from "react";
import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function Variant({ value, onChange, ...delegated }) {
  const id = React.useId();
  const generatedId = `${value}-${id}`;
  return (
    <label htmlFor={generatedId}>
      <input
        id={generatedId}
        type="radio"
        name="variant"
        value={value}
        onChange={onChange}
        {...delegated}
      />
      {value}
    </label>
  );
}

function Variants({ onChange, selectedVariant, className }) {
  return (
    <div className={className}>
      <div className={styles.label}>Variant</div>
      <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
        {VARIANT_OPTIONS.map((val) => {
          return (
            <Variant
              key={val}
              checked={val === selectedVariant}
              value={val}
              onChange={(event) => onChange(event.target.value)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default React.memo(Variants);
