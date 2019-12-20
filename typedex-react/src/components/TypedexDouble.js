import React from 'react';
import TypeTitle from './parts/typetitle';


class TypedexDouble extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return (
            <div id='TypedexDouble'>
                <TypeTitle
                    onClick={()=>{}}
                    arrType={this.props.arrType}
                    typeSelected={null} />
            </div>
        );
    }
}

export default TypedexDouble;