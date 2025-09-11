import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";
import { TToast } from "@types";

interface IToastSlice {
  records: TToast[];
}

const initialState: IToastSlice = {
  records: [],
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    deleteToast: (state, action) => {
      const id = action.payload;
      state.records = state.records.filter((record) => record.id !== id);
    },
    addToast: (state, action: PayloadAction<TToast>) => {
      const data = action.payload;
      state.records.push({
        id: nanoid(),
        type: data.type,
        title: data.title ? data.title : data.type,
        message: data.message,
        delayApperance: data.delayApperance || false,
      });
    },
    stopDelayapperance: (state, action) => {
      const id = action.payload;
      console.log(id);
      state.records = state.records.map((record) => {
        if (record.id === id) {
          record.delayApperance = false;
        }
        return record;
      });
    },
  },
});

export const { deleteToast, addToast, stopDelayapperance } = toastSlice.actions;
export default toastSlice.reducer;
