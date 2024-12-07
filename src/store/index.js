import { create } from "zustand";
import { createAuthSlice } from "./slices/auth-slice.js";


export const userAppStore = create((...a) => ({
  ...createAuthSlice(...a),
}));

