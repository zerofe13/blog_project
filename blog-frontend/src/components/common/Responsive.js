import React from 'react';
import styled from 'styled-components';

const ResponsiveBlack = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  width: 1024px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Responsive = ({ children, ...rest }) => {
  //style,className,onclick, 등의 props를 사용하술있도록 ...rest를 사용하여 전달
  return <ResponsiveBlack {...rest}>{children}</ResponsiveBlack>;
};

export default Responsive;
