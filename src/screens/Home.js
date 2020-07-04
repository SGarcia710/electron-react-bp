import React, { useState } from 'react';
// const { spawn } = require('child_process');

const Home = () => {
  const [link, setLink] = useState('');
  const [videoName, setVideoName] = useState('');

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>Electron app</h1>
      <input
        style={{
          background: 'white',
          color: 'black',
          width: '80vw',
          padding: 10,
          borderRadius: 11,
          marginTop: 15,
          outline: 'none',
        }}
        onChange={(e) => setLink(e.target.value)}
        value={link}
        placeholder="Link"
      />
      <input
        style={{
          background: 'white',
          color: 'black',
          width: '80vw',
          padding: 10,
          borderRadius: 11,
          marginTop: 15,
          outline: 'none',
        }}
        onChange={(e) => setVideoName(e.target.value)}
        value={videoName}
        placeholder="Video name"
      />
      <div
        style={{
          background: 'white',
          color: 'black',
          width: 'fit-content',
          padding: 10,
          borderRadius: 11,
          marginTop: 15,
          cursor: 'pointer',
        }}
      >
        Download video
      </div>
    </div>
  );
};

export default Home;
