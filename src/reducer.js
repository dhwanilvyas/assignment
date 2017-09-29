import {
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  REMOVE_ITEM_FROM_CART,
  RESTORE_DATA
} from './actions';

const initialState = {
  data: [
    { "id": 9090, "name": "Item1", "price": 200, "discount": 10, "type": "fiction", "img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg", "quantity": 1 },
    { "id": 9091, "name": "Item2", "price": 250, "discount": 15, "type": "literature",  "img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg", "quantity": 1  },
    { "id": 9092, "name": "Item3", "price": 320, "discount": 5, "type": "literature", "img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg", "quantity": 1 },
    { "id": 9093, "name": "Item4", "price": 290, "discount": 0, "type": "thriller", "img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg", "quantity": 1 },
    { "id": 9094, "name": "Item1", "price": 500, "discount": 25, "type": "thriller", "img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg", "quantity": 1 },
    { "id": 9095, "name": "Item2", "price": 150, "discount": 5, "type": "literature", "img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg", "quantity": 1 },
    { "id": 9096, "name": "Item3", "price": 700, "discount": 22, "type": "literature", "img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg", "quantity": 1 },
    { "id": 9097, "name": "Item4", "price": 350, "discount": 18, "type": "fiction", "img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg", "quantity": 1 }
  ]
};

export const getTotal = (state) => {
  let total = 0;
  state.forEach(item => {
    total += (item.quantity * item.price);
  });
  return total;
};

export const getTotalDiscount = (state) => {
  let total = 0;
  state.forEach(item => {
    total += item.discount;
  });
  return total;
};

export const getTypeDiscount = (state) => {
  let total = 0;
  state.forEach(item => {
    if (item.type === 'fiction') {
      total += (item.price * 0.15);
    }
  });
  return total;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_QUANTITY:
      return Object.assign({}, state, { data: state.data.map(item =>
        (item.id === action.item.id)
          ? {...item, quantity: item.quantity + 1 }
          : item
      )})
    case DECREASE_QUANTITY:
    return Object.assign({}, state, { data: state.data.map(item =>
      (item.id === action.item.id)
        ? {...item, quantity: item.quantity - 1 }
        : item
    )})
    case REMOVE_ITEM_FROM_CART:
      return Object.assign({}, state, {
        data: state.data.filter(item => item.id !== action.item.id)
      })
    case RESTORE_DATA:
      return initialState;
    default:
      return state;
  }
}

export default reducer;
