import { useEffect } from "react";
import Header from "../components/layout/Header";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import RenderMovies from "../components/renderMovies/RenderMovies";
import { getPopular, getTvPopular } from "../store/actions/moviesAction";
const Movies = props => {
    const {
        match,
        version = localStorage.getItem("version"),
        getPopular,
        getTvPopular,
    } = props;
    const { type } = match.params;

    useEffect(() => {
        if (type === "movies") getPopular(1);
        else getTvPopular(1);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [type]);

    return (
        <div className={`bg-${version}`}>
            <Header headerClass="half">
                <h1 className="mt-5 font-weight-bold text-center text-white text-capitalize">
                    {match.params.type}{" "}
                </h1>
            </Header>
            <Container className="py-5">
                <RenderMovies kind={type} slider={false} />
            </Container>
        </div>
    );
};

const getState = state => {
    return {
        version: state.version,
    };
};

export default connect(getState, {
    getPopular,
    getTvPopular,
})(Movies);
