import { IoIosStar } from "react-icons/io";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
    getSingleTrailer,
    getMovie,
    getTv,
} from "../../store/actions/moviesAction";
const SingleMovieCard = ({
    movie,
    version = localStorage.getItem("version"),
    kind,
    getSingleTrailer,
    getMovie,
    getTv,
}) => {
    const { title, poster_path, vote_average, id, name } = movie;
    const posterPath = "https://image.tmdb.org/t/p/w200";
    return (
        <Link
            onClick={() => {
                getSingleTrailer(null);
                getTv(null);
                getMovie(null);
            }}
            to={`/block-buster/watch/${kind}/${id}`}
            className="movieCard">
            <div className="img  mb-2 text-center">
                {poster_path ? (
                    <img
                        className="img-fluid"
                        src={`${posterPath}${poster_path}`}
                        alt="poster"
                    />
                ) : (
                    <div className="mx-auto">no poster available</div>
                )}
            </div>
            <div className={`${version} info  `}>
                <h4 className=" mb-2 ">{title || name} </h4>
                <div
                    className={` d-flex justify-content-center align-items-center mb-0 `}>
                    <span>
                        <IoIosStar />
                    </span>
                    <big>{vote_average}</big>
                    <small>/10</small>
                </div>
            </div>
        </Link>
    );
};

const getState = state => {
    return {
        version: state.version,
    };
};

export default connect(getState, {
    getSingleTrailer,
    getMovie,
    getTv,
})(SingleMovieCard);
