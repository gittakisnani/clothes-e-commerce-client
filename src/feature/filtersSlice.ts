import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Filters } from "../types/types";


const initialState: Filters = {
    type: [],
    color: [],
    size: [],
}


export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setFilters(state, action: PayloadAction<{ filter: keyof Omit<Filters, 'minPrice' | 'maxPrice'>, value: string  }>) {
            const { filter, value } = action.payload;
            state[filter] = state[filter].indexOf(value) !== -1 ? state[filter].filter(el => el !== value) : [...state[filter], value];
        },
        setPrices(state, action: PayloadAction<{ key: keyof Pick<Filters, 'maxPrice' | 'minPrice'>, value: number}>){
            const { key, value } = action.payload;
            state[key] = value
        },
        deleteAllFilters(state) {
            state.color = [];
            state.size = [];
            state.type = [];
        }
    }
})

export const { setFilters, setPrices, deleteAllFilters } = filtersSlice.actions;
export const getFilters = (state: any) => state.filters
export default filtersSlice.reducer