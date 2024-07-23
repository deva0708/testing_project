import React from 'react';
import styled from 'styled-components';

const HoverDiv = styled.div`
  padding: 20px;
  background-color: lightblue;
  transition: background-color 0.3s;

  &:hover {
    background-color: deepskyblue;
  }
`;

const HoverText = styled.p`
  color: black;
  transition: color 0.3s;

  ${HoverDiv}:hover & {
    color: white;
  }
`;

const HoverComponent = () => {
  return (
    <HoverDiv>
      <HoverText>Hover over this text</HoverText>
    </HoverDiv>
  );
};

export default HoverComponent;