import React from 'react';
import TypeLabel from './parts/typelabel';


class TypeIndexTable extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            arrType: this.props.arrType,
            mapType: this.props.mapType,
            arrTypeIsShow: []
        };
    }
    createFirstRow = ()=> {
        let arrFirstTr = [<td key='-1'></td>];
        let arrTr = [];
        this.state.arrType.forEach((value, key)=>{
            arrFirstTr.push(
                <td key={key}>
                    {value.name}
                </td>
            );
            let arrTd = new Array(this.state.arrType.length + 1).fill(<td></td>);
            arrTd[0] = <td>{value.name}</td>;
            for(let name in value.against){
                let type = this.state.mapType.get(name);
                if(value.against[name].def !== 1)
                arrTd[type.index + 1] = <td key={type.index}>{value.against[name].def}</td>;
            }
            arrTr.push(
                <tr key={key}>
                    {arrTd}
                </tr>
            )
        });
        arrTr.unshift(<tr>{arrFirstTr}</tr>);
        return arrTr;
    }
    render(){
        return (
            <table style={{border: 1+'px solid black'}}>
                <tbody>
                    {this.createFirstRow()}
                </tbody>
            </table>
        )
    }
}

export default TypeIndexTable;