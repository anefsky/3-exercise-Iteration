import React from "react";
import Avatar from "./avatar";
import avatarList from "../assets/avatarData";

export function Avatars() {
  return (
    <div className="avatar-set">
      {avatarList.map(avatar =>
        <Avatar key={avatar.src} src={avatar.src} alt={avatar.alt} />
      )}
    </div>
  );
}
