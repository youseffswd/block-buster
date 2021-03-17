export const chooseVersion = version => {
    return dispatch => {
        localStorage.setItem("version", version);
        dispatch({ type: "CHOOSE_VERSION", payload: version });
    };
};
