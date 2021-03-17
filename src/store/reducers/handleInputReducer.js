export default function handleInputReducer(state = "", action) {
    switch (action.type) {
        case "HANDLE_INPUT":
            return (state = action.payload);
        default:
            return state;
    }
}
