import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import SidebarProducts from '../../components/sidebarProducts';
import Sidebar from '../../components/commentSidebar';
import VideoPlayer from '../../components/video';
import { Flex, Box, Button } from '@chakra-ui/react';
import axios from 'axios';

function VideoPage() {
    const [video, setVideo] = useState({});
    const [productsArray, setProductsArray] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };

    const videoId = useParams().videoId

    useEffect(() => {
        axios.get(`http://localhost:5000/video/${videoId}`)
            .then(response => {
                const { title, url, products } = response.data
                setVideo({ videoTitle: title, videoUrl: url })
                setProductsArray(products);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            });
    }, [videoId]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <Flex width="100%">
            <Flex width="15%">
                <SidebarProducts productsArray={productsArray} />
            </Flex>
            <Box
                width={isSidebarOpen ? 'calc(85% - 300px)' : '85%'}
                transition="width 0.3s"
            >
                <Flex width="100%">
                    <VideoPlayer videoTitle={video.videoTitle} videoUrl={video.videoUrl}/>
                </Flex>
                <Flex justifyContent="flex-end">
                    <Button onClick={toggleSidebar}>Comment</Button>
                </Flex>
                <Flex>
                    <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
                </Flex>
            </Box>
        </Flex>
    )
}

export default VideoPage;
