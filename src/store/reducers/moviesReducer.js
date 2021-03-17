const INITIAL_STATE = {
    nowPlaying:null,
    popular:null,
    topRated:null,
    comingSoon:null,
    tvPopular:null,
    tvTopRated:null,
    tvComingSoon:null,
    trailer:null,
    autoCompleteSearchResults:null,
    searchResults:null,
    movie:null,
    tv:null,
    singleTrailer:null
}


const moviesReducer = (state = INITIAL_STATE,action) => {
    switch(action.type){
        case "GET_NOW_PLAYING":
            return {...state,nowPlaying:action.payload}
        case 'GET_POPULAR' :
            return {...state,popular:action.payload}
        case "GET_COMING_SOON":
            return {...state,comingSoon:action.payload}
        case "GET_TOP_RATED":
            return {...state,topRated:action.payload}
        case "GET_TV_POPULAR":
            return {...state,tvPopular:action.payload}
        case "GET_TV_COMING_SOON":
            return {...state,tvComingSoon:action.payload}
        case "GET_TV_TOP_RATED":
            return {...state,tvTopRated:action.payload}
        case "GET_TRAILER":
            return {
                ...state,
                trailer:action.payload
            }
        case "GET_AUTO_COMPLETE_SEARCH":
            return {
                ...state,
                autoCompleteSearchResults:action.payload
            }
        case "GET_SEARCH":
            return {
                ...state,
                searchResults:action.payload
            }
        case "GET_MOVIE":
            return {
                ...state,
                movie:action.payload
            }
        case "GET_TV":
            return {
                ...state,
                tv:action.payload
            }
        case "GET_SINGLE_TRAILER":
            return {
                ...state,
                singleTrailer:action.payload
            }
        default :
            return state
    }
}
export default moviesReducer