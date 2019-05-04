import React, { Component } from 'react';

class Gameboard extends Component {

    const game_characters = [
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
        { id:12, name: 'thor' },
    ];

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="game_pictures" className="container">
                <div role="img" aria-label="click item"></div>
            </div>
        );
    }
}        

export default Gameboard;


