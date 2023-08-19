import React, { useEffect, useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import VideoCard from '../../components/videoCard';
import axios from 'axios';

function Home() {
    const [videoArray, setVideoArray] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5000/video`)
            .then(response => {
                setVideoArray(response.data)
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <Box width="100%">
            <Flex flexWrap="wrap">
                {videoArray.map((video) => {
                    return (
                        <VideoCard
                            videoUrl={video._id}
                            title={video.title}
                            thumbnailUrl={video.thumbnailImage}
                            views="10K" duration="12:24" />
                    )
                })
                }
            </Flex>
        </Box>
    )
}

export default Home;