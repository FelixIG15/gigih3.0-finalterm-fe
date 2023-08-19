import React from "react";
import { Box, Badge, Text, Image, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function VideoCard(props) {
    const { title, thumbnailUrl, videoUrl, views, duration } = props
    return (
        <Link to={`/video/${videoUrl}`}>
            <Flex basis="33%" p="3">
                <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
                    <Image src={thumbnailUrl} alt={title} />
                    <Box p="6">
                        <Box d="flex" alignItems="baseline">
                            <Badge borderRadius="full" px="2" colorScheme="teal">
                                New
                            </Badge>
                            <Box
                                color="gray.500"
                                fontWeight="semibold"
                                letterSpacing="wide"
                                fontSize="xs"
                                textTransform="uppercase"
                                ml="2"
                            >
                                {views} views &bull; {duration}
                            </Box>
                        </Box>
                        <Text mt="1" fontWeight="semibold" fontSize="md" lineHeight="tight"
                        noOfLines={1}
                        overflow="hidden" textOverflow="ellipsis">
                            {title}
                        </Text>
                    </Box>
                </Box>
            </Flex>
        </Link>
    )
}

export default VideoCard;