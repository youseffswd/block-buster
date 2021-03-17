import { headerImg } from "../../imgs/imgs";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import { Container } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
const Header = props => {
    const {
        headerClass,
        children,

        searchClass = "",
    } = props;
    const { ref, inView } = useInView({});

    const completeShared = (
        <>
            <NavBar navClass={`${inView ? "" : "fixed"}`} />
            <Container className={searchClass}>
                <SearchBar />
            </Container>
        </>
    );
    return (
        <header
            ref={ref}
            className={`${headerClass} `}
            style={{ backgroundImage: `url(${headerImg})` }}>
            {completeShared}

            {children}
        </header>
    );
};

export default Header;
