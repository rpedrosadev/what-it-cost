import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useBudgetGlobal = create<{
  budgetGlobal: number | undefined;
  setBudgetGlobal: (budgetGlobal: number) => void;
  addToBudgetGlobal: (budgetGlobal: number) => void;
  substractToBudgetGlobal: (budgetGlobal: number) => void;
}>()(
  persist(
    (set, get) => ({
      budgetGlobal: undefined,
      setBudgetGlobal: (budgetGlobal: number) => set({ budgetGlobal }),
      addToBudgetGlobal: (amount: number) =>
        set({ budgetGlobal: (get().budgetGlobal || 0) + amount }),
      substractToBudgetGlobal: (amount: number) =>
        set({ budgetGlobal: (get().budgetGlobal || 0) - amount }),
    }),
    {
      name: "budget-global", // name of the item in the storage (must be unique)
    }
  )
);
