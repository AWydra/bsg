// @ts-nocheck
import React, { createContext, useState, useContext } from 'react';

const VideosContext = createContext();

const initialData = {
  section1: [],
  section2: [],
  section3: [],
};

// eslint-disable-next-line react/prop-types
const VideosProvider = ({ children }) => {
  const [videos, setVideos] = useState(initialData);

  return <VideosContext.Provider value={{ videos, setVideos }}>{children}</VideosContext.Provider>;
};

const useVideos = () => {
  const { videos, setVideos } = useContext(VideosContext);

  return { videos, setVideos };
};

export { VideosProvider, useVideos };
