import React from "react";
import { Card, Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const CharacterCard = ({ characters }) => (
  <Card.Group>
    {characters.map(character => {
      return (
        <Card key={character.url}>
          <Card.Content header={character.name} />
          <Card.Content>{character.homeworld}</Card.Content>
          <Card.Content extra>
            <Icon name="user" />
          </Card.Content>
       
        </Card>
      );
    })}
  </Card.Group>
);

export default CharacterCard;
