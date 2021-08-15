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
  secondaryText: "Team Member",
};

const personaWithInitials: IPersonaSharedProps = {
    ...examplePersona,
    text: "Paranshu Makwana",
    imageInitials: "PM",
  };
  


const TeamCard: React.FC = () => {
  return (
    <div className="team-card" style={{ boxShadow: DefaultEffects.elevation4 }}>
      <Persona {...personaWithInitials} 
      size={PersonaSize.size72}
      presence={PersonaPresence.online}
      imageAlt="Team Member"
      />
    </div>
  );
};


  

export default TeamCard;
