import { Icon } from "@chakra-ui/icon";
import { Box } from "@chakra-ui/layout";
import { Drawer, DrawerBody, DrawerContent, DrawerOverlay, useDisclosure, Text, Image } from "@chakra-ui/react";
import { useState, useRef } from "react";
import { AiFillGithub, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'
import { BsStars } from 'react-icons/bs'

function Navigation() {
    const [gitHover, setGitHover] = useState(false);
    const [twitHover, setTwitHover] = useState(false);
    const [youHover, setYouHover] = useState(false);
    const [iconHover, setIconHover] = useState(false);
    const [opened, setOpened] = useState(false);
    const {isOpen, onOpen, onClose} = useDisclosure();
    const iconRef = useRef();
    const [hunts] = useState([]);


    function getHunts() {
        if (opened == false) {
            var hunt = JSON.parse(localStorage.getItem('completedHunts'))
            for (var x = 0; x < hunt.length; x++) {
                var nameLowerCase = hunt[x].name.toLowerCase();
                hunts.push(<Box key={x} backgroundColor={"green.200"} margin={2} padding={4} borderRadius={8} display={'flex'} flexDir='column' justifyContent={'center'} alignItems={'center'} textAlign={'center'}>
                    <Image src={'https://play.pokemonshowdown.com/sprites/dex-shiny/' + nameLowerCase + '.png'} />
                    <Text>{hunt[x].name}</Text>
                    <Text>{hunt[x].count}</Text>
                    <Text>{hunt[x].game}</Text>
                    <Text>{hunt[x].method}</Text>
                </Box>)
            }
            setOpened(true);
        }
    }

    return (
        <Box display={'flex'} justifyContent={'space-between'}>
            <Box padding={2} ref={iconRef}>
                <Icon as={BsStars} 
                    w={12} h={12}
                    onMouseEnter={() => setIconHover(true)}
                    onMouseLeave={() => setIconHover(false)}
                    color={iconHover ? "green" : "black"}
                    cursor={iconHover ? "pointer" : "default"}
                    onClick={() => {
                        onOpen();
                        getHunts();
                    }}
                />
            </Box>
            <Box padding={2} display={'flex'} w='28' justifyContent={'space-around'}>
                <a target="_blank" rel="noreferrer" href="https://github.com/HazyVT" aria-label="github link">
                <Icon as={AiFillGithub} 
                    w={6} h={6} 
                    fill={gitHover ? 'green' : 'gray'} 
                    onMouseEnter={() => setGitHover(true)}
                    onMouseLeave={() => setGitHover(false)}
                    transition={'ease-in-out .2s'}
                    cursor={gitHover ? "pointer" : "default"}
                    name="github"
                />
                </a>
                <a href='https://twitter.com/HazyVT' rel="noreferrer" target="_blank" aria-label="twitter link">
                <Icon as={AiOutlineTwitter} 
                    w={6} h={6}
                    fill={twitHover ? 'green' : 'gray'}
                    onMouseEnter={() => setTwitHover(true)}
                    onMouseLeave={() => setTwitHover(false)}
                    transition={'ease-in-out .2s'}
                    cursor={twitHover ? "pointer" : "default"}
                    name="twitter"
                />
                </a>
                <a href='https://www.youtube.com/channel/UC0S1cmn-MBXUeUAwdmXQGEA' rel="noreferrer" target="_blank" aria-label="youtube link">
                <Icon as={AiFillYoutube} 
                    w={6} h={6}
                    fill={youHover ? 'green' : 'gray'}
                    onMouseEnter={() => setYouHover(true)}
                    onMouseLeave={() => setYouHover(false)}
                    transition={'ease-in-out .2s'}
                    cursor={youHover ? "pointer" : "default"}
                    name="youtube"
                />
                </a>
            </Box>
            <Drawer isOpen={isOpen} placement="left" onClose={onClose} finalFocusRef={iconRef} closeOnEsc='true'>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerBody>
                        {hunts}
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    )
}

export default Navigation;