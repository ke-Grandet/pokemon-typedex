import React from 'react';
import './css/App.css';
import TypedexSingle from './components/TypedexSingle';
import TypedexDouble from './components/TypedexDouble';
import TypedexTable from './components/TypedexTable';
import TypeData from './data';


class App extends React.Component{
    constructor(props){
        super(props);
        // 将数组中每个对象的index赋值为该对象的数组索引值
        let arrType = TypeData.types.map((obj, index)=>{obj.index = index; return obj;});
        // 对象Map，存储属性对象，key为name，value为object）
        let mapType = new Map();
        for(let index in arrType)
          mapType.set(arrType[index].name, arrType[index]);
        // 初始化内部数据
        this.state = {
            arrType: arrType,  // 属性数组（一维，存储属性对象）
            mapType: mapType  // Map，依据name检索属性对象
        };
    }
    render(){
        let effect = {
            zeroEffect: '×0',
            quaterEffect: '×¼',
            halfEffect: '×½',
            normalEffect: '×1',
            doubleEffect: '×2',
            quadrupleEffect: '×4'
        }
        return (
            <div id='App'>
                <TypedexSingle key='1'
                    arrType={this.state.arrType}
                    mapType={this.state.mapType}
                    effect={effect} />
                <span>按 WASD 或 ↑←↓→ 可以快速切换选择（除了右侧列表，点击表格中的属性也可以切换选择</span>
                <ul>
                    <li>左下角一格为选中的属性</li>
                    <li>横坐标表示攻击（A → Attack），即 使用该属性的招式攻击其它属性时的伤害倍率</li>
                    <li>纵坐标表示防御（D → Defence），即 该属性承受其它属性招式攻击时的伤害倍率</li>
                </ul>

                <br/><hr/><br/>施工区域：<hr style={{border: 0}}/><br/>

                <TypedexDouble key='2'
                    arrType={this.state.arrType} />
                <TypedexTable key='3'
                    arrType={this.state.arrType}
                    mapType={this.state.mapType} />
            </div>
        )
    };
}

export default App;