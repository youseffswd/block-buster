import { lazy, Suspense } from "react";
import Spinner from "./components/parts/Spinner";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
const Home = lazy(() => import("./pages/Home"));

const Movies = lazy(() => import("./pages/Movies"));
const Movie = lazy(() => import("./pages/Movie"));
const News = lazy(() => import("./pages/News"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const Search = lazy(() => import("./pages/Search"));
const SignUp = lazy(() => import("./pages/SignUp"));
const SignIn = lazy(() => import("./pages/SignIn"));

const App = () => {
    return (
        <>
            <Suspense fallback={<Spinner />}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/block-buster/" exact component={Home} />
                        <Route
                            path="/block-buster/watch/:type"
                            exact
                            component={Movies}
                        />
                        <Route
                            path="/block-buster/watch/:type/:id"
                            component={Movie}
                        />
                        <Route path="/block-buster/news" component={News} />
                        <Route path="/block-buster/search" component={Search} />
                        <Route path="/block-buster/signup" component={SignUp} />
                        <Route path="/block-buster/signin" component={SignIn} />
                        <Route component={PageNotFound} />
                    </Switch>
                    <Footer />
                </BrowserRouter>
            </Suspense>
        </>
    );
};

export default App;
