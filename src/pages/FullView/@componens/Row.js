import React from "react";
import PropTypes from "prop-types";
import Article from "./Article";

function Row({ rowIndex, data: { columns } }) {
    function renderArticles(articles) {
        return articles.map((item, index) => (
            <Article key={item.url} data={item} itemIndex={[rowIndex, index]} />
        ));
    }

    return <div className="row">{columns && renderArticles(columns)}</div>;
}

Row.propTypes = {
    data: PropTypes.shape({
        columns: PropTypes.array.isRequired,
    }).isRequired,
};
Row.defaultProps = {};

export default Row;
