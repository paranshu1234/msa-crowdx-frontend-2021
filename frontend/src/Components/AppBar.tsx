import React from "react";
import { SearchBox } from "@fluentui/react/lib/SearchBox";
import logo from "../logo.svg";
import "./AppBar.css";
import { DefaultButton, PrimaryButton } from "@fluentui/react";
import { Icon } from "@fluentui/react/lib/Icon";
import { Link } from "react-router-dom";
import { useState } from "react";

import {
  IPersonaSharedProps,
  Persona,
  PersonaSize,
  PersonaPresence,
} from "@fluentui/react/lib/Persona";

import { useLocation } from "react-router-dom";
import MbNavLinks from "./MbNavLinks";

const navPersona: IPersonaSharedProps = {
  imageUrl:
    "https://lh3.googleusercontent.com/ogw/ADea4I4m4w-wrbRDy9TnlII-tgvmmTlRA64wqYHe_MklEQ=s128-c-mo",
  imageInitials: "PM",
};

const AppBar: React.FC = (props) => {
  const location = useLocation();

  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className="App-header">
      <div className="left-content">
        <Link to="/" className="logo-link">
          <img className="logo-image" src={logo} alt="Crowdx" />
        </Link>
        {location.pathname === `/dashboard` ? null : (
          <div className="navlink-wrapper">
            <p className="nav-item">Product</p>
            <p className="nav-item">For creators</p>
            <p className="nav-item">Pricing</p>
            <p className="nav-item">Resources</p>
            <p className="nav-item">Starter kits</p>
          </div>
        )}
      </div>
      {location.pathname === `/dashboard` ? (
        <div className="button-group-wrapper dashboard-btn-grp-wrapper">
          <div className="dashboard-btn-grp-wrapper">
            <SearchBox
              placeholder="Search a Creator"
              onSearch={(newValue) => console.log("value is " + newValue)}
              className="item-auth"
            />
            <Icon iconName="Message" className="button-group-icn item-auth" />
            <Persona
              {...navPersona}
              size={PersonaSize.size32}
              presence={PersonaPresence.none}
              hidePersonaDetails={true}
              imageAlt="Creator-card-img"
              className="item-auth"
            />
          </div>
          {open ? (
            <div
              className="ham-burger-menu-icn-wrapper"
              onClick={() => setOpen(!open)}
            >
              <Icon iconName="Cancel" className="ham-burger-menu-icn" />
            </div>
          ) : (
            <div
              className="ham-burger-menu-icn-wrapper"
              onClick={() => setOpen(!open)}
            >
              <Icon
                iconName="GlobalNavButton"
                className="ham-burger-menu-icn"
              />
            </div>
          )}

          {open && <MbNavLinks />}
        </div>
      ) : location.pathname === `/login` ||
        location.pathname === `/signup` ? null : (
        <div className="button-group-wrapper">
          <SearchBox
            placeholder="Search a Creator"
            onSearch={(newValue) => console.log("value is " + newValue)}
            className="head-login-search item"
          />
          <Link to="/login" className="item">
            <DefaultButton text="Login" className="head-login-link" />
          </Link>
          <Link to="/signup" className="item">
            <PrimaryButton text="Get Started" className="head-signup-link" />
          </Link>
          {open ? (
            <div
              className="ham-burger-menu-icn-wrapper"
              onClick={() => setOpen(!open)}
            >
              <Icon iconName="Cancel" className="ham-burger-menu-icn" />
            </div>
          ) : (
            <div
              className="ham-burger-menu-icn-wrapper"
              onClick={() => setOpen(!open)}
            >
              <Icon
                iconName="GlobalNavButton"
                className="ham-burger-menu-icn"
              />
            </div>
          )}

          {open && <MbNavLinks />}
        </div>
      )}
    </header>
  );
};

export default AppBar;
