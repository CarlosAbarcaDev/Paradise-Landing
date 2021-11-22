import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import styled from "styled-components";

const Container = styled.div`
  @media (max-width: 500px) {
    width: 500px;
  }
`

const Layout = (props) => {
  return (
    <>
      <Navbar />
      <Container >{props.children}</Container>
      <Footer />
    </>
  );
};

export default Layout;
