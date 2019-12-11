import React from 'react';
import TypeIndexSingle from './typeindex-single';
import TypeIndexTable from './typeindex-table';


class App extends React.Component{
    render(){
        return [
            <TypeIndexSingle key='1'/>,
            <TypeIndexTable key='3' />
        ]
    };
}

export default App;