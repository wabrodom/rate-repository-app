import { createContext, useContext, useReducer } from "react"

const repositoryOrderReducer = (state, action) => {
  switch(action.type) {
    case 'SET_ORDER': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

const RepositoryOrderContext = createContext();

export const RepositoryOrderProvider = ({ children }) => {
  const defaultValue = {
    "orderBy": 'CREATED_AT',
    "orderDirection": 'DESC'
  };

  const [order, orderDispatch] = useReducer(repositoryOrderReducer, defaultValue);
  return (
    <RepositoryOrderContext.Provider value={[order, orderDispatch]}>
      {children}
    </RepositoryOrderContext.Provider>
  )
};

export default RepositoryOrderContext;

export const useNotificationOrder = () => {
  const stateAndDispatch = useContext(RepositoryOrderContext);
  return stateAndDispatch[0];
}

export const useNotificationDispatch = () => {
  const dispatch = useContext(RepositoryOrderContext)[1];
  return ({ orderBy, orderDirection }) => {
    dispatch({
      type: 'SET_ORDER',
      payload: { orderBy, orderDirection }
    });
  }
}