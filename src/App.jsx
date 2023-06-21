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
  const [game, setGame] = useState('')
  const [method, setMethod] = useState('')
  const pokeName = useRef()
  const pokeImage = useRef()
  //const p = new PokeAPI;

  function getPokemon() {
    // Choose a hunting method
    // If that method has a limited list, choose a pokemon from that list
    // Else choose a random pokemon
    setLoading(true)
    var chosen_method = data.methods[Math.floor(Math.random() * data.methods.length)];
    console.log(chosen_method)
    switch (chosen_method) {
      case "Horde Hunting X | Y":
        var pokemon_list = data.horde_hunting_x_y;
        var chosen_pokemon = pokemon_list[Math.floor(Math.random() * pokemon_list.length)];
        pokeName.current.innerHTML = chosen_pokemon;
        pokeImage.current.src = "https://play.pokemonshowdown.com/sprites/gen5-shiny/" + chosen_pokemon.toLowerCase() + '.png';
        setGame("Pokemon XY")
        setMethod('Horde Hunting')
        break;
      case "Horde Hunting OR | AS":
        var pokemon_list = data.horde_hunting_or_as;
        var chosen_pokemon = pokemon_list[Math.floor(Math.random() * pokemon_list.length)];
        pokeName.current.innerHTML = chosen_pokemon;
        pokeImage.current.src = "https://play.pokemonshowdown.com/sprites/gen5-shiny/" + chosen_pokemon.toLowerCase() + '.png';
        setGame("Pokemon ORAS")
        setMethod('Horde Hunting')
        break;
      case "Masuda Method":
        var pokemon_list = data.masuda_method;
        var chosen_pokemon = pokemon_list[Math.floor(Math.random() * pokemon_list.length)];
        pokeName.current.innerHTML = chosen_pokemon;
        pokeImage.current.src = "https://play.pokemonshowdown.com/sprites/gen5-shiny/" + chosen_pokemon.toLowerCase() + '.png';
        setGame("Any Game")
        setMethod('Masuda Method')
        break; 
      case "Chain Fishing X | Y":
        var pokemon_list = data.chain_fishing_x_y;
        var chosen_pokemon = pokemon_list[Math.floor(Math.random() * pokemon_list.length)];
        pokeName.current.innerHTML = chosen_pokemon;
        pokeImage.current.src = "https://play.pokemonshowdown.com/sprites/gen5-shiny/" + chosen_pokemon.toLowerCase() + '.png';
        setGame("Pokemon XY")
        setMethod('Chain Fishing')
        break;
      case "Chain Fishing OR | AS":
        var pokemon_list = data.chain_fishing_or_as;
        var chosen_pokemon = pokemon_list[Math.floor(Math.random() * pokemon_list.length)];
        pokeName.current.innerHTML = chosen_pokemon;
        pokeImage.current.src = "https://play.pokemonshowdown.com/sprites/gen5-shiny/" + chosen_pokemon.toLowerCase() + '.png';
        setGame("Pokemon ORAS")
        setMethod('Chain Fishing')
        break;
      case "Friend Safari":
        var pokemon_list = data.friend_safari;
        var chosen_pokemon = pokemon_list[Math.floor(Math.random() * pokemon_list.length)];
        pokeName.current.innerHTML = chosen_pokemon;
        pokeImage.current.src = "https://play.pokemonshowdown.com/sprites/gen5-shiny/" + chosen_pokemon.toLowerCase() + '.png';
        setGame("Pokemon XY")
        setMethod('Friend Safari')
        break;
    }
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
          cursor={headHover ? "pointer" : "default"}
          onClick={() => window.location.reload()}
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
        <Text>{game}</Text>
        <Text>{method}</Text>
        <Button display={pokeChosen ? "block" : "none"} colorScheme='green' margin={2}><Icon as={GiCheckeredFlag} w={4} h={4}/></Button>
      </Box>
    </>
  )
}

export default App
