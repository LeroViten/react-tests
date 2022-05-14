import { createContext, useContext, useReducer } from 'react';
import { commentsReducer } from './comments/reducer';

const Store = createContext();

export const useStore = () => useContext(Store);

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(commentsReducer, {
    comments: [],
    isLoading: false,
    error: null,
  });

  return <Store.Provider value={[state, dispatch]}>{children}</Store.Provider>;
};
