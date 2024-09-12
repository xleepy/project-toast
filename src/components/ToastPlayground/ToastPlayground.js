import React, { useEffect, useRef, useState } from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import ToastShelf from "../ToastShelf/ToastShelf";
import { useToastsContext } from "../ToastProvider/ToastProvider";
import LabeledTextArea from "./LabeledTextArea";
import Variants from "./Variants";

function useEscapeKey(callback) {
  const callbackRef = useRef();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    function handleEscape(event) {
      if (event.code === "Escape" && callbackRef.current) {
        callbackRef.current();
      }
    }
    document.addEventListener("keyup", handleEscape);
    return () => {
      document.removeEventListener("keyup", handleEscape);
    };
  }, []);
}

function ToastPlayground() {
  const [variant, setVariant] = useState("notice");
  const [message, setMessage] = useState("");
  const { toasts, createToast, deleteToastById, setToasts } =
    useToastsContext();

  const createMessage = (event) => {
    event.preventDefault();
    createToast(variant, message);
  };

  useEscapeKey(() => {
    setToasts([]);
  });

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf toasts={toasts} onClose={deleteToastById} />
      <form onSubmit={createMessage} className={styles.controlsWrapper}>
        <LabeledTextArea
          className={styles.row}
          value={message}
          onChange={(event) => {
            setMessage(event.target.value);
          }}
          label="Message"
        />
        <Variants
          className={styles.row}
          selectedVariant={variant}
          onChange={setVariant}
        />
        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button type="submit">Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
