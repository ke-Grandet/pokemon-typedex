import React from 'react';
import './App.css';  // 导入样式
import CounterTable from './countertable.js';  // 导入数据内容
import TypeTitle from './components/typetitle.js';  // 导入标题区表格组件
import TypeShow from './components/typeshow.js';  // 导入展示区表格组件


// 整体
class CounterTableSingle extends React.Component{
  constructor(props){
    super(props);
    // 将数组中每个对象的index赋值为该对象的数组索引值
    let arrType = CounterTable.types.map((obj, index)=>{obj.index = index; return obj;});
    // 对象Map，存储属性对象，key为name，value为object）
    let mapType = new Map();
    for(let index in arrType)
      mapType.set(arrType[index].name, arrType[index]);
    this.state = {
      type1: null,
      type2: null,
      arrType: arrType,  // 属性数组（一维，存储属性对象）
      mapType: mapType,  // Map，依据name检索属性对象
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
    return [
      <TypeShow key='2'
        arrTypeShow={this.state.arrTypeShow}
        onClick={(typeIndex)=>this.clickType(typeIndex)}
        typeSelected={this.state.type1}/>,
      <TypeTitle key='1'
        arrType={this.state.arrType}
        onClick={(typeIndex)=>this.clickType(typeIndex)}
        typeSelected={this.state.type1}/>
    ];
  };
}

export default CounterTableSingle;
