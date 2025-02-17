import { useEffect } from "react";

export const useOutsideClick = (
  ref: React.RefObject<HTMLElement>, // ✅ Explicit type for ref
  callback: (event: MouseEvent | TouchEvent) => void // ✅ Explicit type for callback
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => { // ✅ Explicit type for event
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      callback(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};
