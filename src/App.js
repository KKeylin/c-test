import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "./store/actions";
import Header from "./common/Header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ContentWrapper from "./common/ContentWrapper/ContentWrapper";
import FullView from "./pages/FullView/FullView";
import MinimalView from "./pages/MinimalView/MinimalView";
import * as routes from "constants/Routes";

function App({ onFetchData, articles }) {
    useEffect(() => {
        onFetchData();
    }, [onFetchData]);
    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <Route
                        path={routes.minimalView.path}
                        render={() => (
                            <ContentWrapper title={routes.minimalView.title}>
                                <MinimalView data={articles} />
                            </ContentWrapper>
                        )}
                    />
                    <Route
                        path={routes.fullView.path}
                        render={() => (
                            <ContentWrapper title={routes.fullView.title}>
                                <FullView data={articles} />
                            </ContentWrapper>
                        )}
                    />
                </Switch>
            </Router>
        </>
    );
}

const mapStateToProps = ({ articles }) => ({
    articles,
});

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchData: () => {
            dispatch(fetchData());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
