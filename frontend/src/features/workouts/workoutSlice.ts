import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
    value: number
}

const initialState = {} as CounterState

const workoutSlice = createSlice({
    name: 'workouts',
    initialState,
    reducers: {
        increment(state) {
            state.value++
        },
        decrement(state) {
            state.value--
        },
        incrementByAmount(state, action: PayloadAction<number>) {
            state.value += action.payload
        },
    },
})

export const { increment, decrement, incrementByAmount } = workoutSlice.actions
export default workoutSlice.reducer