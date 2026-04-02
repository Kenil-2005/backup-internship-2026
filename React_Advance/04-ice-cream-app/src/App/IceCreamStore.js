import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const iceCreamStore = (set) => ({
    stores: {
        base: '',
        topping: [],
        type: '',
        step: 1
    },
    updateStore: (key, value) => {
        set((state) => {
            if (key === "topping") {
                const exists = state.stores.topping.find((item) => item.id === value.id);
                return {
                    ...state,
                    stores: {
                        ...state.stores,
                        topping: exists
                            ? state.stores.topping.filter(
                                (item) => item.id !== value.id
                            )
                            : [...state.stores.topping, value],
                    },
                };
            } else {
                return {
                    ...state,
                    stores: {
                        ...state.stores,
                        [key]: value,
                    },
                };
            }
        }
        )
    },
    resetStore: () => {
        set({
            stores: {
                base: null,
                topping: [],
                type: null,
                step: 1,
            }
        });
    },
});

const useIceCreamStore = create(
    devtools(
        persist(iceCreamStore, {
            name: "courses",
        })
    )
)



export default useIceCreamStore;