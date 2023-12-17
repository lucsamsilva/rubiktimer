import { useEffect } from "react";

export const useOnKeyPress = (callback, targetKey, running) => {
  useEffect(() => {
    const keyPressHandler = (event) => {
      if (event.keyCode === targetKey && running) {
        callback();
      }
    };

    window.addEventListener("keydown", keyPressHandler);

    return () => {
      window.removeEventListener("keydown", keyPressHandler);
    };
  }, [callback, targetKey]);
};
