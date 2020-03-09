import React, { Component } from 'react';

class Jedi extends Component {
   constructor(props) {
      super(props);
      this.state = { 
         isEditName: false,
         userInput: '',
         jediTypeInfo: [
            {
               type: 'guardian',
               content: 'Jedi Guardian is the most skilled in combat. Heirs of the first Jedi Knights, Guardians excel in heavy and light combat abilities. Known as a Galactic Police Force, Guardians protect the weak and vulnerable.',
               lightsaberContent: `Guardian's usually carry a blue lightsaber and specialize in combat forms 5 and 4. \nForm 5: Heavy strikes and heavy defense. \n Form 4: Acrobatic strikes and light defense. \nAdvanced Guardians and Battlemasters also specialize in Form 7 (Ferocity Form). A form forged on the basis of emotion, Form 7 can cause a Jedi to get too emotional in combat, resulting in a flurry of anger. Movements are sharp and chaotic. Open to counterattacks, Form 7 is only used by the best of the Jedi Order.`
            },
            {
               type: 'sentinel',
               content: 'Striking a balance between Guardians and Consulars, Jedi Sentinels are the most secretive in the Jedi Order. Sentinels are like the spies of the Jedi Order. Working the closest with civilians, Sentinels have to be casual in their duties. Many live on worlds and sectors for months or years at a time.',
               lightsaberContent: 'The Jedi Sentinel usually carries a yellow lightsaber. Many never actually use their lightsabers, but they carry one just in case. They never assume the force will guide them. They rely the most on their physical abilities and talent. Sentinels are either slicers, tech experts, or security experts. They need to solve problems on their own, not through diplomacy or the force'
            },
            {
               type: 'consular',
               content: 'The diplomatic branch of the Jedi, Consulars are responsible for negotiations between worlds and trade factions for the Galactic Republic. Mainly political, Consulars work with in conjunction with the Senate. Consulars also do research and teach apprentices. The Jedi with the strongest connection to the force, Consulars can be pushed to combat if necessary.',
               lightsaberContent: 'Consulars usually carry a green lightsaber and like all jedi, they are skilled at using it. Conulars specialize in the force and are very talented at using the force to counter the dark side in combat.'
            },
            {
               type: 'sith',
               content: 'The Sith Order, was an ancient religious order of Force-wielders devoted to the dark side of the Force. Driven by their emotions, including hate, anger, and greed, the Sith were deceptive and obsessed with gaining power no matter the cost. There were numerous times when the Sith Order gained significant power over the galaxy and ultimatly the Jedi Order which lead to infighting amoung the Sith for power. Because infighting greatly weakened the Sith eventually the rule of two was established where a Sith master would only train one student in the ways of the Sith to be eventually killed and replaced once their apprentice grew more powerful than them.',
               lightsaberContent: 'The Sith usually carry a red lightsaber althought they have been known to carry lightsabers of all kinds of colors such as violet, yellow, and orange lightsabers. Like their Jedi Guardian counterparts, the Sith are very skilled in the use of the lightsaber and the sith have extensive training into using the force during combat. Because the Sith place no limits on their emotions it is not uncommon to see a Sith create force lightning or use the force to choke an opponent.'
            }
         ]
       }
   }

   toggleEdit = () => {
      this.setState({ isEditName: !this.state.isEditName });
   }

   handleChange = (event) => {
      this.setState({ userInput: event.target.value });
   }

   render() { 
      let displayCharacterContent = this.state.jediTypeInfo.map(e => {
         if(e.type === this.props.type){
            return <p className="paragraph"> {e.content} </p>
         }
      })

      let displayLightsaberContent = this.state.jediTypeInfo.map(e => {
         if(e.type === this.props.type) {
            return <p className="bottom-content paragraph">
               {e.lightsaberContent}
            </p>
         }
      })

      console.log(this.props.jedi)
      return ( 
         <div className="container jedi-person">
            {this.state.isEditName ? (
               <div>
                  <input className="update-name-input info" onChange={(event) => this.handleChange(event)}/>
                  <button className="update-save-button" onClick={() => {
                     this.props.updateName(this.props.jedi.id, this.state.userInput);
                     this.toggleEdit();
                     }}
                     >Save</button>
               </div>
            ):(
               <h4 className="character-name info" onClick={this.toggleEdit}>
                  {this.props.jedi.name}
               </h4>
            )}
            <div className="jedi-info info-container info">
               {/* <h4>{this.props.jedi.name}</h4> */}
               <img id="jedi-character-img"
                  src={this.props.jedi.characterImg}
                  alt={this.props.jedi.name}
               />
               {displayCharacterContent}
            </div>
            <div className="lightsaber-info info-container info">
               <img id="lightsaber-img" 
                  src={this.props.jedi.lightsaberImg}
               />
               {displayLightsaberContent}
            </div>
            <button className="update-save-button delete-button" onClick={() => this.props.delete(this.props.jedi.id)}>Delete</button>
         </div>
       );
   }
}
 
export default Jedi;