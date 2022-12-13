import create from 'zustand';

interface FinnState {
    lenis: undefined | any
    setLenis: any
}

export const useStore = create<FinnState>((set) => ({
    lenis: undefined,
    //@ts-ignore
    setLenis: (lenis) => set({ lenis }),
}))
