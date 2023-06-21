import { Button } from '@chakra-ui/button'
import Navigation from './Navigation'
import { Flex, Spacer } from '@chakra-ui/react'
import { Box, Heading, Text } from '@chakra-ui/layout'
import { useRef, useState } from 'react'
import data from '../data.json'
import { Image } from '@chakra-ui/image'
import { Spinner } from '@chakra-ui/spinner'
import { GiBirdTwitter, GiCheckeredFlag } from 'react-icons/gi'
import { Icon } from '@chakra-ui/icon'
import { AiFillAccountBook, AiFillGithub } from 'react-icons/ai'
import { BsTwitter, BsYoutube } from 'react-icons/bs'
import { VscDebugRestart } from 'react-icons/vsc'

function App() {

  const [headHover, setHeadHover] = useState(false);
  const [pokeChosen, setPokeChosen] = useState(false);
  const [countHover, setCountHover] = useState(false);
  const [minusHover, setMinusHover] = useState(false)
  const [loading, setLoading] = useState(false)
  const [game, setGame] = useState('')
  const [method, setMethod] = useState('')
  const [count, setCount] = useState(0)
  const [countMove, setCountMove] = useState(1)
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
    var pokemon_list, chosen_pokemon;
    switch (chosen_method) {
      case "Horde Hunting X | Y":
        pokemon_list = data.horde_hunting_x_y;
        chosen_pokemon = pokemon_list[Math.floor(Math.random() * pokemon_list.length)];
        pokeName.current.innerHTML = chosen_pokemon;
        pokeImage.current.src = "https://play.pokemonshowdown.com/sprites/dex-shiny/" + chosen_pokemon.toLowerCase() + '.png';
        setGame("Pokemon XY")
        setMethod('Horde Hunting')
        setCountMove(5)
        break;
      case "Horde Hunting OR | AS":
        pokemon_list = data.horde_hunting_or_as;
        chosen_pokemon = pokemon_list[Math.floor(Math.random() * pokemon_list.length)];
        pokeName.current.innerHTML = chosen_pokemon;
        pokeImage.current.src = "https://play.pokemonshowdown.com/sprites/dex-shiny/" + chosen_pokemon.toLowerCase() + '.png';
        setGame("Pokemon ORAS")
        setMethod('Horde Hunting')
        setCountMove(5)
        break;
      case "Masuda Method":
        pokemon_list = data.masuda_method;
        chosen_pokemon = pokemon_list[Math.floor(Math.random() * pokemon_list.length)];
        pokeName.current.innerHTML = chosen_pokemon;
        pokeImage.current.src = "https://play.pokemonshowdown.com/sprites/dex-shiny/" + chosen_pokemon.toLowerCase() + '.png';
        setGame("Any Game")
        setMethod('Masuda Method')
        setCountMove(1)
        break; 
      case "Chain Fishing X | Y":
        pokemon_list = data.chain_fishing_x_y;
        chosen_pokemon = pokemon_list[Math.floor(Math.random() * pokemon_list.length)];
        pokeName.current.innerHTML = chosen_pokemon;
        pokeImage.current.src = "https://play.pokemonshowdown.com/sprites/dex-shiny/" + chosen_pokemon.toLowerCase() + '.png';
        setGame("Pokemon XY")
        setMethod('Chain Fishing')
        setCountMove(1)
        break;
      case "Chain Fishing OR | AS":
        pokemon_list = data.chain_fishing_or_as;
        chosen_pokemon = pokemon_list[Math.floor(Math.random() * pokemon_list.length)];
        pokeName.current.innerHTML = chosen_pokemon;
        pokeImage.current.src = "https://play.pokemonshowdown.com/sprites/dex-shiny/" + chosen_pokemon.toLowerCase() + '.png';
        setGame("Pokemon ORAS")
        setMethod('Chain Fishing')
        setCountMove(1)
        break;
      case "Friend Safari":
        pokemon_list = data.friend_safari;
        chosen_pokemon = pokemon_list[Math.floor(Math.random() * pokemon_list.length)];
        pokeName.current.innerHTML = chosen_pokemon;
        pokeImage.current.src = "https://play.pokemonshowdown.com/sprites/dex-shiny/" + chosen_pokemon.toLowerCase() + '.png';
        setGame("Pokemon XY")
        setMethod('Friend Safari')
        setCountMove(1)
        break;
      case "Mass Outbreak":
        pokemon_list = data.mass_outbreak;
        chosen_pokemon = pokemon_list[Math.floor(Math.random() * pokemon_list.length)];
        pokeName.current.innerHTML = chosen_pokemon;
        pokeImage.current.src = "https://play.pokemonshowdown.com/sprites/dex-shiny/" + chosen_pokemon.toLowerCase() + '.png';
        setGame("Pokemon Scarlet | Violet")
        setMethod('Mass Outbreak')
        setCountMove(1)
        break;
    }
    setPokeChosen(true)
    setCount(0)
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
        <Text>Shiny Hunting Helper</Text>
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
        <Box marginTop={12} display={'flex'}>
          <Heading size='xl'
            display={pokeChosen ? "block" : 'none'} 
            onClick={() => setCount(count+countMove)}
            style={{caretColor: 'transparent', userSelect: 'none'}}
            onMouseEnter={() => setCountHover(true)}
            onMouseLeave={() => setCountHover(false)}
            cursor={countHover ? "pointer" : "default"}
          >{count}</Heading>
          <Icon as={VscDebugRestart} w={2}
            display={pokeChosen ? "block" : "none"}
            onClick={() => setCount(count-countMove)}
            onMouseEnter={() => setMinusHover(true)}
            onMouseLeave={() => setMinusHover(false)}
            cursor={minusHover ? "pointer" : 'default'}
            color={minusHover ? 'green' : 'black'}
          />
        </Box>
        <Box display='flex'>
          <Button display={pokeChosen ? "block" : "none"} margin={2} onClick={() => getPokemon()}><Icon as={VscDebugRestart} /></Button>
          <Button display={pokeChosen ? "block" : "none"} colorScheme='green' margin={2}><Icon as={GiCheckeredFlag} w={4} h={4}/></Button>
        </Box>
      </Box>
    </>
  )
}

export default App
