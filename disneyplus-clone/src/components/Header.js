import React, { useEffect } from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  selectUserName,
  selectUserPhoto,
  setSignOut,
  setUserLoginDetails,
} from "../features/user/userSlice";
import { AiOutlineMenu } from "react-icons/ai";

const Nav = styled.nav`
  background-color: #090b13;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  letter-spacing: 1.2px;
  z-index: 1;
  box-shadow: 0 1px 0px 0px rgb(0, 40, 50);
`;
const Logo = styled.a`
  width: 85px;
  padding: 0;
  margin-top: 4px;
  max-height: 70px;
  display: inline-block;
  min-width: 60px;
  img {
    display: block;
    width: 100%;
  }
`;
const NavMenu = styled.div`
  margin-left: 15px;
  padding: 0;
  display: flex;
  flex:1;
  align-items: center;
  flex-wrap: nowrap;
  position: relative;
  

  @media (max-width: 768px) {
    background: #111;
    opacity: 0.85;
    display: none;
    position: absolute;
    top: 65px;
    left: -20px;
    right: 0;
    padding: 20px;
  }

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    @media (max-width: 768px) {
      padding: 10px;
    }
    @media (min-width: 769px) and (max-width: 992px) {
      padding: 2px 2px;
    }

    img {
      min-width: 25px;
      height: 25px;
      width: 25px;
      margin-bottom: 5px;

      @media (min-width: 769px) and (max-width: 992px) {
        margin-bottom: 3px;
        width: 15px;
        height: 15px;
      }
    }
    span {
      color: rgb(249, 249, 249);
      margin-left: 2px;
      font-size: 15px;
      padding: 2px 0;
      position: relative;
      white-space: nowrap;
      text-transform: uppercase;

      @media (max-width: 768px) {
        margin-left: 10px;
      }
      @media (min-width: 769px) and (max-width: 992px) {
        font-size: 12px;
      }

      &:before {
        content: "";
        background-color: rgb(249, 249, 249);
        border-radius: 0 0 4px 4px;
        height: 2px;
        opacity: 0;
        bottom: -6px;
        position: absolute;
        right: 0px;
        left: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  text-transform: uppercase;
  border: 1px solid #f9f9f9;
  padding: 8px 12px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  transition: all 0.2s ease 0s;
  cursor:pointer;
  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
    text-decoration:none;
    
    
  }
`;

const UserImg = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    width: 80%;
    height: 80%;
  }
  @media (min-width: 769px) and (max-width: 992px) {
    width: 85%;
    height: 85%;
  }
`;

const DropDown = styled.div`
  background-color: #000000;
  position: absolute;
  right: 20px;
  top: 65px;
  padding: 10px;
  border: 1px solid #333;
  cursor: pointer;
  letter-spacing: 1.5px;
  box-shadow: 0px 0px 5px 0px rgb(150, 150, 150);
  opacity: 0;
`;

const SignOut = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  position:absolute;
  right:0;
  


  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }

  @media (max-width:768px){
    position:absolute;
    top:0;
    right:15px;
  }
`;

const Collapse = styled.div`
  background: #090b13;
  padding: 5px;
  display: none;
  border-radius: 5px;
  box-shadow: 1px 1px 2px 0px rgb(249, 249, 249),
    -1px -1px 2px 0px rgb(249, 249, 249);

  @media (max-width: 768px) {
    display: initial;
    position: absolute;
    right: 20px;
  }
`;



function Header() {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);

  const photo = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        history.push("/home");
      }
    });
  }, [userName]);

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  const handleSignIn = () => {
    if (!userName) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOut());
          history.push("/");
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };
  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="Disney+" />
      </Logo>
      {!userName ? (
        <Login onClick={handleSignIn}>Login</Login>
      ) : (
        <>
          <Collapse>
            <span data-toggle="collapse" data-target="#navbar">
              <AiOutlineMenu style={{ fontSize: "30px", color: "#fff" }} />
            </span>
          </Collapse>
            <NavMenu id="navbar" className="collapse">
              <a href="/home">
                <img src="/images/home-icon.svg" alt="" />
                <span>Home</span>
              </a>
              <a href="/search">
                <img src="/images/search-icon.svg" alt="" />
                <span>Search</span>
              </a>
              <a href="/watchlist">
                <img src="/images/watchlist-icon.svg" alt="" />
                <span>Watchlist</span>
              </a>
              <a href="/originals">
                <img src="/images/original-icon.svg" alt="" />
                <span>Originals</span>
              </a>
              <a href="/movies">
                <img src="/images/movie-icon.svg" alt="" />
                <span>Movies</span>
              </a>
              <a href="/series">
                <img src="/images/series-icon.svg" alt="" />
                <span>Web Series</span>
              </a>
              <SignOut>
              <UserImg src={photo} alt="userName" />
              <DropDown>
                <span onClick={handleSignIn}>Signout</span>
              </DropDown>
            </SignOut>
            </NavMenu>
            
          
         
        </>
      )}
    </Nav>
  );
}

export default Header;
