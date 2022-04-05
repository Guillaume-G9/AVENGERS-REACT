import React, { FunctionComponent, useState} from 'react';
import Avenger from '../models/avenger'
import './avenger-card.css';
import formatDate from '../helpers/format-date';
import formatRace from '../helpers/format-race';


type Props = {
    avenger: Avenger,
    borderColor?: string
};

const AvengerCard: FunctionComponent<Props> = ({avenger, borderColor = '#691d26'}) => {

    const [color, setColor] = useState<string>()

    const showBorder = () => {
        setColor(borderColor);
    }

    const hideBorder = () => {
        setColor('#f5f5f5');
    }

    return (
     
    <div className="col s12 m4" onMouseEnter={showBorder} onMouseLeave={hideBorder}>
        <div className="card horizontal" style={{ borderColor: color}}>
            <div className="card-image">
                <img height="200vh" src={avenger.picture} alt= {avenger.name} />
            </div> 
            <div className="card-stacked">
                <div className="card-content">
                    <p>{avenger.superHeroName}</p>
                    <p><small>{avenger.name} {avenger.familyName}</small></p>
                    <span key={avenger.race} className={formatRace(avenger.race)}><small>{avenger.race}</small></span>
                    <br />
                    <br />
                    <p><small>{formatDate(avenger.created)}</small></p>
                </div>
            </div>
        </div>
    </div>
)
}

export default AvengerCard;