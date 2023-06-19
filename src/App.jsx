import { Button } from '@chakra-ui/button'
import Navigation from './Navigation'
import { Box, Heading, Text } from '@chakra-ui/layout'
import { useState } from 'react'
import data from '../data.json'

function App() {

  const [headHover, setHeadHover] = useState(false);

  function getPokemon() {
    // Choose a hunting method
    // If that method has a limited list, choose a pokemon from that list
    // Else choose a random pokemon
    var encounter_opt = data.encounter_options;
    var chosen_opt = encounter_opt[Math.floor(Math.random()*encounter_opt.length)];
    switch(chosen_opt) {
      case 'PokeRadar':
        console.log("Radar has been chosen")
        break;
      case 'Random Encounters':
        console.log("Random Encounter has been chosen")
        break;
    }
  }

  return (
    <>
      <Navigation />
      <Box textAlign={'center'}>
        <Heading size='3xl'
          onMouseEnter={() => setHeadHover(true)}
          onMouseLeave={() => setHeadHover(false)}
          color={headHover ? 'green' : 'black'}
          display={'inline-block'}
        >Shinedle</Heading>
        <Text>Shiny Hunt Pokemon Daily</Text>
        <Button 
          margin={8} 
          colorScheme='green'
          onClick={() => getPokemon()}
          >Start Hunt</Button>
      </Box>
    </>
  )
}

export default App
