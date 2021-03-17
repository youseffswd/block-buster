import { useEffect, useState } from "react";
import { getMovie, getTv } from "../store/actions/moviesAction";
import { connect } from "react-redux";
import Spinner from "../components/parts/Spinner";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../components/layout/Header";
import { IoIosPlay, IoIosStar } from "react-icons/io";
import { FaTicketAlt } from "react-icons/fa";
import { getSingleTrailer } from "../store/actions/moviesAction";
const Movie = props => {
    const {
        movies,
        tv,
        getMovie,
        getTv,
        match,
        trailer,
        getSingleTrailer,
        version = localStorage.getItem("version"),
    } = props;
    const { type, id } = match.params;
    const [currentItem, setItem] = useState(null);

    useEffect(() => {
        if (type === "movies") {
            getMovie("movie/" + id);
            setItem(movies);
        } else {
            getTv("tv/" + id);
            setItem(tv);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);
    useEffect(() => {
        setItem(props[type]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props[type]]);
    let currentTrailer =
        trailer && trailer.results.find(result => result.type === "Trailer");
    if (currentItem) {
        const {
            poster_path,
            overview,
            title,
            name,
            vote_average,
            release_date,
            first_air_date,
            production_companies,
        } = currentItem;
        return (
            <div className={`singleMovieOrTv  bg-${version}`}>
                <Header headerClass="half">
                    <h2 className="mt-5 mb-3 text-center text-white font-weight-bold">
                        {title || name}
                        <small
                            style={{ fontSize: "18px" }}
                            className="ml-3 text-pColor">
                            {release_date || first_air_date}{" "}
                        </small>
                    </h2>
                    <div
                        className={` rate d-flex justify-content-center align-items-center mb-0 `}>
                        <span>
                            <IoIosStar />
                        </span>
                        <big>{vote_average}</big>
                        <small>/10</small>
                    </div>
                </Header>
                <Container className="py-5">
                    <Row className="py-5">
                        <Col xs="12">
                            {!currentTrailer ? (
                                <div></div>
                            ) : (
                                <iframe
                                    title="trailer"
                                    style={{
                                        width: "100%",
                                        marginBottom: "30px",
                                    }}
                                    height="450"
                                    src={`https://www.youtube.com/embed/${currentTrailer.key}`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                            )}
                        </Col>
                        <Col className="mb-5 mb-lg-0" xs="12" lg="4">
                            <div className="singleMovieCard px-3 ">
                                <div className="img text-center">
                                    <img
                                        className="img-fluid"
                                        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                                        alt="poster"
                                    />
                                </div>
                                <div className="content p-4 bg-dark">
                                    <button
                                        onClick={() =>
                                            getSingleTrailer(
                                                `/${
                                                    type === "movies"
                                                        ? "movie"
                                                        : "tv"
                                                }/${id}`,
                                            )
                                        }
                                        className="mb-3 py-2">
                                        <span>
                                            <IoIosPlay />{" "}
                                        </span>{" "}
                                        <span>Watch Trailer</span>
                                    </button>
                                    <button className=" py-2">
                                        <span>
                                            <FaTicketAlt />{" "}
                                        </span>{" "}
                                        <span>buy ticket</span>
                                    </button>
                                </div>
                            </div>
                        </Col>

                        <Col
                            xs="12"
                            lg="8"
                            className={`contentInfo ${version}`}>
                            <div className="overview mb-4">
                                <h4 className="text-white font-weight-bold title">
                                    Overview
                                </h4>
                                <p className="text-pColor">{overview} </p>
                            </div>
                            <div className="companies">
                                <h4 className="text-white font-weight-bold mb-4 title">
                                    Companies
                                </h4>
                                <Row>
                                    {production_companies &&
                                        production_companies.map(company => {
                                            return (
                                                <Col
                                                    className="d-flex align-items-center flex-row mb-3"
                                                    xs="12"
                                                    key={company.id}>
                                                    <div className="img mr-4">
                                                        <img
                                                            src={
                                                                !company.logo_path
                                                                    ? ""
                                                                    : "https://image.tmdb.org/t/p/w200" +
                                                                      company.logo_path
                                                            }
                                                            alt="logo"
                                                            className="img-fluid"
                                                        />
                                                    </div>
                                                    <h4 className="m-0 name">
                                                        {company.name} "
                                                        <span>
                                                            {
                                                                company.origin_country
                                                            }
                                                        </span>
                                                        "
                                                    </h4>
                                                </Col>
                                            );
                                        })}
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
    return <Spinner />;
};

const getState = state => {
    return {
        movies: state.movies.movie,
        tv: state.movies.tv,
        version: state.version,
        trailer: state.movies.singleTrailer,
    };
};

export default connect(getState, {
    getMovie,
    getTv,
    getSingleTrailer,
})(Movie);
