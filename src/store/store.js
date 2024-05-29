import { create } from "zustand";

export const useStoreProfile = create((set) => ({
  profile: null,
  picture: null,
  setProfile: (newValue) => set((oldValue) => ({ ...oldValue, ...newValue })),
}));

export const useStoreProducts = create((set) => ({
  products: [],
  setProducts: (newValue) => set((oldValue) => ({ ...oldValue, ...newValue })),
}));
