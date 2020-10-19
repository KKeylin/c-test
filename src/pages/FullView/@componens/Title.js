import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
    StyledTitle,
    StyledInput,
    StyledButton,
    StyledTitleWrapper,
} from "./styles";
import { fontSizer } from "../../../utils/articles.utility";

function Title({ data: { title, width }, onUpdate, itemIndex }) {
    const [edit, setEdit] = useState(false);
    const [editableTitle, setTitle] = useState("");

    useEffect(() => {
        setTitle(title);
    }, [title]);

    const handleSwitchEditMode = () => {
        edit && onUpdate(itemIndex, editableTitle);
        setEdit(!edit);
    };
    const onChangeInput = (e) => {
        setTitle(e.target.value);
    };

    return (
        <StyledTitleWrapper>
            <StyledTitle
                onClick={handleSwitchEditMode}
                edit={edit}
                fontSize={fontSizer(editableTitle.length, width)}
            >
                {editableTitle}
            </StyledTitle>
            <StyledInput
                value={editableTitle}
                edit={edit}
                onChange={onChangeInput}
                fontSize={fontSizer(editableTitle.length, width)}
            />
            <StyledButton
                onClick={handleSwitchEditMode}
                fontSize={fontSizer(editableTitle.length, width)}
            >
                {edit ? "Save" : "Edit"}
            </StyledButton>
        </StyledTitleWrapper>
    );
}

Title.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        width: PropTypes.number.isRequired,
    }),
    alt: PropTypes.string,
    itemIndex: PropTypes.arrayOf(PropTypes.number).isRequired,
    onUpdate: PropTypes.func.isRequired,
};
Title.defaultProps = {};

export default Title;
