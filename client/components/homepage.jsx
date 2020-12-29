import React from 'react';
// import React from 'react';
import { render } from 'react-dom'
// import { render } from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import avengers from './avengers.png'

export default function HomePage() {

    return(
        <div>
            <p>Welcome User!</p>
            <img src={avengers}  className="img" alt="venom" width="360px" height="360px"/>
        </div>
    )
}