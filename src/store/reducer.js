const reducer = (state, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        userDetails: action.payload,
      };

    case "LOG_OUT":
      return {
        ...state,
        userDetails: {},
      };

    case "ADD_TO_WISHLIST":
      return {
        ...state,
        userDetails: state.userDetails.wishlistIds.push(action.payload),
      };

    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        userDetails: state.userDetails.wishlistIds.filter(
          (item) => item.id != action.payload
        ),
      };

    default:
      return state;
  }
};

export default reducer;
