const initialState = {
    initialForm: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        gender: "male",
        developer: "yes",
    },
    isEdited: false,
    dataList: [],
    // uniId: null,
};
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SEND_POSTS":
            if (!state.isEdited) {
                return {
                    ...state,
                    dataList: [
                        ...state.dataList,
                        { id: new Date().valueOf(), ...action.payload },
                    ],
                };
            } else {
                return {
                    ...state,
                    dataList: state.dataList.map((item) =>
                        item.id === action.payload.id ? action.payload : item
                    ),
                };
            }
        case "DELETE_POST":
            return {
                ...state,
                dataList: state.dataList.filter(
                    (item) => item.id !== action.payload
                ),
            };
        case "EDIT_POST":
            return {
                ...state,
                isEdited: true,
                initialForm: state.dataList.filter(
                    (item) => item.id === action.payload
                )[0],
                // uniId: action.payload,
            };
        case "POST_FINISHED":
            return {
                ...state,
                initialForm: {
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    gender: "male",
                    developer: "yes",
                },
                isEdited: false,
            };

        default:
            return state;
    }
};

export default rootReducer;
