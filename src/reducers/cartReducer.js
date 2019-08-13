export const initialCartState = {};

export const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case "add":
      return { ...state, ...action.payload };
    case "remove":
      return { ...state, [action.payload.id]: 0 };
    case "increment":
      return { ...state, [action.payload.id]: state[action.payload.id] + 1 };
    case "decrement":
      return { ...state, [action.payload.id]: state[action.payload.id] - 1 };
    default:
      throw new Error("Invalid action type");
  }
};

export default {
  initialCartState,
  cartReducer
};
