import React from "react";
import { Box, Avatar, Text, Flex } from '@chakra-ui/react';

function CommentCard(props) {
    const { comment, author, avatarUrl, createdAt } = props

    return (
        <Box borderWidth="1px" borderRadius="lg" p={4} marginBottom={4}>
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
                            <Text color="gray.500" fontSize="xs">
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

// For Testing Purpose
CommentCard.defaultProps = {
    comment: "Wow! I'm Interested!",
    author: "Felix",
    createdAt: "2023-08-17"
}

export default CommentCard;