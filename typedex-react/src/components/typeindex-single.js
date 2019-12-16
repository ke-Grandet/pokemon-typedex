import React from 'react';
import './css/typeindex-single.css';  // 导入样式
import TypeTitle from './parts/typetitle.js';  // 导入标题区表格组件
import TypeShow from './parts/typeshow.js';  // 导入展示区表格组件


// 整体
class TypeIndexSingle extends React.Component{
  constructor(props){
    super(props);
    let arrType = this.props.arrType;  // 导入数据内容
    // 初始化内部数据
    this.state = {
      type1: null,
      arrType: arrType,  // 属性数组（一维，存储属性对象）
      mapType: this.props.mapType,  // Map，依据name检索属性对象
      arrTypeShow: this.getArrEmpty()  // 展示数组（三维，4×4格，每格存储若干属性）
    };
  }
  // 辅助方法，定位x、y
  matchPosition(isX, n){
    return isX? ( n<=0? 0: 2+Math.log(n)/Math.log(2) ): n<=0? 3: 1-Math.log(n)/Math.log(2);
  }
  // 得到空的4×4×0数组
  getArrEmpty = ()=> {
    let arr = new Array(4);
    for(let i = 0; i < arr.length; i++){
      arr[i] = new Array(4);
      for(let j = 0; j < arr[i].length; j++){
        arr[i][j] = [];
      }
    }
    return arr;
  }
  // 绑定给单格属性的事件
  clickType = (typeIndex)=> {
    let arrTypeShow = this.getArrEmpty()
    let type = this.state.arrType[typeIndex];
    for(let objName in type.against){
      let x = this.matchPosition(true, type.against[objName].atk);
      let y = this.matchPosition(false, type.against[objName].def);
      arrTypeShow[y][x].push({
        index: this.state.mapType.get(objName).index,
        color: this.state.mapType.get(objName).color,
        name: this.state.mapType.get(objName).name,
        description: this.state.mapType.get(objName).description
      });
    }
    this.setState({
      type1: type,
      arrTypeShow: arrTypeShow
    });
  }
  render(){
    return (
      <div id='TypeIndexSingle'>
        <TypeShow key='2'
          arrTypeShow={this.state.arrTypeShow}
          onClick={(typeIndex) => this.clickType(typeIndex)}
          typeSelected={this.state.type1}
          effect={this.props.effect} />
        <TypeTitle key='1'
          arrType={this.state.arrType}
          onClick={(typeIndex) => this.clickType(typeIndex)}
          typeSelected={this.state.type1} />
      </div>
    );
  };
}

export default TypeIndexSingle;
