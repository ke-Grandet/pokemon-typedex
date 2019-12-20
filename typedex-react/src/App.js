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