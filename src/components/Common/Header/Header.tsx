import { NavLink, useNavigate } from "react-router-dom";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import styles from "./style.module.css";
import HeaderLeft from "./HeaderLeft/HeaderLeft";

import useHeader from "@hooks/useHeader";
import { useAppDispatch } from "@store/hooks";
import { useEffect } from "react";
import { actGetLikeProduct, cleanUpProductsId } from "@store/wishlist/wishlistSlice";


const { header } = styles;

function Header() {
  const {accessToken, user, handelLogout} = useHeader();

  const navigate = useNavigate();


  const dispatch = useAppDispatch();


  useEffect(() => {
    if(accessToken) {
      dispatch(actGetLikeProduct("productsId"))
    }else {
      dispatch(cleanUpProductsId());
    }
  },[dispatch, accessToken])

  return (
    <Navbar expand="lg" className={header}>
      <Container>
        <Navbar.Brand className="flex-fill" href="#home">
          ShopiFast
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="categories">
              Categories
            </Nav.Link>
          </Nav>
          <Nav>
            <HeaderLeft />
            {!accessToken ? (
              <Button
                style={{ width: "80px" }}
                variant="outline-primary"
                size="sm"
                onClick={() => navigate("login")}>
                Login
              </Button>
            ) : (
              <NavDropdown title={user?.firstName} id="basic-nav-dropdown">
                <NavDropdown.Item as={NavLink} to="profile">profile</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="profile/orders">
                  Orders
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/"  onClick={handelLogout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
