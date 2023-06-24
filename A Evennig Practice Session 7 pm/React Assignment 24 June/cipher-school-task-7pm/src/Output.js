import React from 'react';

const Output = ({ result }) => {
  const styles = {
    backgroundColor: '#f2f2f2',
    padding: '10px',
    borderRadius: '5px',
    margin: '10px 0',
  };

  return <p style={styles}>Output: {result}</p>;
};

export default Output;
