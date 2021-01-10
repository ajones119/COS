import React from 'react';

import './PCStatCardDark.css';
import {IconContext} from 'react-icons';

class PCStatCardDark extends React.Component {
    render() {
        return (
            <div className='pcstatcard-dark'>
                <p>Race: {this.props.Race}</p>
                <p>Class: {this.props.Class}</p>
                <p>Level: {this.props.Level}</p>
                <p>Str: {this.props.STR} | {this.props.STRMOD}</p>
                <p>Dex: {this.props.DEX} | {this.props.DEXMOD}</p>
                <p>Con: {this.props.CON} | {this.props.CONMOD}</p>
                <p>Int: {this.props.INT} | {this.props.INTMOD}</p>
                <p>Wis: {this.props.WIS} | {this.props.WISMOD}</p>
                <p>Cha: {this.props.CHA} | {this.props.CHAMOD}</p>
            </div>
        );
    }
};

export default PCStatCardDark;