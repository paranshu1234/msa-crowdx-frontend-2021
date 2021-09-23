import React from "react";
import { DefaultEffects } from "@fluentui/react";
import { DefaultButton, PrimaryButton } from "@fluentui/react/lib/Button";
import { Separator } from "@fluentui/react/lib/Separator";
import { Icon } from "@fluentui/react/lib/Icon";
import "./PostCard.css";

const PostCard: React.FC = () => {
  return (
    <div className="post-card" style={{ boxShadow: DefaultEffects.elevation8 }}>
      <div className="post-card-img-wrapper">
        <div className="unlock-content-wrapper">
          <Icon iconName="LockSolid" className="unlock-content-icn" />
          <h3>Unlock this post by becoming a supporter</h3>
          <DefaultButton text="Join now" allowDisabledFocus />
        </div>
        <img
          src="https://image.mux.com/HZ43dz01OQEzQuKC3qjfvYuKhjprX3cH02PYZeWY4dKGs/thumbnail.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik5CY3o3Sk5RcUNmdDdWcmo5MWhra2lEY3Vyc2xtRGNmSU1oSFUzallZMDI0In0.eyJzdWIiOiJIWjQzZHowMU9RRXpRdUtDM3FqZnZZdUtoanByWDNjSDAyUFlaZVdZNGRLR3MiLCJleHAiOjE2MzQ5OTQ0MDcsImF1ZCI6InQiLCJ0aW1lIjoxNzAuMjA4fQ.SU8w3FjAx7AFwwrQIV4oW6B2PyZ3-EpRczV6Q1WlOLdlFI2-cuwkZp1H3xk7vYEk0nXKGcSbUHXkiP3LpgGdnqPv9Jk-2MLc-uxO_1wnLRwrs8bCIpi4gD2ceV3so5Xuv5g_S7DMs7HUY8U8ZUbJg9tTXT-zX5uEmH0icXIrgadXSkwfyQ7sYkevLfwUBNkYylUxtIdDN7k-9OQTKoU_y1PO_Eny6nnSVcPQ7zpN2Lp6BfLnrr7xGdaE5wntvAoGg80gYXi-44EOdYszv7Zczu3hrWaERoeWvR0no5PY3LwQjEGt6JahjjpQdQqyE6Ml5cVGqiSTpxRB41POjWp7oA"
          alt="post"
        />
      </div>
      <div className="post-card-content-top-wrapper">
        <div className="time-stamp-wrapper">
          <small>21 SEPT 2021 AT 09:36</small>
        </div>
        <div className="locked-svg-wrapper">
          <Icon iconName="Lock" className="locked-svg-icn" />
          <small>locked</small>
        </div>
      </div>
      <div className="post-card-text">
        <h2>Grown Men In Austin Powers Themed Apparel Rap Eminem Lyrics</h2>
      </div>
      <div className="post-card-content-bottom-wrapper">
        <Separator />
        <small>20 Comments</small>
        <small>141 Likes</small>
      </div>
    </div>
  );
};

export default PostCard;
