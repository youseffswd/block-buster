
export const setPage = () => {
    return {
        type:"SET_PAGE",
    }
}
export const increasePage = (page) => {
    return {
        type:"INCREASE_PAGE",
        payload:page
    }
}
export const descreasePage = (page) => {
    return {
        type:"DESCREASE_PAGE",
        payload:page
    }
}



