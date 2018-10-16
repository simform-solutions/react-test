import { ON_MODAL_TOGGLE, ON_IMAGE_UPDATE } from "constants/product";
const intitialState = { isOpen: false };

export default (state = intitialState, action) => {
  switch (action.type) {
    case ON_MODAL_TOGGLE:
      return { ...state, isOpen: action.isOpen };
    case ON_IMAGE_UPDATE:
      return { ...state, imageUrl: action.imageUrl };
    default:
      return state;
  }
};
