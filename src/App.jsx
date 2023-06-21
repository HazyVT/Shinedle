import { Button } from '@chakra-ui/button'
import Navigation from './Navigation'
import { Box, Container, Heading, Text } from '@chakra-ui/layout'
import { useRef, useState } from 'react'
import data from '../data.json'
import { Image } from '@chakra-ui/image'
import { Spinner } from '@chakra-ui/spinner'
import { GiCheckeredFlag } from 'react-icons/gi'
import { Icon } from '@chakra-ui/icon'

function App() {

  const [headHover, setHeadHover] = useState(false);
  const [pokeChosen, setPokeChosen] = useState(false);
  const [loading, setLoading] = useState(false)
  const pokeName = useRef()
  const pokeImage = useRef()
  //const p = new PokeAPI;

  function getPokemon() {
    // Choose a hunting method
    // If that method has a limited list, choose a pokemon from that list
    // Else choose a random pokemon

    // REWORK
    // choose a pokemon game
    // Choose a pokemon from that game
    // Show both
    // For now, scarlet violet is only option
    // More options to be added later

    // REREWORK
    // Randomly select a pokemon from the list
    // Give timer for dialy reset and lock the user from rerolling
    // Give counter and complete button
    // On complete button 
    setLoading(true)
    var pokemon_chosen = data.names[Math.floor(Math.random() * data.names.length)];
    pokeName.current.innerHTML = pokemon_chosen
    pokeImage.current.src = 'https://play.pokemonshowdown.com/sprites/gen5-shiny/' + pokemon_chosen.toLowerCase() + '.png'

    setPokeChosen(true)
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
          display={pokeChosen ? "none" : "inline-block"}
          >Start Hunt</Button>
      </Box>
      <Box display={loading ? "flex" : "none"} justifyContent={'center'} padding={4}>
        <Spinner thickness='4px' speed='0.65s' size='xl' emptyColor='gray.200' color='green'/>
      </Box>
      <Box display={loading ? "none" : "flex"} flexDir='column' justifyContent={'center'} alignItems={'center'}>
        <Image ref={pokeImage} marginBottom={-2} onLoad={() => setLoading(false)} w={36}/>
        <Text ref={pokeName} fontSize='24'></Text>
        <Button display={pokeChosen ? "block" : "none"} colorScheme='green' margin={2}><Icon as={GiCheckeredFlag} w={4} h={4}/></Button>
      </Box>
    </>
  )
}

export default App
