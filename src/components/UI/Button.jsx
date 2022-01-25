import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  font-size: 18px;
  min-height: 42px;
  padding: 10px 20px;
  transition: .4s;
  text-transform: uppercase;
  color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 6px;
  outline: none;
  background: #515cc6;

  &:hover {
    color: #515cc6;
    border: 1px solid #515cc6;
    background: #ffffff;
  }

  &:disabled {
    pointer-events: none;
    background: #c0c0c0;
  }
`;

function Button({
  children, type, onClick, disabled,
}) {
  return (
    <StyledButton type={type} onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  type: 'button',
  onClick: null,
  disabled: false,
};

export default Button;
