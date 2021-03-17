import {Container,Row,Col} from "react-bootstrap"
import {headerImg,logo} from "../../imgs/imgs"
import {IoIosArrowRoundUp} from "react-icons/io"

const Footer = () => {
    return (
        <footer style={{backgroundImage:`url(${headerImg})`}}>
            <Container>
                <Row>
                    <Col className="mb-4" xs="12" lg="3" >
                        <div className="titl mb-5">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="links">
                            <ul>
                                <li className="mb-2"><a href="/#">5th Avenue st, manhattan <br /> New York, NY 10001</a></li>
                                <li className="mb-2"><a href="/#"><small>call us:</small> <big>+201121196781</big> </a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col className="mb-4" xs="12" sm="6" lg="2">
                        <div className="title mb-3">
                            <h4>Resources</h4>
                        </div>
                        <div className="links">
                            <ul className="text-capitalize">
                                <li className="mb-2"><a href="/#">about</a></li>
                                <li className="mb-2"><a href="/#">Blockbuster </a></li>
                                <li className="mb-2"><a href="/#">Contact Us</a></li>
                                <li className="mb-2"><a href="/#">Forums </a></li>
                                <li className="mb-2"><a href="/#">Blog</a></li>
                                <li className="mb-2"><a href="/#">Help Center </a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col className="mb-4" xs="12" sm="6" lg="2">
                        <div className="title mb-3">
                            <h4>Legal</h4>
                        </div>
                        <div className="links">
                            <ul className="text-capitalize">
                                <li className="mb-2"><a href="/#">Terms of Use</a></li>
                                <li className="mb-2"><a href="/#">Privacy Policy </a></li>
                                <li className="mb-2"><a href="/#">Security</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col className="mb-4" xs="12" sm="6" lg="2">
                        <div className="title mb-3">
                            <h4>Account</h4>
                        </div>
                        <div className="links">
                            <ul className="text-capitalize">
                                <li className="mb-2"><a href="/#">My Account</a></li>
                                <li className="mb-2"><a href="/#">Watchlist </a></li>
                                <li className="mb-2"><a href="/#">Collections</a></li>
                                <li className="mb-2"><a href="/#">User Guide</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col className="mb-4" xs="12" sm="6" lg="3">
                        <div className="title mb-3">
                            <h4>Newsletter</h4>
                        </div>
                        <div className="links ">
                            <span className="text-pColor ">Subscribe to our newsletter system now
                            to get latest news from us.</span>
                            <input type="text" className="my-3" placeholder="Enter Your Email..." />
                            <a href="/#">Subscribe Now </a>
                        </div>
                    </Col>
                    
                </Row>
            </Container>
            <div className="footer text-center">
                
                <p>&copy; 2020 Blockbuster. All Rights Reserved. coded by <a className="text-pink" href="https://youseffswd.github.io/portfoliost/">Yousef</a> .</p>
                <button onClick={() => window.scrollTo(0,0)}>Back to Up <IoIosArrowRoundUp /> </button>
            </div>
        </footer>
    )
}


export default Footer