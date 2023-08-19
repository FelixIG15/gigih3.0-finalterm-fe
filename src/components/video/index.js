import { Flex, Heading } from "@chakra-ui/react";
import ReactPlayer from 'react-player/youtube'

function VideoPlayer(props) {
    const { videoTitle, videoUrl } = props
  
    return (
        <Flex flexDirection="column" alignContent="flex-start" justifyContent="center" width="100%">
            <Flex justifyContent="flex-start" padding={2}>
                <Heading>{videoTitle}</Heading>
            </Flex>
            <Flex justifyContent="center" paddingBottom={2}>
                <ReactPlayer className='react-player' width="100%" url={videoUrl} />
            </Flex>
        </Flex>
    )
}

export default VideoPlayer;