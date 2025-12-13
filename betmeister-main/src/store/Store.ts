import { configureStore, createSlice } from '@reduxjs/toolkit';

// Типы
export interface CartItem {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  quantity: number;
  type: string;
}

interface CartState {
  items: CartItem[];
}

// Начальное состояние
const initialState: CartState = {
  items: [],
};

// Создаем slice
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(i => i.id === item.id);
      
      if (existingItem) {
        existingItem.quantity += item.quantity || 1;
      } else {
        state.items.push({ 
          ...item, 
          quantity: item.quantity || 1 
        });
      }
    },
    
    incrementQuantity: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    
    decrementQuantity: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.items = state.items.filter(i => i.id !== action.payload);
      }
    },
    
    removeItem: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload);
    },
    
    clearCart: (state) => {
      state.items = [];
    },
  },
});

// Экспортируем actions
export const { 
  addToCart, 
  incrementQuantity, 
  decrementQuantity, 
  removeItem, 
  clearCart 
} = cartSlice.actions;

// Создаем store
export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

// Экспортируем тип RootState
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;