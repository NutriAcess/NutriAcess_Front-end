

import React from 'react';
import styled from 'styled-components';

interface HorizontalBarProps {
  width: string;
  height: string;
  color: string;
}

const Bar = styled.div<HorizontalBarProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.color};
  margin-top: 5px;
`;

const HorizontalBar: React.FC<HorizontalBarProps> = ({ width, height, color }) => {
  return <Bar width={width} height={height} color={color} />;
};

export default HorizontalBar;
