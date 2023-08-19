import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import CommentCard from '../comment';
import axios from 'axios';
import { format } from "date-fns";

const Sidebar = ({ isOpen, onClose }) => {
    const [commentArray, setCommentArray] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const videoId = useParams().videoId

    useEffect(() => {
        axios.get(`http://localhost:5000/video/${videoId}/comments`)
            .then(response => {
                setCommentArray(response.data)
                setLoading(false);
                console.log(response.data)
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            });
    }, [videoId, commentArray]);

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
            <button onClick={onClose}>Close Sidebar</button>
            {commentArray.map((commentElement) => {
                return (
                    <CommentCard comment={commentElement.comment}
                        author={commentElement.user.name}
                        avatarUrl={commentElement.user.profilePicture}
                        createdAt={format(new Date(commentElement.createdAt), "dd MMMM yyyy h:mm a")} />
                )
            })}
        </motion.div>
    );
};

export default Sidebar;