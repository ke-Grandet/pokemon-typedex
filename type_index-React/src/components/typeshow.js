import React from 'react';
import TypeLabel from './typelabel.js';


// 展示区组件|TypeShow
class TypeShow extends React.Component{
  // 逐行创建
  createShowCells = (row)=> {
    let arrResult = [];
    let arrRow = this.props.arrTypeShow[row];
    for(let i = 0; i < arrRow.length; i++){
      let arrItem = arrRow[i];
      arrItem = arrItem.map((value, key)=>{
        return (
          <TypeLabel key={key}
            color={value.color}
            name={value.name}
            onClick={()=>this.props.onClick(value.index)}/>
        );
      });
      arrResult.push(<td key={i}>{arrItem}</td>);
    }
    arrResult.push(<td key={-1} className="blank">※</td>);
    return arrResult;
  }
  // 创建左下角属性标签
  createTypeSelected = ()=> {
    let type = this.props.typeSelected;
    return (type===null? null:
      <TypeLabel color={type.color} name={type.name}/>);
  }
  render(){
    return (
      <table className='TypeShow'>
        <tbody>
          <tr>
            <td className="blank yLine">D</td><td className="blank">※</td>
            <td className="blank">※</td><td className="blank">※</td>
            <td className="blank">※</td><td className="blank">※</td>
          </tr>
          <tr>
            <td className='effDouble yLine'>×2</td>
            {this.createShowCells(0)}
          </tr>
          <tr>
            <td className='effNormal yLine'>×1</td>
            {this.createShowCells(1)}
          </tr>
          <tr>
            <td className='effHalf yLine'>×½</td>
            {this.createShowCells(2)}
          </tr>
          <tr>
            <td className='effZero yLine'>×0</td>
            {this.createShowCells(3)}
          </tr>
          <tr className='xLine'>
            <td className="blank yLine">
              {this.createTypeSelected()}
            </td>
            <td className='effZero'>×0</td><td className='effHalf'>×½</td>
            <td className='effNormal'>×1</td><td className='effDouble'>×2</td>
            <td className="blank">A</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default TypeShow;