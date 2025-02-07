import { createSlice, configureStore } from '@reduxjs/toolkit';
export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
      console.log(name,image,cost)
    },
    decrementItem: (state, action) => {
      const {name} = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem.quantity <= 1){
        return
      }
      else{
        existingItem.quantity--
      }
      },

    removeItem: (state, action) => {
      const {name} = action.payload;
      state.items = state.items.filter(item => item.name !== name)
      },

    updateQuantity: (state, action) => {
      const {quantity} = action.payload;
      const itemToUpdate = state.items.find(item=> item.name === index);
      if (itemToUpdate){
        itemToUpdate.quantity = quantity
      }

    
    },
  },
});

export const { addItem, removeItem, decrementItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
