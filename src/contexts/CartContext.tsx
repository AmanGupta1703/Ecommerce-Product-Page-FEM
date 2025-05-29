import { createContext, useCallback, useMemo, useState } from "react";

// ---

type TCartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
};

type TInitialState = {
  items: TCartItem[];
  isOpen: boolean;
};

type TCartContext = {
  state: TInitialState;
  handleCartToggle: () => void;
  handleAddToCart: (id: string) => void;
  handleItemDelete: (id: string) => void;
  handleQuantityIncrease: (productId: string, quantity: number) => void;
  handleQuantityDecrease: (productId: string, quantity: number) => void;
};

type TCartContextProviderProps = {
  children: React.ReactNode;
};

// ---
const initialState: TInitialState = {
  items: [],
  isOpen: false,
};

export const CartContext = createContext<TCartContext | undefined>(undefined);

const newItem: TCartItem = {
  id: "sneaker-001",
  name: "Fall Limited Edition Sneakers",
  price: 125.0,
  quantity: 1,
  imageUrl: "images/image-product-1-thumbnail.jpg",
};

const CartContextProvider = ({ children }: TCartContextProviderProps) => {
  const [state, setState] = useState<TInitialState>(initialState);

  const handleCartToggle = useCallback(() => {
    setState((prevState) => ({ ...prevState, isOpen: !state.isOpen }));
  }, [state.isOpen]);

  const handleAddToCart = useCallback(
    (id: string) => {
      const isItemPresent = state.items.some((item) => item.id === id);

      if (isItemPresent) {
        const itemToFind = state.items.find((item) => item.id === id);

        if (itemToFind) {
          itemToFind.quantity += 1;
        }

        setState((prevState) => ({ ...prevState, items: [...state.items] }));
      }

      if (!isItemPresent) {
        setState((prevState) => ({ ...prevState, items: [...state.items, newItem] }));
      }
    },
    [state],
  );

  const handleItemDelete = useCallback((id: string) => {
    setState((prevState) => ({
      ...prevState,
      items: state.items.filter((item) => item.id !== id),
    }));
  }, []);

  const handleQuantityIncrease = (productId: string, quantity: number) => {
    const productToUpdate = state.items.find((item) => item.id === productId);

    if (!productToUpdate) {
      console.warn(`Product with id ${productId} not found in cart.`);
      return;
    }

    setState((prevState) => ({
      ...prevState,
      items: state.items.map((item) => (item.id === productId ? { ...item, quantity } : item)),
    }));
  };

  const handleQuantityDecrease = (productId: string, quantity: number) => {
    const productToUpdate = state.items.find((item) => item.id === productId);

    console.log(quantity);

    if (!productToUpdate) {
      console.warn(`Product with id ${productId} not found in cart.`);
      return;
    }

    setState((prevState) => ({
      ...prevState,
      items: state.items.map((item) => (item.id === productId ? { ...item, quantity } : item)),
    }));
  };

  const value = useMemo(
    () => ({
      state,
      handleQuantityIncrease,
      handleQuantityDecrease,
      handleCartToggle,
      handleAddToCart,
      handleItemDelete,
    }),
    [
      state,
      handleQuantityIncrease,
      handleQuantityDecrease,
      handleCartToggle,
      handleAddToCart,
      handleItemDelete,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
