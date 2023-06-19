import { Icon } from "@chakra-ui/icon";
import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import { AiFillGithub, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'
import { BsStars } from 'react-icons/bs'

function Navigation() {
    const [gitHover, setGitHover] = useState(false);
    const [twitHover, setTwitHover] = useState(false);
    const [youHover, setYouHover] = useState(false);

    return (
        <Box display={'flex'} justifyContent={'space-between'}>
            <Box padding={2}>
                <Icon as={BsStars} 
                    w={12} h={12}
                />
            </Box>
            <Box padding={2} display={'flex'} w='28' justifyContent={'space-around'}>
                <Icon as={AiFillGithub} 
                    w={6} h={6} 
                    fill={gitHover ? 'green' : 'gray'} 
                    onMouseEnter={() => setGitHover(true)}
                    onMouseLeave={() => setGitHover(false)}
                    transition={'ease-in-out .2s'}
                    onClick={() => window.location.href = 'https://github.com/HazyVT'}
                    cursor={gitHover ? "pointer" : "default"}
                />
                <Icon as={AiOutlineTwitter} 
                    w={6} h={6}
                    fill={twitHover ? 'green' : 'gray'}
                    onMouseEnter={() => setTwitHover(true)}
                    onMouseLeave={() => setTwitHover(false)}
                    transition={'ease-in-out .2s'}
                    onClick={() => window.location.href = 'https://twitter.com/HazyVT'}
                    cursor={twitHover ? "pointer" : "default"}
                />
                <Icon as={AiFillYoutube} 
                    w={6} h={6}
                    fill={youHover ? 'green' : 'gray'}
                    onMouseEnter={() => setYouHover(true)}
                    onMouseLeave={() => setYouHover(false)}
                    transition={'ease-in-out .2s'}
                    onClick={() => window.location.href = 'https://www.youtube.com/channel/UC0S1cmn-MBXUeUAwdmXQGEA'}
                    cursor={youHover ? "pointer" : "default"}
                />
            </Box>
        </Box>
    )
}

export default Navigation;