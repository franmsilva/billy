import { useEffect, useRef, MouseEventHandler } from 'react';

export const useClickOutside = (handler: MouseEventHandler) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const listener = (event) => {
      // Only call if clicking ref's element or descendent elements
      if (!ref.current?.contains(event.target)) {
        handler(event);
      }
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [handler]);

  return ref;
};
