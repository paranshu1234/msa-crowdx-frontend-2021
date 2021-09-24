import React from "react";
import { Separator } from "@fluentui/react/lib/Separator";

import { useLocation } from "react-router-dom";
import "./MbNavLinks.css";

const MbNavLinks: React.FC = () => {
  const location = useLocation();

  return (
    <div className="mobile-nav-links-wrapper">
      {location.pathname === `/dashboard` ? (
        <ul>
          <Separator />
          <li>
            <p>Messages</p>
          </li>
          <Separator />
          <li>
            <p>Manage memberships</p>
          </li>
          <Separator />
          <li>
            <p>My profile</p>
          </li>
          <Separator />
          <li>
            <p>My profile settings</p>
          </li>
          <Separator />
          <li>
            <p>Explore creators</p>
          </li>
          <Separator />
          <li>
            <p>Help Centre & FAQ</p>
          </li>
          <Separator />
          <li>
            <p>Log out</p>
          </li>
          <Separator />
        </ul>
      ) : (
        <ul>
          <Separator />
          <li>
            <p>Product</p>
          </li>
          <Separator />
          <li>
            <p>For creators</p>
          </li>
          <Separator />
          <li>
            <p>Pricing</p>
          </li>
          <Separator />
          <li>
            <p>Resources</p>
          </li>
          <Separator />
          <li>
            <p>Starter-kits</p>
          </li>
          <Separator />
          <li>
            <p>Blog</p>
          </li>
          <Separator />
          <li>
            <p>Create on Crowdx</p>
          </li>
          <Separator />
          <li>
            <p>Log in</p>
          </li>
          <Separator />
          <li>
            <p>Sign up</p>
          </li>
          <Separator />
          <li>
            <p>Sign up</p>
          </li>
          <Separator />
        </ul>
      )}
    </div>
  );
};

export default MbNavLinks;
