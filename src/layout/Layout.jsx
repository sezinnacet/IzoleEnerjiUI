// Layout.js
import { Container, CssBaseline } from "@mui/material";
import React from "react";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" style={{ marginTop: "20px" }}>
        {children}
      </Container>
      <Footer />
    </>
  );
}

export default Layout;
