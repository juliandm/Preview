import React, { Component } from 'react';
import SortableTree from 'react-sortable-tree';
import {getNodeAtPath,changeNodeAtPath, addNodeUnderParent, removeNodeAtPath} from "react-sortable-tree"
import 'react-sortable-tree/style.css'; // This only needs to be imported once in your app
import Button from "components/Button"
import styles from "./styles.css"
var ID = function () {
    return '_' + Math.random().toString(36).substr(2, 9);
  };
const getNodeKey = function ({ node }){return node.id};
export default class Structure extends Component {
  constructor(props) {
    super(props);
  }
  renameNode(rowInfo,value) {
    this.props.onTabChange("structure", {"treeData": changeNodeAtPath({
            treeData: this.props.data.treeData,
            newNode: { ...rowInfo.node,title: value},
            path: rowInfo.path,   // You can use path from here
            getNodeKey,
            ignoreCollapsed : true
            
        })
    })
  }
  addNode(rowInfo){
    let newNode = {title: '', id:ID()};
    let {node, path} = rowInfo;
    path.pop();
    let parentNode = getNodeAtPath({
        treeData: this.props.data.treeData,
        path : path,
        getNodeKey,
        ignoreCollapsed : true
    });
    let parentKey = getNodeKey(parentNode);
    if(parentKey == -1) {
        parentKey = null;
    }
    let newTree = addNodeUnderParent({
            treeData: this.props.data.treeData,
            newNode,
            expandParent: true,
            parentKey,
            getNodeKey
     });
     this.props.onTabChange("structure", {"treeData": newTree.treeData});
}

removeNode(rowInfo) {
    let {node, path} = rowInfo;
    this.props.onTabChange("structure", {"treeData": removeNodeAtPath({
                   treeData: this.props.data.treeData,
                   path: path, 
                   getNodeKey,
                   ignoreCollapsed: false,
                })
    })
}
  render() {
    return (
        <div style={{ height: 400 }}>
            {this.props.data ? <SortableTree
            treeData={this.props.data.treeData}
            onChange={(values)=>this.props.onTabChange("structure", {"treeData":values})}
            canDrop={({nextPath})=>nextPath.length > 1}
            canDrag={({path})=>path.length > 1}
            getNodeKey={getNodeKey}
            generateNodeProps={rowInfo => {
                return ({
                buttons: [
    
                         <div style={{display:"flex", flexDirection:"row"}}>
                         <input disabled={rowInfo.path.length === 1} value={rowInfo.node.title} style={{outline: "none"}}
                            onChange={(event)=> this.renameNode(rowInfo, event.target.value)}
                          /><br />
                          
                            {rowInfo.path.length > 1 && <Button size="s" label='Delete'
                            onClick={(event) => this.removeNode(rowInfo)}><i className="fas fa-trash"></i></Button>}
                          
                            {rowInfo.path.length > 1 && <Button size="s" label='Add'
                            onClick={(event) => this.addNode(rowInfo)}><i className="fas fa-plus"></i></Button>}
                          </div>,
                ]
             })}
            }
            
            />: "No data yet"}
        </div>
    );
  }
}