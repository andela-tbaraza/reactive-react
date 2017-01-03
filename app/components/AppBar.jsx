import React from 'react';
import AppBar from 'material-ui/AppBar';

class Hello extends React.Component {
  render() {
    return (
      <div>
        <AppBar
          title="Tonida"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <h1>Hello</h1>
      </div>
    );
  }
}

export default Hello;
