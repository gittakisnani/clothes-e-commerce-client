import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CATEGORIES, Filters } from "../types/types";


const initialState: Filters = {
    type: [],
    color: [],
    size: [],
}


export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setFilters(state, action: PayloadAction<{ filter: keyof Pick<Filters, 'type' | 'color' | 'size'>, value: string  }>) {
            const { filter, value } = action.payload;
            state[filter] = state[filter].indexOf(value) !== -1 ? state[filter].filter(el => el !== value) : [...state[filter], value];
        },
        setPrices(state, action: PayloadAction<{ key: keyof Pick<Filters, 'maxPrice' | 'minPrice'>, value: number}>){
            const { key, value } = action.payload;
            state[key] = value
        },
        setCat(state, action: PayloadAction<CATEGORIES[number]>) {
            const cat = action.payload;
            state.cat = cat
        },
        setSearch(state, action: PayloadAction<string>) {
            const search = action.payload || '';
            state.search = search
        },
        deleteAllFilters(state) {
            state.color = [];
            state.size = [];
            state.type = [];
        }
    }
})

export const { setFilters, setPrices, setSearch, setCat,deleteAllFilters } = filtersSlice.actions;
export const getFilters = (state: any) => state.filters
export default filtersSlice.reducer