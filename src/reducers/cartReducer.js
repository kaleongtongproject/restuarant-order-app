export const initialCartState = {};

export const cartReducer = (state = initialCartState, action) => {
  const {
    payload: { id },
    type
  } = action;
  switch (type) {
    case "add":
      return { ...state, [id]: state[id] ? state[id] + 1 : 1 };
    case "remove":
      return { ...state, [id]: 0 };
    case "increment":
      return { ...state, [id]: state[id] ? state[id] + 1 : 1 };
    case "decrement":
      return { ...state, [id]: state[id] > 0 ? state[id] - 1 : 0 };
    default:
      throw new Error("Invalid action type");
  }
};

export default {
  initialCartState,
  cartReducer
};
