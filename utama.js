import React from 'react'
import {Switch, Route} from 'react-router-dom';

import Beranda from './beranda';
import Data from './data';
import Protokol from './protokol';

const Utama = () => (
   
    <Switch>
        <div>
        <Route exact path="/" component={Beranda}/>
        <Route path="/Protokol" component={Protokol}/>
        <Route path="/Data" component={Data}/>
        </div>
      
    </Switch>
    
)
export default Utama;
