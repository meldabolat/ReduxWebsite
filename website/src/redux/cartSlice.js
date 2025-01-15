import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cartItems.find(
                (item) => item.id === action.payload.id
            );
            if (!existingItem) {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            } else {
                existingItem.quantity += 1;
            }
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
                (item) => item.id !== action.payload.id
            );
        },
        increaseQuantity: (state, action) => {
            const item = state.cartItems.find(
                (item) => item.id === action.payload.id
            );
            if (item) {
                item.quantity += 1;
            }
        },
        decreaseQuantity: (state, action) => {
            const item = state.cartItems.find(
                (item) => item.id === action.payload.id
            );
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            } else if (item && item.quantity === 1) {
                state.cartItems = state.cartItems.filter(
                    (item) => item.id !== action.payload.id
                );
            }
        },
    },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
    cartSlice.actions;

// **Reducer'ı export etmeyi unutmayın**
export default cartSlice.reducer;
