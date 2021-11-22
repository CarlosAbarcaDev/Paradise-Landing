import React from 'react';
import styled from "styled-components";

const OrangeDiv = styled.div`
  width: auto;
  height: 100px;
  background-color: #fe692d;
  @media (max-width: 500px) {
    width: 500px;
  }
`;

const Footer = () => {
    return ( <OrangeDiv /> );
}
 
export default Footer;