import axios from "axios";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import Header from "../components/layout/Header";
const News = ({ version = localStorage.getItem("version") }) => {
    const [news, setNews] = useState(null);
    const getNews = async signal => {
        const res = await axios.get(
            "https://api.themoviedb.org/3/trending/all/week?api_key=af64c5c103f265313a6fa2368d35c51a",
            { signal },
        );
        const data = res.data;
        setNews(data);
    };
    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;
        getNews(signal);
        return function cleanUp() {
            abortController.abort();
        };
    }, []);

    return (
        <div className={`bg-${version} ${version} news`}>
            <Header headerClass="half">
                <h1 className="mt-5 font-weight-bold text-center text-white">
                    News
                </h1>
            </Header>
            <Container className="py-5">
                <Row>
                    {news &&
                        news.results.map((item, ind) => {
                            const {
                                backdrop_path,
                                title,
                                release_date,
                                overview,
                                name,
                            } = item;
                            return (
                                <Col
                                    className="mb-4 newsCard"
                                    key={ind}
                                    xs="12"
                                    md="6"
                                    lg="4">
                                    <div className="img mb-4">
                                        <img
                                            alt="poster"
                                            style={{ width: "100%" }}
                                            src={
                                                "https://image.tmdb.org/t/p/w500" +
                                                backdrop_path
                                            }
                                        />
                                    </div>
                                    <div className="heading">
                                        <h3 className="m-0">{title || name}</h3>
                                        <small className="d-block my-3">
                                            {release_date}{" "}
                                        </small>
                                        <p>{overview} </p>
                                    </div>
                                </Col>
                            );
                        })}
                </Row>
            </Container>
            news
        </div>
    );
};

const getState = state => {
    return {
        version: state.version,
    };
};

export default connect(getState)(News);
