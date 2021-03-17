import Header from "../components/layout/Header";
import { Link } from "react-router-dom";

const SignIn = props => {
    return (
        <div className="signin">
            <Header searchClass="d-none" headerClass="full">
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input
                            required
                            type="email"
                            className="form-control"
                            id="email"
                            aria-describedby="emailHelp"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            required
                            type="password"
                            className="form-control"
                            id="password"
                        />
                    </div>

                    <button type="submit" className="btn btn-pink">
                        Submit
                    </button>
                    <small
                        id="emailHelp"
                        className=" mt-3 form-text text-muted">
                        You Don't Have an Account{" "}
                        <Link to="/block-buster/signup">Sign Up</Link>{" "}
                    </small>
                    <div
                        className={`my-3 alert alert-danger ${
                            props.auth ? "" : "noDanger"
                        }`}
                        role="alert"></div>
                </form>
            </Header>
        </div>
    );
};

export default SignIn;
