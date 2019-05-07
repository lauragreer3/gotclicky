import React, { Component } from 'react';

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function CharacterButton(props) {
    const characterClasses = [props.name, 'click-item'];
    return (
        <div role="img" key={props.id} onClick={(e) => props.clickHandler(this, props.id)} aria-label="click item" className={characterClasses.join(' ')} />
    );
}

function Scoreboard(props) {
    return (
        <div className="scoreLabel nav-link">
            Score: <span className="score" id="score">{props.score}</span>
        </div>
    );
}

class Gameboard extends Component {

    constructor(props) {
        super(props);
        this.state= {
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
            score: 0
        };
        this.handleCharacterClick = this.handleCharacterClick.bind(this);
    }

    handleCharacterClick(e, character_id) {
        console.log('character click' + character_id);
        console.log('score: ' + this.state.score);
        var oldScore = parseInt(this.state.score);
        var oldOrder = this.state.character_order;
        var oldSelected = this.state.character_selected;
        if(oldSelected.includes(character_id)) {
            //already selected, handle gameover
            this.setState({
                game_state: 'gameover', 
                score: 0,
                character_order: shuffleArray(oldOrder),
                character_selected: []
            });
            console.log('game over');
        }
        else
        {
            // this.state.character_selected.push(character_id);
            console.log(this.state.character_selected);
            oldSelected.push(character_id);
            //increment the score
            this.setState({
                score: oldScore + 1,
                character_order: shuffleArray(oldOrder),
                character_selected: oldSelected
            });
        }
    }


    render() {
        return (
            <div id="gameboard">
                <Scoreboard score={parseInt(this.state.score)}/>
                <div id="game_pictures" className="container">
                    {this.state.character_order.map((id) => 
                        <CharacterButton
                            key={id} 
                            name={this.state.game_characters[id-1].name}
                            id={this.state.game_characters[id-1].id}
                            clickHandler={this.handleCharacterClick}
                        />        
                    )}
                </div>    
            </div>
        );
    }
}
        

export default Gameboard;


