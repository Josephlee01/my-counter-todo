import React from 'react';
import propTypes from 'prop-types'

const MyComponents = ({name, children}) => {
  return (
    <div>
      <h1>Hello {name} !!</h1>
      <h2>Children: {children}</h2>
    </div>
  );
};

MyComponents.propTypes = {
  name: propTypes.string
}

export default MyComponents;