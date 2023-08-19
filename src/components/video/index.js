import { Flex, Box, Heading } from "@chakra-ui/react";
import ReactPlayer from 'react-player/youtube'

function VideoPlayer(props) {
    const { videoTitle, videoUrl } = props
  
    return (
        <Flex alignContent="flex-start" justifyContent="center" width="100%">
            <Box width="100%" justifyContent="center">
                <Heading>{videoTitle}</Heading>
                <ReactPlayer className='react-player' width="100%" url={videoUrl} />
            </Box>
        </Flex>
    )
}

export default VideoPlayer;