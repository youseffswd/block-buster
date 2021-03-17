import { useState, useEffect } from "react";
import SingleMovieCard from "./SingleMovieCard";
import MovieCardLoading from "./MovieCardLoading";
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { getTrailer } from "../../store/actions/moviesAction";
const itemsInSLider = (arg1, arg2, arg3, arg4, arg5) => {
    if (window.innerWidth < 576) return arg1;
    else if (window.innerWidth < 768 && window.innerWidth >= 576) return arg2;
    else if (window.innerWidth < 992 && window.innerWidth >= 768) return arg3;
    else if (window.innerWidth < 1200 && window.innerWidth >= 992) return arg4;
    else return arg5;
};

const RenderSlider = props => {
    const { movies, loop, trailer, kind } = props;
    const [, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth,
    });
    window.addEventListener("resize", () => {
        setDimensions({
            height: window.innerHeight,
            width: window.innerWidth,
        });
    });
    const [activeTrailer, setActiveTrailer] = useState({
        activeMovie: null,
        trailer: trailer,
    });
    const bringTrailer = id => {
        if (!trailer || trailer.id !== id) {
            props.getTrailer(`/movie/${id}/videos`);
            setActiveTrailer({
                activeMovie: id,
                trailer: trailer,
            });
        }
    };
    useEffect(() => {
        setActiveTrailer(old => {
            return {
                ...old,
                trailer: trailer,
            };
        });
    }, [trailer]);

    if (!movies) {
        return (
            <Row>
                <Col xs="6" md="4" lg="3">
                    <MovieCardLoading />
                </Col>
                <Col xs="6" md="4" lg="3">
                    <MovieCardLoading />
                </Col>
                <Col className="d-none d-md-block" md="4" lg="3">
                    <MovieCardLoading />
                </Col>
                <Col className="d-none d-lg-block" lg="3">
                    <MovieCardLoading />
                </Col>
            </Row>
        );
    }
    return (
        <Swiper
            navigation
            spaceBetween={itemsInSLider(15, 20, 20, 20, 20)}
            slidesPerView={itemsInSLider(2, 2, 3, 4, 5)}
            loop={loop}
            centeredSlides={!loop}>
            {movies &&
                movies.results.map((movie, ind) => {
                    return (
                        <SwiperSlide key={ind}>
                            {!trailer ? (
                                <SingleMovieCard kind={kind} movie={movie} />
                            ) : (
                                <div
                                    id={movie.id}
                                    onClick={() => bringTrailer(movie.id)}
                                    className={`${
                                        movie.id === activeTrailer.activeMovie
                                            ? "active"
                                            : ""
                                    }  recommends text-center d-flex align-items-center flex-wrap`}>
                                    <div className="img w-100">
                                        <img
                                            src={`https://image.tmdb.org/t/p/w200/${movie.backdrop_path}`}
                                            alt="poster"
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="text-center w-100 mt-2">
                                        <h5 className="">{movie.title} </h5>
                                    </div>
                                </div>
                            )}
                        </SwiperSlide>
                    );
                })}
        </Swiper>
    );
};
export default connect(null, {
    getTrailer,
})(RenderSlider);
