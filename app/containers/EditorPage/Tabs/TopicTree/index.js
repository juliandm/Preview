import React, { Component } from 'react';
import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css'; // This only needs to be imported once in your app

class Tree extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div style={{ height: 400 }}>
        <SortableTree
          treeData={this.state.treeData}
          onChange={treeData => this.setState({ treeData })}
          getNodeKey={({ node }) => node.id}
          generateNodeProps={()=><div></div>}
        />
      </div>
    );
  }
}