export const fetchInitialState = {
    loading: false,
    person: null,
    error: ""
}
export const reducer = (state, action) => {
    switch (action.type) {
        case "START":
            return { ...state, loading: true, person: null, error: "" };
            break;
        case "SUCCESS":
            return { ...state, loading: false, person: action.payload, error: "" };
            break;
        case "FAIL":
            return { ...state, loading: false, person: null, error: action.payload };
            break
        default:
            return state;
            break;
    }
}