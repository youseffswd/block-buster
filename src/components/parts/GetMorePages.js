import { useState, useEffect } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const GetMorePages = ({
    version,
    startingPage,
    total,
    getPage,
    type = null,
}) => {
    const [page, setPage] = useState(startingPage);
    const handleClick = (direction, amount) => {
        clearTimeout();
        setTimeout(() => {
            if (direction === "increase") {
                if (page < total) {
                    setPage(page + amount);
                    getPage(page + amount);
                }
            } else {
                if (page > 1) {
                    setPage(page - 1);
                    getPage(page - 1);
                }
            }
        }, 500);
    };
    useEffect(() => {
        setPage(1);
        getPage(1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [type]);
    useEffect(() => {
        setPage(1);
        getPage(1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [total]);

    return (
        <div className={`${version} mt-4 mx-auto PagesButtons`}>
            <button
                className={`${page === 1 ? "disable" : ""}`}
                onClick={() => handleClick("descrease")}>
                <IoIosArrowBack />{" "}
            </button>
            <button className="active">{page} </button>
            <button
                className={`${page + 1 > total ? "disable" : ""}`}
                onClick={() => handleClick("increase", 1)}>
                {page + 1}{" "}
            </button>
            <button
                className={`${page + 2 > total ? "disable" : ""}`}
                onClick={() => handleClick("increase", 2)}>
                {page + 2}{" "}
            </button>
            <button
                className={`${page + 1 > total ? "disable" : ""}`}
                onClick={() => handleClick("increase", 1)}>
                <IoIosArrowForward />{" "}
            </button>
        </div>
    );
};
export default GetMorePages;
