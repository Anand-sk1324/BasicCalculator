import { create } from "zustand";

type DisplayStore = {
    displayValue: string
    concat: (c: string) => void
    compute: () => void
    clear: () => void
}

const useDisplay = create <DisplayStore> ((set) => ({
    displayValue: ``,
    concat: (c) => set((state) => ({
        displayValue: state.displayValue + c
    })),
    compute: () =>
        set((state) => ({
            displayValue: eval(state.displayValue)
        }))
    ,
    clear: () => set({
        displayValue: ''
    })
}))
export default useDisplay