import * as constants from "../constants/products";

const initialState = {
    items: [
        { id: "#1", name: "iPad 4 Mini", price: 500, count: 0 },
        { id: "#2", name: "H&M T-Shirt White", price: 10, count: 0 },
        { id: "#3", name: "Charli XCX - Sucker CD", price: 699, count: 0 },
    ],
};

export default function productsReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        // Если нужно добавить продукт
        case constants.ADD_PRODUCT:
            return {
                ...state,
                items: state.items.map((item) => {
                    if (item.id === payload.id) {
                        return {
                            ...item,
                            count: item.count + 1,
                        };
                    }

                    return item;
                }),
            };

        // Если нужно убрать продукт
        case constants.REMOVE_PRODUCT:
            return {
                ...state,
                items: state.items.map((item) => {
                    if (item.id === payload.id) {
                        return {
                            ...item,
                            count: item.count - 1,
                        };
                    }

                    return item;
                }),
            };

        // В любом другом случае возвращаем старое состояние
        default:
            return state;
    }
}