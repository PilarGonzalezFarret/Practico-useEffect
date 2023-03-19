import React, {useEffect, useState} from 'react';
import './App.css';

const Example = (props) => {
    const [state, setState] = useState(0);

    useEffect(() => {
      console.log("Hello");
        fetch('https://swapi.co/api/people/')
            .then(response => response.json())
            .then(response => setState({people: response.results}))
    }, []);

    return (
        <div className='lista'>
            {state.people? state.people.map((item, index)=>{
                return (<div key={index}>Nombre: {item.name}</div>)
            }): null}
        </div>
    );
}
export default Example;

//No entendí este ejemplo :(

