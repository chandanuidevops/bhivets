import { getApi } from "../../middleware/thunkCallback";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

// Async thunk to fetch home data
export const getHomeData = createAsyncThunk<any[]>(
    "home/getHomeData",
    async (_, { dispatch, rejectWithValue }) => {
        try {
            const response = await getApi({
                url: `https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/refs/heads/main/data.json`,
                dispatch: dispatch,
            });
            return response;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);


interface HomeState {
    data: any[];
    loading: boolean;
    error: string | null;
}

// Initial state
const initialState: HomeState = {
    data: [],
    loading: false,
    error: null
};

// Slice
const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getHomeData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getHomeData.fulfilled, (state, action: PayloadAction<any[]>) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getHomeData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to fetch home data";
            });
    },
});

export default homeSlice.reducer;
