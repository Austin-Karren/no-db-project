import React, { Component } from 'react';
import Jedi from './Jedi';
import axios from 'axios';

class JediList extends Component {
   constructor(props) {
      super(props);
      this.state = {  }
   }
   render() { 
      let displayList = this.props.jedi.map(e => {
         return ( <Jedi 
                     type={this.props.type}
                     key={e.id}
                     jedi={e}
                     updateName={this.props.updateJediName}
                     delete={this.props.delete}
               /> )
      })
      return ( 
         <div >
            {displayList}
         </div>
       );
   }
}
 
export default JediList;