import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { getSearch } from "../store/actions/moviesAction";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../components/layout/Header";
import SingleMovieCard from "../components/renderMovies/SingleMovieCard";
import Spinner from "../components/parts/Spinner";
import GetMorePages from "../components/parts/GetMorePages";
const Search = ({
    searchResults,
    version = localStorage.getItem("version"),
    getSearch,
}) => {
    const [page, setPage] = useState(1);
    const getPage = currentPage => {
        setPage(currentPage);
    };
    useEffect(() => {
        const searchValue = localStorage.getItem("searchValue")
            ? localStorage.getItem("searchValue")
            : "";
        if (!searchResults) getSearch(searchValue, page);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        const searchValue = localStorage.getItem("searchValue")
            ? localStorage.getItem("searchValue")
            : "";
        if (searchResults && searchResults.page !== page)
            getSearch(searchValue, page);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);
    let results = searchResults && searchResults.results;
    if (!localStorage.getItem("searchValue")) return <Redirect to="/home" />;
    if (!searchResults) return <Spinner content="loading data..." />;
    return (
        <div className={`search bg-${version}`}>
            <Header headerClass="half">
                <h1 className="mt-5 font-weight-bold text-center text-white">
                    Search Results
                </h1>
            </Header>
            <Container className="py-5">
                <Row>
                    {!results.length ? (
                        <Col xs="12" className="text-center text-pColor">
                            no results found
                        </Col>
                    ) : (
                        results.map(item => {
                            return (
                                <Col
                                    key={item.id}
                                    className="mb-4 mx-auto"
                                    xs="6"
                                    md="4"
                                    lg="3">
                                    <SingleMovieCard
                                        movie={item}
                                        kind={
                                            item.media_type === "movie"
                                                ? "movies"
                                                : "tv"
                                        }
                                        version={version}
                                    />
                                </Col>
                            );
                        })
                    )}
                </Row>
                <GetMorePages
                    getPage={getPage}
                    startingPage={searchResults.page}
                    total={searchResults.total_pages}
                    version={version}
                />
            </Container>
        </div>
    );
};

const getState = state => {
    return {
        searchResults: state.movies.searchResults,
        version: state.version,
    };
};

export default connect(getState, {
    getSearch,
})(Search);
