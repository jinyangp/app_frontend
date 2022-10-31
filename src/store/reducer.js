const reducer = (state, action) => {
  let updatedUserDetails;

  switch (action.type) {
    case "LOG_IN":
      updatedUserDetails = { ...action.payload.userDetails };
      return {
        ...state,
        userDetails: updatedUserDetails,
      };

    case "LOG_OUT":
      return {
        ...state,
        userDetails: {},
      };

    case "ADD_TO_WISHLIST":
      updatedUserDetails = {
        ...state.userDetails,
        wishlistIds: action.payload.productIds,
      };
      return {
        ...state,
        userDetails: updatedUserDetails,
      };

    case "REMOVE_FROM_WISHLIST":
      updatedUserDetails = {
        ...state.userDetails,
        wishlistIds: action.payload.productIds,
      };

      return {
        ...state,
        userDetails: updatedUserDetails,
      };

    default:
      return state;
  }
};

export default reducer;
