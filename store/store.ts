import { create, createStore } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type CounterStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

export const useCounterStorePersist = create<CounterStore>()(
  persist(
    (set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
      // decrement: () => set((state) => ({ count: state.count - 1 })),
      // decrement if less then 0 then it will be 0
      decrement: () =>
        set((state) => ({ count: Math.max(state.count - 1, 0) })),
    }),
    {
      name: "counter-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
