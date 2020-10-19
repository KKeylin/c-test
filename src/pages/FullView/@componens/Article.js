import React from "react";
import { connect } from "react-redux";
import Title from "./Title";
import { updateTitle, deleteArticle } from "../../../store/actions";
import Image from "./Image";
import PropTypes from "prop-types";

function Article({
                     itemIndex,
                     onDeleteArticle,
                     data,
                     data: { imageUrl, title, width },
                     onUpdateTitle,
                 }) {
    return (
        <article className={`col-${width}`}>
            <Image
                imageUrl={imageUrl}
                alt={title}
                itemIndex={itemIndex}
                deleteArticle={onDeleteArticle}
            />
            <Title data={data} itemIndex={itemIndex} onUpdate={onUpdateTitle} />
        </article>
    );
}

Article.propTypes = {
    data: PropTypes.shape({
        imageUrl: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        width: PropTypes.number.isRequired,
    }),
    itemIndex: PropTypes.arrayOf(PropTypes.number).isRequired,
    onDeleteArticle: PropTypes.func.isRequired,
};
Article.defaultProps = {};

const mapDispatchToProps = (dispatch) => {
    return {
        onUpdateTitle: (index, value) => {
            dispatch(updateTitle(index, value));
        },
        onDeleteArticle: (index, value) => {
            dispatch(deleteArticle(index, value));
        },
    };
};

export default connect(null, mapDispatchToProps)(Article);
