import { create } from "zustand";
import { generateRows } from "../utilities/generateRows";
import type { Row } from "../shared/types";

interface StoreState {
  rows: Row[];
  addRows: () => void;
  reset: () => void;
}

const useStore = create<StoreState>((set) => ({
  rows: generateRows(20),
  addRows: () => {
    const newRows = generateRows(10);
    set((state) => ({ rows: [...state.rows, ...newRows] }));
  },
  reset: () => set({ rows: generateRows(20) }),
}));

export default useStore;