import React, { FunctionComponent, useState} from 'react';
import Avenger from '../models/avenger'
import './avenger-card.css';
import formatDate from '../helpers/format-date';
import formatRace from '../helpers/format-race';
import { useHistory } from 'react-router-dom';


type Props = {
    avenger: Avenger,
    borderColor?: string
};

const AvengerCard: FunctionComponent<Props> = ({avenger, borderColor = '5px solid #B71C1C'}) => {

    const [color, setColor] = useState<string>()
    const history = useHistory();

    const showBorder = () => {
        setColor(borderColor);
    }

    const hideBorder = () => {
        setColor('3px solid #f5f5f5');
    }

    const goToAvenger = (id: number) => {
        history.push(`/avengers/${id}`);
    }

    return (
     
    <div style={{cursor: 'pointer'}} className="col s12 m4"  onClick={() => goToAvenger(avenger.id)} onMouseEnter={showBorder} onMouseLeave={hideBorder}>
        <div className="card horizontal" style={{border: color}} >
            <div className="card-image">
                <img height="100%" src={avenger.picture} alt= {avenger.name} />
            </div> 
            <div className="card-stacked">
                <div className="card-content">
                    <p>{avenger.superHeroName}</p>
                    <p><small>{avenger.name} {avenger.familyName}</small></p>
                    {avenger.race.map(race => (
                    <span key={race} className={formatRace(race)}><small>{race}</small></span>
                    ))}
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