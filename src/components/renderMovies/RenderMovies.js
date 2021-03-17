import {useState} from "react"
import RenderMoviesHeading from "./RenderMoviesHeading"
import RenderSlider from "./RenderSlider"
import {Col,Row} from "react-bootstrap"
import {connect} from "react-redux"
import SingleMovieCard  from "./SingleMovieCard"
import GetMorePages from "../parts/GetMorePages"
const RenderMovies = (props) => {
    const {kind,popular,tvPopular,version = localStorage.getItem("version"),slider = true} = props
    const [mTType,setMTType] = useState({
        movies:popular,
        tv:tvPopular
    })
    const getMTType = (obj) => {
        setMTType(obj)
    }
    const [page,setPage] = useState(1)
    const getPage = (currentPage) => {
        setPage(currentPage)
    }
    return (
        <>
        <RenderMoviesHeading kind={kind} getMTType={getMTType} page={page} />
        {slider ? (
            <div className="slider mb-5">
                <RenderSlider kind={kind} movies={kind === "movies" ? mTType.movies : mTType.tv} loop={false} trailer={false} />
            </div>
        ): (
            <>
                
                    <Row >
                        {mTType[kind] && mTType[kind].results.map((item) => {
                            return (
                                <Col key={item.id} className="mb-4 mx-auto" xs="6" md="4" lg="3">
                                    <SingleMovieCard kind={kind} movie={item} version={version} />
                                </Col>
                            )
                        })}
                    </Row>
                    <GetMorePages getPage={getPage} type={kind} startingPage={mTType[kind] && mTType[kind].page} total={mTType[kind] && mTType[kind].total_pages} version={version} />
                
                
            </>
        )}
        </>
    )
}

const getState = state => {
    return {
        popular:state.movies.popular,
        tvPopular:state.movies.tvPopular,
        version:state.version
    }
}

export default connect(getState)(RenderMovies)