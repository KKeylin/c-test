import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import deleteGif from "assets/images/delete.gif";
import {
    StyledImg,
    StyledImgWrapper,
    StyledDeleteBtn,
    StyledDeleteBox,
} from "./styles";

function Image({ imageUrl, alt, deleteArticle, itemIndex }) {
    const [remove, setRemove] = useState(false);
    const [removeCounter, setRemoveCounter] = useState(10);
    const message = [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Will be delete after 1.",
        "Will be delete after 2..",
        "Will be delete after 3...",
        "Want remove it?",
    ];

    useEffect(() => {
        if (remove && removeCounter === 10) {
            setRemoveCounter(removeCounter - 1);
        }
        if (remove && removeCounter) {
            setTimeout(() => setRemoveCounter(removeCounter - 1), 1000);
        }
        if (!remove && removeCounter) setRemoveCounter(10);
        if (!removeCounter) deleteArticle(itemIndex);
    }, [remove, removeCounter, deleteArticle, itemIndex]);

    const deleteHandler = () => setRemove(!remove);

    return (
        <StyledImgWrapper remove={remove}>
            <StyledImg src={removeCounter > 6 ? imageUrl : deleteGif} alt={alt} />
            <StyledDeleteBox counter={removeCounter} removeCounter={removeCounter}>
                <div>{message[removeCounter]}</div>
                <StyledDeleteBtn onClick={deleteHandler}>
                    {remove ? "Cancel" : "Delete"}
                </StyledDeleteBtn>
            </StyledDeleteBox>
        </StyledImgWrapper>
    );
}

Image.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    alt: PropTypes.string,
    itemIndex: PropTypes.arrayOf(PropTypes.number).isRequired,
    deleteArticle: PropTypes.func.isRequired,
};
Image.defaultProps = {};

export default Image;
