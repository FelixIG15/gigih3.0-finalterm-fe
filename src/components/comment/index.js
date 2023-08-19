import React from "react";
import { Box, Avatar, Text, Flex } from '@chakra-ui/react';

function CommentCard(props) {
    const { comment, author, avatarUrl, createdAt } = props

    return (
        <Box width="100%" borderWidth="1px" borderRadius="lg" p={4} marginBottom={4}>
            <Flex>
                <Box className="avatar-container" marginRight={4} width="20%">
                    <Avatar src={avatarUrl} alt={`${author}'s Avatar`} />
                </Box>
                <Box className="comment-container" width="80%">
                    <Flex justifyContent="space-between" align="center">
                        <Flex justifyContent="flex-start">
                            <Text fontWeight="bold">{author}</Text>
                        </Flex>
                        <Flex justifyContent="flex-end">
                            <Text color="gray.500" fontSize="10px">
                                {createdAt}
                            </Text>
                        </Flex>
                    </Flex>
                    <Flex justifyContent="flex-start">
                        <Text fontSize="xs" textAlign="left">{comment}</Text>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
};

export default CommentCard;