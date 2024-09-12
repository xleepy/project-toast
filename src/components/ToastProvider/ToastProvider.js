import React, { useCallback, useMemo, useState } from "react";

const ToastsContext = React.createContext(null);

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const deleteToastById = useCallback((id) => {
    setToasts((state) => {
      return state.filter((t) => t.id !== id);
    });
  }, []);

  const createToast = useCallback((variant, message) => {
    setToasts((state) => {
      return [...state, { id: Date.now(), value: message, variant }];
    });
  }, []);

  const value = useMemo(() => {
    return {
      toasts,
      createToast,
      deleteToastById,
      setToasts,
    };
  }, [createToast, toasts, deleteToastById]);
  return (
    <ToastsContext.Provider value={value}>{children}</ToastsContext.Provider>
  );
}

export default ToastProvider;

export function useToastsContext() {
  return React.useContext(ToastsContext);
}
