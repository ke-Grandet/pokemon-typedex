import React from 'react';
import TypeLabel from './typelabel.js';


// 标题区组件|TypeTitle
class TypeTitle extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 2  // count为每行个数
    }
  }
  componentDidMount(){
    document.addEventListener('keydown', this.hotkey);
  }
  componentWillUnmount(){
    document.removeEventListener('keydown', this.hotkey);
  }
  // 监听事件
  hotkey = (e) => {
    let index = null;
    if(this.props.typeSelected === null){
      if(e.keyCode === 37 || e.keyCode === 38)
        index = this.props.arrType.length - 1;
      else if(e.keyCode === 39 || e.keyCode === 40)
        index = 0;
    }
    else{
      let count = this.state.count;
      index = this.props.typeSelected.index;
      switch(e.keyCode){
        case 37:  // left arrow
          if(index > 0 && index % count > 0)
            index = index - 1;
          break;
        case 38:  // up arrow
          if(index - count >= 0)
            index = index - count;
          break;
        case 39:  // right arrow
          if(index < this.props.arrType.length - 1 && index % count < count - 1)
            index = index + 1;
          break;
        case 40:  // down arrow
          if(index + count < this.props.arrType.length)
            index = index + count;
          break;
        default: break;
      }
    }
    if(index !== null) this.props.onClick(index);
  }
  // 逐两个创建
  createCell = () => {
    let arrTr = [];
    let arrResult = [];
    let arrType = this.props.arrType;
    for (let index in arrType) {
      let typeSelected = this.props.typeSelected;
      let isChecked = (typeSelected !== null)?
        (String(typeSelected.index) === index): false;
      arrTr.push(
        <td key={index}>
          <input type='radio' name='type'
            id={index}
            checked={isChecked}
            onChange={()=>this.props.onClick(index)}/>
          <TypeLabel for={index}
            color={arrType[index].color}
            name={arrType[index].name}/>
        </td>
      );
      if(index % this.state.count === this.state.count - 1){
        arrResult.push(<tr key={index}>{arrTr}</tr>);
        arrTr = [];
      }
    }
    if(arrTr.length > 0)
      arrResult.push(<tr key={-1}>{arrTr}</tr>);
    return arrResult;
  }
  render() {
    return (
      <table className='TypeTitle'>
        <tbody>{this.createCell()}</tbody>
      </table>
    );
  }
}

export default TypeTitle;