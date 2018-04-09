import React from 'react';
import { UserCard } from '../Card/Card';

import './CardList.css';

export const CardList = (props) => {
    return (
        <div>
            {props.cards.map(card => <div className="Card"> <UserCard {...card} /> </div>)}
        </div>
    );
}