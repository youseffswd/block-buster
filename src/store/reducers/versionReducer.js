const versionReducer = (state = "", action) => {
    switch (action.type) {
        case "CHOOSE_VERSION":
            return action.payload;
        default:
            return state;
    }
};

export default versionReducer;
