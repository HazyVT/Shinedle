import { Button } from '@chakra-ui/button'
import Navigation from './Navigation'
import { Box, Heading, Text } from '@chakra-ui/layout'
import {useRef, useState, useEffect } from 'react'
import data from '../data.json'
import { Image } from '@chakra-ui/image'
import { Spinner } from '@chakra-ui/spinner'
import { Icon } from '@chakra-ui/icon'
import { VscDebugRestart } from 'react-icons/vsc'
import { GiCheckeredFlag } from 'react-icons/gi'
import { Select } from '@chakra-ui/select'
import { useStopwatch } from 'react-timer-hook'

// eslint-disable-next-line react/prop-types
function HuntTimer({pokeChosen, loading}) {
  const {
    seconds,
    minutes,
    hours,
    reset,
  } = useStopwatch({ autoStart: true });
  const [secs, setSecs] = useState("");
  const [mins, setMins] = useState("");
  const [hrs, setHrs] = useState("");


  useEffect(() => {
    // Reseting the timer on new hunt
    if (loading) {
      reset()
    }
    
    // Timer Formatting
    if (minutes > 0 && seconds < 10) {
      setSecs("0" + seconds);
    } else {
      setSecs(seconds);
    }
    if (minutes == 0) {
      setMins("");
    } else if (minutes < 10) {
      setMins("0" + minutes + ":");
    } else {
      setMins(minutes)
    }
    if (hours == 0) {
      setHrs("");
    }else if (hours < 10) {
      setHrs("0" + hours + ":");
    } else {
      setHrs(hours);
    }
  }, [loading, minutes, seconds, hours, reset])

  return (
    <Box style={{textAlign: 'center', userSelect: "none"}} display={pokeChosen ? "block" : "none"} margin={4}>
      <Box fontSize={48}>
        <span>{hrs}</span><span>{mins}</span><span>{secs}</span>
      </Box>
    </Box>
  );
}

function App() {

  const [headHover, setHeadHover] = useState(false);
  const [pokeChosen, setPokeChosen] = useState(false);
  const [countHover, setCountHover] = useState(false);
  const [minusHover, setMinusHover] = useState(false)
  const [loading, setLoading] = useState(false)
  const [ state, setState ] = useState(false);
  const [game, setGame] = useState('');
  const [method, setMethod] = useState('');
  const [count, setCount] = useState(0);
  const [countMove, setCountMove] = useState(1);
  const pokeName = useRef();
  const pokeImage = useRef();
  const selRef = useRef();
  // eslint-disable-next-line no-unused-vars
  const [all, setAll] = useState(data.names);

  function getPokemon() {
    // Choose a hunting method
    // If that method has a limited list, choose a pokemon from that list
    // Else choose a random pokemon
    setLoading(true)
    setState(false)
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
      case "Catch Combo":
        pokemon_list = data.letsgo;
        chosen_pokemon = pokemon_list[Math.floor(Math.random() * pokemon_list.length)];
        pokeName.current.innerHTML = chosen_pokemon;
        pokeImage.current.src = "https://play.pokemonshowdown.com/sprites/dex-shiny/" + chosen_pokemon.toLowerCase() + '.png';
        setGame("Pokemon Let's Go Pikachu | Eevee");
        setMethod("Catch Combo");
        setCountMove(1);
        break;
      case "Mass Outbreak Arceus":
        pokemon_list = data.mass_outbreak_arceus;
        chosen_pokemon = pokemon_list[Math.floor(Math.random() * pokemon_list.length)];
        pokeName.current.innerHTML = chosen_pokemon;
        pokeImage.current.src = "https://play.pokemonshowdown.com/sprites/dex-shiny/" + chosen_pokemon.toLowerCase() + '.png';
        setGame("Pokemon Legends Arceus");
        setMethod("Mass Outbreak");
        setCountMove(1);
    }
    setPokeChosen(true)
    setCount(0)
  }

  function completeHunt() {
    console.log("Hunt Complete");
    getPokemon();
  }

  function setPokemon() {
    setLoading(true)
    setState(true);
    var chosen_pokemon = selRef.current.value;
    pokeName.current.innerHTML = chosen_pokemon
    var url = "https://play.pokemonshowdown.com/sprites/dex-shiny/" + chosen_pokemon.toLowerCase() + '.png';
    url = url.replace(/\s/g, '');
    pokeImage.current.src = url;
    setCountMove(1)
    setPokeChosen(true)
    setCount(0)
  }

  function returnToHomepage() {
    window.location.reload()
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
          style={{userSelect: "none"}}
        >Shinedle</Heading>
        <Text style={{userSelect: "none"}}>Shiny Hunting Helper</Text>
        <Button 
          margin={8} 
          colorScheme='green'
          onClick={() => getPokemon()}
          display={pokeChosen ? "none" : "inline-block"}
          >Start Hunt</Button>
          <Text display={pokeChosen ? "none" : "block"} style={{userSelect: "none"}}>Or</Text>
          <Box display={pokeChosen ? "none" : "flex"} justifyContent={'center'} margin={8} style={{userSelect: "none"}}>
            <Select ref={selRef} placeholder={'Select Pokemon'} w={'30vw'} onChange={() => {
              setPokemon()
            }}>
              {all.map((el) => <option key={el}>{el}</option>)}
            </Select>
          </Box>
      </Box>
      <Box display={loading ? "flex" : "none"} justifyContent={'center'} padding={4}>
        <Spinner thickness='4px' speed='0.65s' size='xl' emptyColor='gray.200' color='green'/>
      </Box>
      <Box display={loading ? "none" : "flex"} flexDir='column' justifyContent={'center'} alignItems={'center'}>
        <Image ref={pokeImage} marginBottom={-2} onLoad={() => setLoading(false)} w={36} style={{userSelect: "none", caretColor: "transparent"}}/>
        <Text ref={pokeName} fontSize='24' style={{userSelect: "none"}}></Text>
        <Text style={{userSelect: "none"}}>{game}</Text>
        <Text style={{userSelect: "none"}}>{method}</Text>
        <HuntTimer pokeChosen={pokeChosen} loading={loading}/>
        <Box marginTop={0} display={pokeChosen ? "flex" : "none"}>
          <Heading size='xl'
            onClick={() => setCount(count+countMove)}
            style={{caretColor: 'transparent', userSelect: 'none'}}
            onMouseEnter={() => setCountHover(true)}
            onMouseLeave={() => setCountHover(false)}
            cursor={countHover ? "pointer" : "default"}
          >{count}</Heading>
          <Icon as={VscDebugRestart} w={2}
            onClick={() => setCount(count-countMove)}
            onMouseEnter={() => setMinusHover(true)}
            onMouseLeave={() => setMinusHover(false)}
            cursor={minusHover ? "pointer" : 'default'}
            color={minusHover ? 'green' : 'black'}
          />
        </Box>
        <Box display={pokeChosen ? "flex" : "none"}>
          <Button 
            margin={2} 
            onClick={state ? returnToHomepage : getPokemon}>
            <Icon as={VscDebugRestart} />
          </Button>
          <Button 
            colorScheme='green' 
            margin={2}
            onClick={completeHunt}>
            <Icon as={GiCheckeredFlag} w={4} h={4}/>
          </Button>
        </Box>
      </Box>
      <Text pos='fixed' right={5} bottom={5}>Made By Hazy | Version 0.1.4</Text>
    </>
  )
}

export default App
