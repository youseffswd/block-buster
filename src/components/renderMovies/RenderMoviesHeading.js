import {useEffect,useState} from "react"
import {
    getPopular,
    getTvPopular,
    getComingSoon,
    getTopRated,
    getTvComingSoon,
    getTvTopRated 
} from "../../store/actions/moviesAction"
import {connect} from "react-redux"

const RenderMoviesHeading = (props) => {
    const {
        getMTType,
        kind,
        popular,
        tvPopular,
        comingSoon,
        topRated,
        tvComingSoon,
        tvTopRated,
        version = localStorage.getItem("version"),
        page
    } = props
    const [lis,setLis] = useState({
            moviesLinks : [
                {
                    id:0,
                    content:"#popular",
                    data:"popular",
                    func:"getPopular"
                    
                },
                {
                    id:1,
                    
                    content:"#coming soon",
                    data:"comingSoon",
                    func:"getComingSoon"
                },
                {
                    id:2,
                    content:"#top rated",
                    data:"topRated",
                    func:"getTopRated"
                }
            ],
            tvLinks : [
                {
                    id:0,
                    content:"#popular",
                    data:"tvPopular",
                    func:"getTvPopular"
                },
                {
                    id:1,
                    
                    content:"#coming soon",
                    data:"tvComingSoon",
                    func:"getTvComingSoon"
                },
                {
                    id:2,
                    content:"#top rated",
                    data:"tvTopRated",
                    func:"getTvTopRated"
                },
            ],
        activeLinkMovie:0,
        activeLinkTv:0
    })
    const [mTType,setMTType ] = useState({
        movies:popular,
        tv:tvPopular
    })
    let moviesActionRes = {popular,comingSoon,topRated}
    let tvActionRes = {tvPopular,tvComingSoon,tvTopRated}
    const setActive = (id,tvId,kind) => {
        if(kind === "movie"){
            if(lis.activeLinkMovie !== id){
                setLis({
                    ...lis,
                    activeLinkMovie:id
                })
                if(!moviesActionRes[lis.moviesLinks[id].data]) props[lis.moviesLinks[id].func](1)
                setMTType(m => {
                    return {
                        ...m,
                        movies:moviesActionRes[lis.moviesLinks[id].data]
                    }
                })
                getMTType({
                    ...mTType,
                    movies:moviesActionRes[lis.moviesLinks[id].data]
                })
            }
        }else{
            if(lis.activeLinkTv !== tvId){
                setLis({
                    ...lis,
                    activeLinkTv:tvId
                })
                if(!tvActionRes[lis.tvLinks[tvId].data]) props[lis.tvLinks[tvId].func](1)
                setMTType(m => {
                    return {
                        ...mTType,
                        tv:tvActionRes[lis.tvLinks[tvId].data]
                    }
                })
                getMTType({
                    ...mTType,
                    tv:tvActionRes[lis.tvLinks[tvId].data]
                })
            }
        }
    }
    useEffect(() => {
        setMTType(m => {
            return {
                ...m,
                movies:moviesActionRes[lis.moviesLinks[lis.activeLinkMovie].data]
            }
        })
        getMTType({
            ...mTType,
            movies:moviesActionRes[lis.moviesLinks[lis.activeLinkMovie].data]
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[moviesActionRes[lis.moviesLinks[lis.activeLinkMovie].data]])
    useEffect(() => {
        setMTType({
            ...mTType,
            tv:tvActionRes[lis.tvLinks[lis.activeLinkTv].data]
        })
        getMTType({
            ...mTType,
            tv:tvActionRes[lis.tvLinks[lis.activeLinkTv].data]
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[tvActionRes[lis.tvLinks[lis.activeLinkTv].data]])
    useEffect(() => {
        if(kind === "movies") props[lis.moviesLinks[lis.activeLinkMovie].func](page)
        else props[lis.tvLinks[lis.activeLinkTv].func](page)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[page])
    return (
        <>
        <ul className={`type ${version} mb-5 text-capitalize`}>
            {kind === "movies" ? (
                <>
                    {lis.moviesLinks.map((ele,ind) => {
                        return <li key={ind} className={`${ele.id === lis.activeLinkMovie ? "active" : ""} d-md-inline-block text-pColor`} onClick={() => setActive(ele.id,lis.activeLinkTv,"movie")} >{ele.content} </li>
                    })}
                </>
            ) : (
                <>
                    {lis.tvLinks.map((ele,ind) => {
                        return <li key={ind} className={`${ele.id === lis.activeLinkTv ? "active" : ""} d-md-inline-block text-pColor`} onClick={() => setActive(lis.activeLinkMovie,ele.id,"tv")} >{ele.content} </li>
                    })}
                </> 
            )}
        </ul>
        </>
    )
}
const getState = (state) => {
    return {
        version:state.version,
        popular:state.movies.popular,
        comingSoon:state.movies.comingSoon,
        topRated:state.movies.topRated,
        tvPopular:state.movies.tvPopular,
        tvComingSoon:state.movies.tvComingSoon,
        tvTopRated:state.movies.tvTopRated
    }
}

export default connect(getState,{
    getPopular,
    getComingSoon,
    getTopRated,
    getTvPopular,
    getTvComingSoon,
    getTvTopRated
})(RenderMoviesHeading)