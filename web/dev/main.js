import React from 'react';
import reactDOM from 'react-dom';


class Item extends React.Component{
    
    render() {
       return (
            <div>
                <p>helworld</p>
            </div>
       ) 
    }
}
reactDOM.render(
    <Item />,
    document.querySelector('#main')
)
