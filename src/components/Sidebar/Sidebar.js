import React from 'react';
import {bool} from 'prop-types';
import { StyledSidebar} from './Sidebar.styled';

const Sidebar = ({open,...props}) => {
    const isHidden = open ? true : false;
    const tabIndex = isHidden ? 0 : -1;

    return (
        <StyledSidebar open={open} aria-hidden={!isHidden} {...props}>
          <a href="/" tabIndex={tabIndex}>
            <span aria-hidden="true">&#x1f4cc;</span>Map
          </a>
          <a href="/" tabIndex={tabIndex}>
            <span aria-hidden="true"></span>Login
          </a>
          <a href="/" tabIndex={tabIndex}>
            <span aria-hidden="true">💸</span>Pricing
          </a>
          <a href="/" tabIndex={tabIndex}>
            <span aria-hidden="true">📩</span>Contact
          </a>
          <a href="/" tabIndex={tabIndex}>
            <span aria-hidden="true">📩</span>Setting
          </a>
          <a href="/" tabIndex={tabIndex}>
            <span aria-hidden="true">📩</span>About us
          </a>
        </StyledSidebar>
    )
}

Sidebar.propTypes = {
    open:bool.isRequired,
}

export default Sidebar;