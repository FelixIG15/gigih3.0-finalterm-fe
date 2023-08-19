import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Flex, Input, Button } from '@chakra-ui/react';

function InputCommentBox(props){
    const [message, setMessage] = useState('');
    const videoId = useParams().videoId;
    const { onSendComment } = props

    const handleInputChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSendComment = (event) => {
        if (message.trim() !== '') {
            onSendComment(videoId, message);
            setMessage('');
        }
    };

    return (
        <Flex align="center">
            <Input
                value={message}
                onChange={handleInputChange}
                placeholder="Type your message..."
                size="md"
            />
            <Button colorScheme="blue" onClick={handleSendComment}>
                Send
            </Button>
        </Flex>
    );
};

export default InputCommentBox;
