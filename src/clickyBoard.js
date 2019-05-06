import React, { Component } from 'react';

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function CharacterButton(props) {
    const character = props.name;
    const characterClasses = [props.name, 'click-item'];
    return (
        <div role="img" key={props.id} onClick={this.handleCharacterClick.bind(this, props.id)} ariaLabel="click item" className={characterClasses.join(', ') }/>
    )
}

function Scoreboard(props) {
    return (
        <div className="scoreLabel nav-link">
            Score: <span className="score" id="score">props.score</span>
        </div>
    )
}

class Gameboard extends Component {

    constructor(props) {
        super(props);
        this.setState= ({
            game_characters: [
                { id:1, name: 'blackpanther' },
                { id:2, name: 'shuri' },
                { id:3, name: 'captain-america' },
                { id:4, name: 'gamora' },
                { id:5, name: 'hulk' },
                { id:6, name: 'ironman' },
                { id:7, name: 'ironmonger' },
                { id:8, name: 'loki' },
                { id:9, name: 'mandarin' },
                { id:10, name: 'blackwidow' },
                { id:11, name: 'thanos' },
                { id:12, name: 'thor' }
            ],
            character_selected: [],
            character_order:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            game_state: 'readyplayerone',
            score: 0,
        });
        this.handleCharacterClick = this.handleCharacterClick.bind(this);
    }

    handleCharacterClick(e, character_id) {
        console.log('character click');
        //check if the character has been clicked before
        this.state.character_selected.forEach(element => {
            if(element === character_id) {
                //already selected, handle gameover
                this.setState({game_state: 'gameover'});
                //set all character buttons to disabled
                //show game over message
            }
            else
            {
                this.character_selected.push(character_id);
                //increment the score
                this.setState({score: this.state.score++})
                //shuffle the display order
                shuffleArray(this.state.character_order);
            }
        });
        //handle game over

        //handle shuffling the order


    }



    render() {
        return (
            <div id="gameboard">
                <Scoreboard score={parseInt(score)}/>
                <div id="game_pictures" className="container">
                    {this.state.character_order.map}
                    {character_order.map((id) => 
                        <CharacterButton 
                            name={this.state.characterClasses[id-1].name}
                            id={this.state.characterClasses[id-1].id}
                    />        
                    )}
                </div>    
            </div>
        );
    }
}        

export default Gameboard;


