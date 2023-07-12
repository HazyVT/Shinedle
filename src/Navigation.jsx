import { Icon } from "@chakra-ui/icon";
import { Box } from "@chakra-ui/layout";
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, useDisclosure } from "@chakra-ui/react";
import { useState, useRef } from "react";
import { AiFillGithub, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'
import { BsStars } from 'react-icons/bs'

function Navigation() {
    const [gitHover, setGitHover] = useState(false);
    const [twitHover, setTwitHover] = useState(false);
    const [youHover, setYouHover] = useState(false);
    const [iconHover, setIconHover] = useState(false);
    const {isOpen, onOpen, onClose} = useDisclosure();
    const iconRef = useRef();


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
                    }}
                />
            </Box>
            <Box padding={2} display={'flex'} w='28' justifyContent={'space-around'}>
                <a target="_blank" rel="noreferrer" href="https://github.com/HazyVT">
                <Icon as={AiFillGithub} 
                    w={6} h={6} 
                    fill={gitHover ? 'green' : 'gray'} 
                    onMouseEnter={() => setGitHover(true)}
                    onMouseLeave={() => setGitHover(false)}
                    transition={'ease-in-out .2s'}
                    cursor={gitHover ? "pointer" : "default"}
                />
                </a>
                <a href='https://twitter.com/HazyVT' rel="noreferrer" target="_blank">
                <Icon as={AiOutlineTwitter} 
                    w={6} h={6}
                    fill={twitHover ? 'green' : 'gray'}
                    onMouseEnter={() => setTwitHover(true)}
                    onMouseLeave={() => setTwitHover(false)}
                    transition={'ease-in-out .2s'}
                    cursor={twitHover ? "pointer" : "default"}
                />
                </a>
                <a href='https://www.youtube.com/channel/UC0S1cmn-MBXUeUAwdmXQGEA' rel="noreferrer" target="_blank">
                <Icon as={AiFillYoutube} 
                    w={6} h={6}
                    fill={youHover ? 'green' : 'gray'}
                    onMouseEnter={() => setYouHover(true)}
                    onMouseLeave={() => setYouHover(false)}
                    transition={'ease-in-out .2s'}
                    cursor={youHover ? "pointer" : "default"}
                />
                </a>
            </Box>
            <Drawer isOpen={isOpen} placement="left" onClose={onClose} finalFocusRef={iconRef} closeOnEsc='true'>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton right='0' left='5px'/>
                    <DrawerBody>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    )
}

export default Navigation;