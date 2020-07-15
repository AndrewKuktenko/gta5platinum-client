import React, { useState, useEffect } from 'react';
import * as rpc from 'rage-rpc';
import { Button } from 'antd';
import { Container } from './styles';
// getUserCharacters
const CharacterSelector = () => {
  const [character, setCharacter] = useState();

  const getUserCharacters = (characters) => {
    // mp.gui.chat.push('getUserCharacters run');
    setCharacter(characters);
  };

  useEffect(() => {
    rpc.register('getUserCharacters', getUserCharacters);
    return () => {
      rpc.unregister('getUserCharacters');
    };
  }, []);

  return (
    <Container>
      <Button>Click me</Button>
      <p>{character}</p>
    </Container>
  );
};
export default CharacterSelector;
