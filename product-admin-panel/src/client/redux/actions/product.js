import { ON_MODAL_TOGGLE, ON_IMAGE_UPDATE } from "constants/product";

export const onModalToggle = isOpen => {
  return {
    type: ON_MODAL_TOGGLE,
    isOpen
  };
};

export const updateImage = imageUrl => {
  return {
    type: ON_IMAGE_UPDATE,
    imageUrl
  };
};

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};

export const onImageChange = info => dispatch => {
  getBase64(info.file.originFileObj, imageUrl =>
    dispatch(updateImage(imageUrl))
  );
};
