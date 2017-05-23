import React from 'react';
import reactDOM from 'react-dom';
import "./style.scss";

class Item extends React.Component{
    
    render() {
       return (
            <div>
                <p onClick="{this.saver}">hed<span>hahahah</span></p>
                <h3 className="hello">helloworld</h3>
            </div>
       ) 
    }
}
reactDOM.render(
    <Item />,
    document.querySelector('#main')
)
