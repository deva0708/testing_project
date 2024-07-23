import React from 'react';

// Custom comparison function to check if props are equal
const arePropsEqual = (prevProps, nextProps) => {
  return prevProps.data.value === nextProps.data.value;
};

const ChildComponent = ({ data }) => {
  console.log('ChildComponent render');
  return (
    <div>
      <h2>Child Component</h2>
      <p>Data: {data.value}</p>
    </div>
  );
};

export default React.memo(ChildComponent, arePropsEqual);