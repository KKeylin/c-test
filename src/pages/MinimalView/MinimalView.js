import React from "react";
import PropTypes from "prop-types";
import { getFlatList } from "store/selectors/articles";
import { StyledLink } from "./styles";
import { StyledError, StyledImg, StyledNoNews } from "./styles";
import loadingIcon from "../../assets/images/preloader.gif";

function MinimalView({ data, data: { loading, loaded, error } }) {
    const flatData = getFlatList(data);
    function renderItems(arr) {
        return arr.map((item) => (
            <StyledLink href={item.url}>{item.title}</StyledLink>
        ));
    }

    return (
        <div className="container">
            {loading && !flatData.length && (
                <StyledImg src={loadingIcon} alt="loadingIcon" />
            )}
            {error && <StyledError>{error && error.message}</StyledError>}
            {!flatData.length && !loading && loaded && (
                <StyledNoNews>Sorry, but no news:(</StyledNoNews>
            )}
            {flatData.length > 0 && renderItems(flatData)}
        </div>
    );
}

MinimalView.propTypes = {
    data: PropTypes.shape({
        loading: PropTypes.bool,
        loaded: PropTypes.bool,
        data: PropTypes.array,
        error: PropTypes.string,
    }).isRequired,
};
MinimalView.defaultProps = {};

export default MinimalView;
