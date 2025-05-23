import { useState, createContext, type ReactNode, useCallback, useMemo, useEffect } from "react";

type TMenuContextProviderProps = {
  children: ReactNode;
};

type TMenuContext = {
  toOpen: boolean;
  toggle: () => void;
};

export const MenuContext = createContext<TMenuContext | undefined>(undefined);

const MenuContextProvider = ({ children }: TMenuContextProviderProps) => {
  const [toOpen, setIsOpen] = useState<boolean>(false);

  const toggle = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  const value = useMemo(() => ({ toOpen, toggle }), [toOpen, toggle]);

  useEffect(() => {
    const closeMenu = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", closeMenu);

    return () => window.removeEventListener("keydown", closeMenu);
  }, []);

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};

export default MenuContextProvider;
