import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { StyledMain } from "./styles";

function ContentWrapper({ title, children }) {
    useEffect(() => {
        document.title = title || "";
    }, [title]);

    return <StyledMain>{children}</StyledMain>;
}

ContentWrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ContentWrapper;
