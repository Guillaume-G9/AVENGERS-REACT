import React, { FunctionComponent, useState} from 'react';
import AvengerForm from '../components/avenger-form';
import Avenger from '../models/avenger';

const AvengerAdd: FunctionComponent = () => {
    const [id] = useState<number>(new Date().getTime());
    const [avenger] = useState<Avenger>(new Avenger(id));

    return (
        <div style={{paddingBottom: '5%'}} className="row">
            <h2 style={{color: 'white', fontWeight: 'bolder'}} className="header center">Add an MCU character</h2>
            <AvengerForm avenger={avenger} isEditForm={false}></AvengerForm>
        </div>
    )
}

export default AvengerAdd;