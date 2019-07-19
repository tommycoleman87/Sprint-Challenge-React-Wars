import React from "react";
import { Card, Icon } from "semantic-ui-react";
import { H4 } from './styles';

const CharacterCard = ({ characters }) => (
  <Card.Group style={{justifyContent: 'space-between'}}>
    {characters.map(character => {
      return (
        <Card key={character.url}>
          <Card.Content header={character.name} />
          <Card.Content>
            <H4>Birth year:</H4> {character.birth_year}
            <H4>Eye color:</H4> {character.eye_color}
            <H4>Hair color:</H4> {character.hair_color}
            <H4>Height:</H4> {character.height}
            <H4>Mass:</H4> {character.mass}
            <H4>Skin color:</H4> {character.skin_color}
          </Card.Content>
          <Card.Content extra>
            <Icon name="user" />
            {character.gender}
          </Card.Content>
        </Card>
      );
    })}
  </Card.Group>
);

export default CharacterCard;
