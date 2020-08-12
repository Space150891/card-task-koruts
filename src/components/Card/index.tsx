import React from 'react';
import './card.css';

type CardProps = {
    showName: string,
    artistName: string,
    danceType: string,
    img: string,
    year: number,
}


type CardType = React.FunctionComponent<CardProps>
const Card: CardType = (props: CardProps) => {
    
    return (
        <div className='card'>
            <div className='card-content'>
                <div className='card-artist-info'>
                    <p className='artist-card-year'>{props.year}</p>
                    <p className='artist-card-show' dir='rtl'>{props.showName}</p>
                    <p className='artist-card-name' dir='rtl'>{props.artistName}</p>
                    <p className='artist-card-dance' dir='rtl'>{props.danceType}</p>
                </div>
                <div className='card-image'>
                    <img src={props.img} alt={props.showName} />
                </div>
            </div>
        </div>
    )
}

export default Card;