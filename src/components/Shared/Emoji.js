import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faDroplet, faIcicles } from '@fortawesome/free-solid-svg-icons';

export class Emoji extends Component {
    getEmoji(score){
        if (score >= 90){
            return <FontAwesomeIcon icon={faFire} style={{color: 'red'}}/>
        } else if (score >= 80){
            return <FontAwesomeIcon icon={faFire} style={{color: 'orange'}}/>
        } else if (score >= 70){
            return <FontAwesomeIcon icon={faFire} style={{color: 'yellow'}}/>
        } else if (score >= 60){
            return <FontAwesomeIcon icon={faDroplet} style={{color: 'lightblue'}}/>
        } else {
            return <FontAwesomeIcon icon={faIcicles} style={{color: 'blue'}}/>
        }
    }
    
    render() {
        return <div>{this.getEmoji(this.props.score)}</div>
    }
}
