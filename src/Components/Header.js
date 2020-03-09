import React from 'react';

function Header(props){
   return(
      <header>
         <img className="img-header" src="./assets/jediandsith.png"/>
         <div className="top-page-info info">
            <p className="paragraph">
               For many years, the Jedi maintained peace in the galaxy through a noble order of sworn protectors unified by their ability to use the Force for good. They embody the light side of the force and are it's sworn protectors. Sith Lords are a powerful group of Dark Jedi that value passion and strength above all else. Have you ever wondered what kind of a force user you would be?
            </p>
            <h4>Take The Quiz to find out!</h4>
         </div>
      </header>
   )
}

export default Header;