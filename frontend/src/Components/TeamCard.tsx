import React from "react";
import "./TeamCard.css";
import { DefaultEffects } from "@fluentui/react";
import {
  IPersonaProps,
  IPersonaSharedProps,
  Persona,
  PersonaSize,
  PersonaPresence,
} from "@fluentui/react/lib/Persona";


const examplePersona: IPersonaSharedProps = {
  imageInitials: "TR",
  text: "Ted Randall",
  secondaryText: "Project Manager",
  optionalText: "Available at 4:00pm",
};

const TeamCard: React.FC = () => {
  return (
    <div className="team-card" style={{ boxShadow: DefaultEffects.elevation4 }}>
      <Persona {...examplePersona} 
      size={PersonaSize.size100}
      presence={PersonaPresence.online}
      imageAlt="Team Member"
      />
      <p>Member</p>
    </div>
  );
};


  

export default TeamCard;
