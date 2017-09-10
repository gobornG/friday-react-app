import React, { Component } from 'react';

class Rows extends Component {
  render() {
    return (
        <div id="rows-container">
            <h1 id="row-options"> Option 1 </h1>
            <input id="checkbox" type="checkbox" className="boxes" />
            <input id="checkbox" type="checkbox" className="boxes" />
            <input id="checkbox" type="checkbox" className="boxes" />
            <input id="checkbox" type="checkbox" className="boxes" />
        </div>
    );
  }
}

export default Rows;