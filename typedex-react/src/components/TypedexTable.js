import React from 'react';
// import TypeLabel from './parts/typelabel';


class TypedexTable extends React.Component{
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
            arrTd = arrTd.map((value, key)=>{
                value = <td key={key-1}></td>;
                return value;
            });
            arrTd[0] = <td key='-1'>{value.name}</td>;
            for(let name in value.against){
                let type = this.state.mapType.get(name);
                if(value.against[name].def !== 1)
                arrTd[type.index+1] = <td key={type.index}>{value.against[name].def}</td>;
            }
            arrTr.push(
                <tr key={key}>
                    {arrTd}
                </tr>
            )
        });
        arrTr.unshift(<tr key='-1'>{arrFirstTr}</tr>);
        return arrTr;
    }
    render(){
        return (
            <div id='TypedexTable'>
                <table>
                    <tbody>
                        {this.createFirstRow()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TypedexTable;