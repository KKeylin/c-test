import React from "react";
import PropTypes from "prop-types";
import { StyledImg, StyledNoNews, StyledError } from "./styles";
import Row from "./@componens/Row";
import loadingIcon from "assets/images/preloader.gif";

function FullView({ data: { loading, loaded, data, error } }) {
    function renderRows(data) {
        return data.map((item, index) => (
            <Row
                key={item.columns[0] && item.columns[0].url} //I know what it is not the best solution, but I don't have any uniq ID
                data={item}
                rowIndex={index}
            />
        ));
    }

    return (
        <div className="container">
            {loading && !data.length && (
                <StyledImg src={loadingIcon} alt="loadingIcon" />
            )}
            {error && <StyledError>{error && error.message}</StyledError>}
            {!data.length && !loading && loaded && (
                <StyledNoNews>Sorry, but no news:(</StyledNoNews>
            )}
            {data.length > 0 && renderRows(data)}
        </div>
    );
}

FullView.propTypes = {
    data: PropTypes.shape({
        loading: PropTypes.bool,
        loaded: PropTypes.bool,
        data: PropTypes.array,
        error: PropTypes.string,
    }).isRequired,
};
FullView.defaultProps = {};

export default FullView;
