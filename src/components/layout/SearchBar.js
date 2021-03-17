import { useState, useEffect, useRef } from "react";
import { IoMdSearch } from "react-icons/io";
import { useHistory } from "react-router-dom";
import {
    getSearch,
    getAutoCompleteSearch,
} from "../../store/actions/moviesAction";
import { handleInput } from "../../store/actions/handleInputAction";
import { connect } from "react-redux";
import SearchResult from "../parts/SearchResult";
const SearchBar = ({
    className,
    getSearch,
    value,
    handleInput,
    autoCompleteSearchResults,
    getAutoCompleteSearch,
}) => {
    const [focussed, setFocus] = useState(false);
    const [results, setResults] = useState(null);
    const input = useRef(null);
    const history = useHistory();
    const handleChange = e => {
        handleInput(e.target.value);
        localStorage.setItem("searchValue", e.target.value);
        clearTimeout();
        setTimeout(() => {
            getAutoCompleteSearch(e.target.value, 1);
        }, 500);
    };
    const handleSubmit = e => {
        e.preventDefault();
        getSearch(value, 1);
        input.current.blur();
        history.push("/search");
    };
    useEffect(() => {
        if (focussed)
            setResults(
                autoCompleteSearchResults &&
                    autoCompleteSearchResults.results.slice(0, 5),
            );
        return () => {
            if (focussed)
                setResults(
                    autoCompleteSearchResults &&
                        autoCompleteSearchResults.results.slice(0, 5),
                );
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [autoCompleteSearchResults]);
    return (
        <>
            <form
                className="SearchBarForm"
                autoComplete={"off"}
                onSubmit={handleSubmit}>
                <div
                    className={`${className} rela input-group search-bar mt-3`}>
                    <div className="input-group-prepend"></div>
                    <input
                        ref={input}
                        onFocus={() => {
                            setResults(
                                autoCompleteSearchResults &&
                                    autoCompleteSearchResults.results.slice(
                                        0,
                                        5,
                                    ),
                            );
                            setFocus(true);
                        }}
                        onBlur={() => {
                            setTimeout(() => {
                                setResults(null);
                                setFocus(false);
                            }, 300);
                        }}
                        type="text"
                        value={value}
                        onChange={handleChange}
                        required
                        className="form-control search bg-nav"
                        id="inlineFormInputGroupUsername"
                        placeholder="Search..."
                    />
                    <button type="submit">
                        <IoMdSearch />{" "}
                    </button>
                </div>
            </form>

            <SearchResult focussed={focussed} results={results} />
        </>
    );
};
const getState = state => {
    return {
        autoCompleteSearchResults: state.movies.autoCompleteSearchResults,
        value: state.input,
    };
};

export default connect(getState, {
    getSearch,
    getAutoCompleteSearch,
    handleInput,
})(SearchBar);
