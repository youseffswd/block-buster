import { useEffect } from "react";
import {
    getNowPlaying,
    getPopular,
    getTvPopular,
} from "../store/actions/moviesAction";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import RenderSlider from "../components/renderMovies/RenderSlider";
import { IoIosArrowForward } from "react-icons/io";
import RenderMovies from "../components/renderMovies/RenderMovies";

const Home = props => {
    const { nowPlaying, version, popular, trailer } = props;
    useEffect(() => {
        props.getNowPlaying(1);
        props.getPopular(1);
        props.getTvPopular(1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // if(!uid) return <Redirect to="/" />
    let currentTrailer =
        trailer && trailer.results.find(result => result.type === "Trailer");
    return (
        <div className="home">
            <Header headerClass="full">
                <Container className="pt-5">
                    <div className="slider pt-5">
                        <RenderSlider
                            kind="movies"
                            movies={nowPlaying}
                            loop={true}
                            trailer={false}
                        />
                    </div>
                </Container>
            </Header>
            <div className={`movieAtv section-padding bg-${version}`}>
                <Container>
                    <div
                        className={`title mb-3 d-flex align-items-center ${version}`}>
                        <h3 className="m-0 text-uppercase">in theater</h3>
                        <Link
                            to="/block-buster/watch/movies"
                            className="text-uppercase ml-auto font-weight-bold text-pColor">
                            view all{" "}
                            <span>
                                <IoIosArrowForward />{" "}
                            </span>{" "}
                        </Link>
                    </div>
                    <RenderMovies kind="movies" />
                    <div
                        className={`title mb-3 d-flex align-items-center ${version}`}>
                        <h3 className="m-0 text-uppercase">in theater</h3>
                        <Link
                            to="/block-buster/watch/tv"
                            className="text-uppercase ml-auto font-weight-bold text-pColor">
                            view all{" "}
                            <span>
                                <IoIosArrowForward />{" "}
                            </span>{" "}
                        </Link>
                    </div>
                    <RenderMovies kind="tv" />
                </Container>
            </div>
            <div className={`trailers bg-${version}-light section-padding`}>
                <Container>
                    <div
                        className={`title mb-3 d-flex align-items-center ${version}`}>
                        <h3 className="m-0 text-uppercase">
                            choose trailer to watch
                        </h3>
                        <Link
                            to="/block-buster/watch/movies"
                            className="text-uppercase ml-auto font-weight-bold text-pColor">
                            view all{" "}
                            <span>
                                <IoIosArrowForward />{" "}
                            </span>{" "}
                        </Link>
                    </div>
                    <Row>
                        <Col className="trailer" xs="12">
                            {!currentTrailer ? (
                                <div></div>
                            ) : (
                                <iframe
                                    title="trailer"
                                    height="450"
                                    src={`https://www.youtube.com/embed/${currentTrailer.key}`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                            )}
                        </Col>
                        <Col xs="12">
                            <div className={`options ${version}`}>
                                <RenderSlider
                                    movies={popular}
                                    loop={false}
                                    trailer={true}
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

const getState = state => {
    return {
        nowPlaying: state.movies.nowPlaying,
        version: state.version,
        popular: state.movies.popular,
        tvPopular: state.movies.tvPopular,
        trailer: state.movies.trailer,
    };
};

export default connect(getState, {
    getNowPlaying,
    getPopular,
    getTvPopular,
})(Home);
