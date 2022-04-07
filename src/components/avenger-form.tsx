import React, { FunctionComponent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Avenger from '../models/avenger';
import formatRace from '../helpers/format-race';
  
type Props = {
  avenger: Avenger
};
  
type Field = {
    value?: any,
    error?: string,
    isValid?: boolean
}

type Form = { 
    superHeroName: Field,
    name: Field,
    races: Field,
    backstory: Field
}

const AvengerForm: FunctionComponent<Props> = ({avenger}) => {
  
    const [form, setForm] = useState<Form>({
        superHeroName: { value: avenger.superHeroName, isValid: true},
        name: { value: avenger.name, isValid: true},
        races: { value: avenger.race, isValid: true},
        backstory: { value: avenger.backstory, isValid: true}
    })

    const history = useHistory();

    const races: string[] = [
        'Human', 'God', 'Mutant', 'Synthezoid', 'Deviant', 'Eternal', 'Celestial' 
    ];

    const isOfRace = (race: string): boolean => {
        return form.races.value.includes(race);
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fieldName: string = e.target.name;
        const fieldValue: string = e.target.value;
        const newField: Field = {[fieldName]: {value: fieldValue}};

        setForm({...form, ...newField});
    }

    const selectRace = (race: string, e: React.ChangeEvent<HTMLInputElement>): void => {
        const checked = e.target.checked;
        let newField: Field;

        if(checked) {
            const newRaces: string[] = form.races.value.concat([race]);
            newField = { value: newRaces };
        } else {
            const newRaces: string[] = form.races.value.filter((currentRace: string) => currentRace !== race);
            newField =  { value: newRaces };
        }
        
        setForm({...form, ...{ races: newField }});
    }
   
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isFormValid = validateForm();
        if(isFormValid) {
            history.push(`/avengers/${avenger.id}`);
        }
    }


    const validateForm = () => {
        let newForm: Form = form;

        if(!/^[a-zA-Z0-9_\-. ]{2,25}$/.test(form.superHeroName.value)) {
            const errorMsg: string = `Veuillez entrer un nom de super-héros valide.`;
            const newField: Field = { value: form.name.value, error: errorMsg, isValid: false };
            newForm = { ...newForm, ...{ name: newField }}
        } else {
            const newField: Field = { value: form.superHeroName.value, error: '', isValid: true };
            newForm = { ...newForm, ...{ name: newField }};
        }

        setForm(newForm);
        return newForm.superHeroName.isValid;
    }

    const areRacesValid = (race: string): boolean => {

        if(form.races.value.length === 1 && isOfRace(race)) {
            return false;
        }

        if(form.races.value.length >= 3 && !isOfRace(race)) {
            return false;
        }

        return true;
    }

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <div className="row">
        <div className="col s12 m8 offset-m2">
          <div className="card hoverable"> 
            <div className="card-image">
              <img src={avenger.picture} alt={avenger.name} style={{width: '250px', margin: '0 auto'}}/>
            </div>
            <div className="card-stacked">
              <div className="card-content">
                {/* Pokemon name */}
                <div className="form-group">
                  <label htmlFor="name">Superhero Name</label>
                  <input value={form.superHeroName.value} name="superHeroName" id="superHeroName" type="text" className="form-control" onChange={e => handleInputChange(e)}></input>
                </div>
                {/* Pokemon hp */}
                <div className="form-group">
                  <label htmlFor="hp">Name</label>
                  <input value={form.name.value} name="name" id="name" type="text" className="form-control" onChange={e => handleInputChange(e)}></input>
                </div>
                {/* Pokemon cp */}
                <div className="form-group">
                  <label htmlFor="cp">Backstory</label>
                  <input value={form.backstory.value} id="backstory" name="backstory" type="text" className="form-control" onChange={e => handleInputChange(e)}></input>
                </div>
                {/* Pokemon types */}
                <div className="form-group">
                  <label>Race(s)</label>
                  {races.map(race => (
                    <div key={race} style={{marginBottom: '10px'}}>
                      <label>
                        <input id={race} type="checkbox" className="filled-in" value={race} disabled={!areRacesValid(race)} checked={isOfRace(race)} onChange={e => selectRace(race, e)}></input>
                        <span>
                          <p className={formatRace(race)}>{ race }</p>
                        </span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card-action center">
                {/* Submit button */}
                <button type="submit" className="btn red darken-2">Valider</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
   
export default AvengerForm;