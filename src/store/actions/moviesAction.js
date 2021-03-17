
import axios from "axios"

export const getAutoCompleteSearch = (q,page) => {
    return async (dispatch) => {
        const res = q.length === 0 ? null : await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=af64c5c103f265313a6fa2368d35c51a&query=${q}&page=${page}`)
        const data = res && res.data

        dispatch({type:"GET_AUTO_COMPLETE_SEARCH",payload:data})
    } 
}
export const getSearch = (q,page) => {
    return async (dispatch) => {
        const res = q.length === 0 ? null : await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=af64c5c103f265313a6fa2368d35c51a&query=${q}&page=${page}`)
        const data = res && res.data

        dispatch({type:"GET_SEARCH",payload:data})
    } 
}

export const getNowPlaying = (page) => {
    return async (dispatch) => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=af64c5c103f265313a6fa2368d35c51a&language=en-US&page=${page}`)
        const data =  res.data
        dispatch({type:"GET_NOW_PLAYING",payload:data})
    } 
}

export const getPopular = (page) => {
    return async (dispatch) => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=af64c5c103f265313a6fa2368d35c51a&language=en-US&page=${page}`)
        const data = res.data
        dispatch({type:"GET_POPULAR",payload:data})
    } 
}
export const getComingSoon = (page) => {
    return async (dispatch) => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=af64c5c103f265313a6fa2368d35c51a&language=en-US&page=${page}`)
        const data = res.data
        dispatch({type:"GET_COMING_SOON",payload:data})
    } 
}
export const getTopRated = (page) => {
    return async (dispatch) => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=af64c5c103f265313a6fa2368d35c51a&language=en-US&page=${page}`)
        const data = res.data
        dispatch({type:"GET_TOP_RATED",payload:data})
    } 
}

export const getTvPopular = page => {
    return async (dispatch) => {
        const res = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=af64c5c103f265313a6fa2368d35c51a&language=en-US&page=${page}`)
        const data = res.data

        dispatch({type:"GET_TV_POPULAR",payload:data})
    } 
}
export const getTvComingSoon = (page) => {
    return async (dispatch) => {
        const res = await axios.get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=af64c5c103f265313a6fa2368d35c51a&language=en-US&page=${page}`)
        const data = res.data
        dispatch({type:"GET_TV_COMING_SOON",payload:data})
    } 
}
export const getTvTopRated = (page) => {
    return async (dispatch) => {
        const res = await axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=af64c5c103f265313a6fa2368d35c51a&language=en-US&page=${page}`)
        const data = res.data
        dispatch({type:"GET_TV_TOP_RATED",payload:data})
    } 
}
export const getTrailer = (path) => {
    return async (dispatch) => {
        const res = await axios.get(`https://api.themoviedb.org/3${path}?api_key=af64c5c103f265313a6fa2368d35c51a&language=en-US`)
        const data = res.data

        dispatch({type:"GET_TRAILER",payload:data})
    } 
}
export const getMovie = (path) => {
    return async (dispatch) => {
        if(!path){
            dispatch({type:"GET_MOVIE",payload:path})
        }
        else{
            const res = await axios.get(`https://api.themoviedb.org/3/${path}?api_key=af64c5c103f265313a6fa2368d35c51a`)
            const data = res.data
            dispatch({type:"GET_MOVIE",payload:data})
        }
    } 
}
export const getTv = (path) => {
    return async (dispatch) => {
        if(!path){
            dispatch({type:"GET_TV",payload:path})
        }
        else{
            const res = await axios.get(`https://api.themoviedb.org/3/${path}?api_key=af64c5c103f265313a6fa2368d35c51a`)
            const data = res.data
            dispatch({type:"GET_TV",payload:data})
        }
    } 
}
export const getSingleTrailer = (path) => {
    return async (dispatch) => {
        if(!path){
            dispatch({type:"GET_SINGLE_TRAILER",payload:path})
        }
        else{
            const res = await axios.get(`https://api.themoviedb.org/3${path}/videos?api_key=af64c5c103f265313a6fa2368d35c51a&language=en-US`)
            const data = res.data

            dispatch({type:"GET_SINGLE_TRAILER",payload:data})
        }
    } 
}