import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
    getSingleTrailer,
    getTv,
    getMovie,
} from "../../store/actions/moviesAction";
const SearchResult = ({
    results,
    focussed,
    getSingleTrailer,
    getTv,
    getMovie,
}) => {
    return (
        <div className="results rela">
            <ul className="bg-nav text-capitalize">
                {results &&
                    results.map(result => {
                        const {
                            title,
                            name,
                            backdrop_path,
                            id,
                            media_type,
                        } = result;
                        const currentMedia =
                            media_type === "tv" ? "tv" : "movies";
                        return (
                            <li key={id}>
                                <Link
                                    onClick={() => {
                                        getMovie(null);
                                        getTv(null);
                                        getSingleTrailer(null);
                                    }}
                                    className="d-flex  p-2  flex-row align-items-center"
                                    to={`/block-buster/watch/${currentMedia}/${id}`}>
                                    <div className="img mr-4">
                                        <img
                                            className="img-fluid"
                                            src={
                                                !backdrop_path
                                                    ? ""
                                                    : `https://image.tmdb.org/t/p/w200${backdrop_path}`
                                            }
                                            alt="poster"
                                        />
                                    </div>
                                    <p className="m-0">{title || name} </p>
                                </Link>
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
};

export default connect(null, {
    getSingleTrailer,
    getTv,
    getMovie,
})(SearchResult);
