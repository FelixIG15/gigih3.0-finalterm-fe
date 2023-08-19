import React from 'react';
import { motion } from 'framer-motion';
import CommentCard from '../comment';

const Sidebar = ({ isOpen, onClose }) => {
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
            <CommentCard/>
        </motion.div>
    );
};

export default Sidebar;