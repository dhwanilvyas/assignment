export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
export const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART';
export const RESTORE_DATA = 'RESTORE_DATA';

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

export const restoreData = () => {
  return {
    type: RESTORE_DATA
  };
}
