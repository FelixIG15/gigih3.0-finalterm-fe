import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import CommentCard from '../comment';
import axios from 'axios';
import { format } from "date-fns";
import InputCommentBox from '../inputComment';
import { Flex, VStack } from '@chakra-ui/react';

const Sidebar = ({ isOpen, onClose }) => {
    const [commentArray, setCommentArray] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const videoId = useParams().videoId

    const getComment = (videoId) => {
        axios.get(`${"https://gigihshop-be.onrender.com"}/video/${videoId}/comments`)
        .then(response => {
            setCommentArray(response.data)
            setLoading(false);
        })
        .catch(err => {
            setError(err);
            setLoading(false);
        });
    }

    const onSendComment = async (videoId, commentMessage) => {
        try {
            await axios.post(`${"https://gigihshop-be.onrender.com"}/video/${videoId}/comment`, {
                userId: "64c69e84381420f29c2a0365",
                comment: commentMessage
            });
            getComment(videoId)
        } catch (error) {
            console.log(error)
            console.error('Error sending message:', error);
        }
    }

    useEffect(() => {
        getComment(videoId)
    }, [videoId]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <motion.div
            initial={{ x: '100%' }}
            animate={{ x: isOpen ? 0 : '100%' }}
            transition={{ duration: 0.3 }}
            style={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                width: '300px',
                backgroundColor: 'white',
                boxShadow: '-2px 0px 5px rgba(0, 0, 0, 0.2)',
                zIndex: 1000,
            }}
        >
            <Flex direction="column" height="90%">
                <button onClick={onClose}>Close Comment</button>
                <VStack paddingBottom="2" flex="1" overflowY="auto">
                    {commentArray.map((commentElement) => {
                        return (
                            <CommentCard comment={commentElement.comment}
                                author={commentElement.user.name}
                                avatarUrl={commentElement.user.profilePicture}
                                createdAt={format(new Date(commentElement.createdAt), "dd MMM yyyy h:mm a")} />
                        )
                    })}
                </VStack>
            </Flex>
            <InputCommentBox onSendComment={onSendComment} />
        </motion.div>
    );
};

export default Sidebar;