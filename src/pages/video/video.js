import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import SidebarProducts from '../../components/sidebarProducts';
import VideoPlayer from '../../components/video';
import { Flex, Box } from '@chakra-ui/react';
import axios from 'axios';
import SidebarButton from '../../components/drawer';

function VideoPage() {
    const [video, setVideo] = useState({});
    const [productsArray, setProductsArray] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const videoId = useParams().videoId
    
    useEffect(() => {
        axios.get(`http://localhost:5000/video/${videoId}`)
        .then(response => {
            const { title, url, products } = response.data
            setVideo({videoTitle: title, videoUrl: url})
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
            <Box width="15%">
                <SidebarProducts productsArray={productsArray} />
            </Box>
            <Box width="85%">
                <Box width="100%">
                    <VideoPlayer videoTitle={video.videoTitle} videoUrl={video.videoUrl}/>
                </Box>
                <Box className='comment-sidebar'>
                    <SidebarButton/>
                </Box>
            </Box>
        </Flex>
    )
}

export default VideoPage;
