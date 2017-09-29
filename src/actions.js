export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
export const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART';

export const increaseQuantity = (item) => {
  return {
    type: INCREASE_QUANTITY,
    item
  }
};

export const decreaseQuantity = (item) => {
  return {
    type: DECREASE_QUANTITY,
    item
  }
};

export const removeItemFromCart = (item) => {
  return {
    type: REMOVE_ITEM_FROM_CART,
    item
  };
};
