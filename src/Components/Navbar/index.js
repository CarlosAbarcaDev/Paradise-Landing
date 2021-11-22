import React from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react/cjs/react.development";
const OrangeDiv = styled.div`
  width: auto;
  height: 7px;
  background-color: #fe692d;
  @media (max-width: 500px) {
    width: 500px;
  }
`;
const MainBar = styled.div`
  max-width: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (max-width: 500px) {
    width: 500px;
  }
`;
const ItemsBar = styled.div`
  max-width: 1300px;
  width: 90%;
  padding: 6px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 500px) {
    width: 500px;
  }
`;
const LogoTitle = styled.h1`
  color: #747474;
  font-weight: 600;
  font-size: 4rem;
`;

const MenuItems = styled.div`
  max-width: 1000px;
  display: flex;
  align-items: end;
  @media (max-width: 500px) {
    display: none;
  }
`;
const ResponsiveMenuItems = styled.div`
  display: none;
  @media (max-width: 500px) {
    margin: 20px;
    display: flex;
  }
`;

const NavTitle = styled.h2`
  color: #747474;
  margin: auto 10px;
  font-weight: 400;
  font-size: 1rem;
  :hover {
    color: black;
    cursor: pointer;
  }
`;

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <OrangeDiv />
      <MainBar>
        <ItemsBar>
          <LogoTitle>LOGO</LogoTitle>
          <MenuItems>
            <NavTitle>HOME</NavTitle>
            <NavTitle>CRUISE CORNER</NavTitle>
            <NavTitle>AIRPORT TRANSFERS</NavTitle>
            <NavTitle>DISCOUNT CARD</NavTitle>
            <NavTitle>MORE TOURS</NavTitle>
            <NavTitle>RESOURCES</NavTitle>
            <NavTitle>VIEW CART</NavTitle>
            <NavTitle>CONTACT US</NavTitle>
          </MenuItems>
          <ResponsiveMenuItems>
            <GiHamburgerMenu size={30} onClick={() => setShowMenu(!showMenu)} />
            {showMenu ? (
              <div
                onClick={() => {
                  setShowMenu(false);
                }}
                className="fixed flex z-50 flex-col bg-white rounded -ml-40 mt-10  item-center border border-gray-200"
              >
                <div className="cursor-pointer group border-t">
                  <p className="px-7 block p-2 border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100">
                    HOME
                  </p>
                </div>

                <div
                  onClick={() => {
                    setShowMenu(false);
                  }}
                  className="cursor-pointer group border-t"
                >
                  <p className="px-7 block p-2 border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100">
                  CRUISE CORNER
                  </p>
                </div>
                <div
                  onClick={() => {
                    setShowMenu(false);
                  }}
                  className="cursor-pointer group border-t"
                >
                  <p className="px-7 block p-2 border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100">
                  AIRPORT TRANSFERS
                  </p>
                </div>
                <div
                  onClick={() => {
                    setShowMenu(false);
                  }}
                  className="cursor-pointer group border-t"
                >
                  <p className="px-7 block p-2 border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100">
                  DISCOUNT CARD
                  </p>
                </div>
                <div
                  onClick={() => {
                    setShowMenu(false);
                  }}
                  className="cursor-pointer group border-t"
                >
                  <p className="px-7 block p-2 border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100">
                  MORE TOURS
                  </p>
                </div>
                <div
                  onClick={() => {
                    setShowMenu(false);
                  }}
                  className="cursor-pointer group border-t"
                >
                  <p className="px-7 block p-2 border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100">
                  RESOURCES
                  </p>
                </div>
                <div
                  onClick={() => {
                    setShowMenu(false);
                  }}
                  className="cursor-pointer group border-t"
                >
                  <p className="px-7 block p-2 border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100">
                  VIEW CART
                  </p>
                </div>
                <div
                  onClick={() => {
                    setShowMenu(false);
                  }}
                  className="cursor-pointer group border-t"
                >
                  <p className="px-7 block p-2 border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100">
                  CONTACT US
                  </p>
                </div>
              </div>
            ) : null}
          </ResponsiveMenuItems>
        </ItemsBar>
      </MainBar>
    </>
  );
};

export default Navbar;
