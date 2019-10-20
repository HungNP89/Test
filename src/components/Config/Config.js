import React from 'react';
import { bool, func } from 'prop-types';
import { StyledConfig } from './Config.styled';

const Config = ({ open, setOpen, ...props }) => {
  
  const isExpanded = open ? true : false;
  
  return (
    <StyledConfig aria-label="Close" aria-expanded={isExpanded} open={open}  onClick={() => setOpen(!open)} {...props}>
      <span/>
      <span/>
      <span/>
    </StyledConfig>
  )
}

Config.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Config;