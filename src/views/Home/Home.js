/* eslint-disable no-alert */
import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import VideoSection from 'components/organisms/VideoSection/VideoSection';
import { useAuth } from 'context/AuthContext';
import { useVideos } from 'context/VideosContext';
import { getVideos } from 'services';
import { formatVideosData } from 'utils/formatData';
import history from 'utils/history';

const Home = () => {
  const { videos, setVideos } = useVideos();
  const { userData, reset } = useAuth();
  const [loading, setLoading] = useState(!videos.section1.length && true);

  useEffect(() => {
    if (!videos.section1.length) {
      const section1 = getVideos(10, userData.token);
      const section2 = getVideos(13, userData.token);
      const section3 = getVideos(15, userData.token);
      Promise.all([section1, section2, section3])
        .then(([section1, section2, section3]) => {
          setVideos({
            section1: formatVideosData(section1),
            section2: formatVideosData(section2),
            section3: formatVideosData(section3),
          });
          setLoading(false);
        })
        .catch((err) => {
          const { status } = JSON.parse(err.message);
          if (status === 401) {
            reset();
            history.replace('/login');
          } else {
            window.alert(`ERROR ${status}`);
          }
        });
    }
  }, []);

  return (
    <Container maxWidth="xl">
      <VideoSection
        title="Section 1"
        subtitle="Just a random videos"
        items={videos.section1}
        loading={loading}
      />
      <VideoSection
        title="Section 2"
        subtitle="Another random videos"
        items={videos.section2}
        loading={loading}
      />
      <VideoSection
        title="Section 3"
        subtitle="Find something interesting"
        items={videos.section3}
        loading={loading}
      />
    </Container>
  );
};

export default Home;
