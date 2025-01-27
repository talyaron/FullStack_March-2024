import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface imageState {
    image: {
        message: string,
        status: string
    } | null
}

const initialState: imageState = {
    image: null
}

export const imageSlice = createSlice({
    name: 'image',
    initialState,
    reducers: {
        setImage: (state, action: PayloadAction<{ message: string, status: string }|null>) => {
            state.image = action.payload
        },
    },
})

export const { setImage } = imageSlice.actions;

export const selectDog = (state: { image: imageState }) => state.image.image;

export default imageSlice.reducer;