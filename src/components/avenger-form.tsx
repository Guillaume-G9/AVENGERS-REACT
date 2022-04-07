import React, { FunctionComponent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Avenger from '../models/avenger';
import formatRace from '../helpers/format-race';
import AvengerService from '../services/avenger-service';
  
type Props = {
  avenger: Avenger,
  isEditForm: boolean
};
  
type Field = {
    value?: any,
    error?: string,
    isValid?: boolean
}

type Form = { 
    picture: Field,
    superHeroName: Field,
    name: Field,
    familyName: Field,
    races: Field,
    backstory: Field
}

const AvengerForm: FunctionComponent<Props> = ({avenger, isEditForm}) => {
  
    const [form, setForm] = useState<Form>({
        picture: { value: avenger.picture },
        superHeroName: { value: avenger.superHeroName, isValid: true},
        name: { value: avenger.name, isValid: true},
        familyName: { value: avenger.familyName, isValid: true},
        races: { value: avenger.race, isValid: true},
        backstory: { value: avenger.backstory, isValid: true}
    })

    const history = useHistory();

    const races: string[] = [
        'Human', 'God', 'Mutant', 'Synthezoid', 'Deviant', 'Eternal', 'Celestial', 'Machine'
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
          avenger.picture = form.picture.value
            avenger.superHeroName = form.superHeroName.value;
            avenger.name = form.name.value;
            avenger.familyName = form.familyName.value;
            avenger.backstory = form.backstory.value;
            avenger.race = form.races.value;

            isEditForm ? updateAvenger() : addAvenger();
        }
    }

    const addAvenger = () => {
      AvengerService.addAvenger(avenger).then(() => history.push(`/avengers/`));
    }
    const updateAvenger = () => {
      AvengerService.updateAvenger(avenger).then(() => history.push(`/avengers/${avenger.id}`));
    }

    const isAddForm = () => {
      return !isEditForm;
    }

    const validateForm = () => {
        let newForm: Form = form;

        if(isAddForm()){
          const start = "https://";
          
          if(!form.picture.value.startsWith(start)) {
            const errorMsg: string = "The URL is not valid.";
            const newField: Field = {value: form.picture.value, error: errorMsg, isValid: false};
            newForm = {...form, ...{picture: newField}}
          } else {
            const newField: Field = { value: form.picture.value, error: '', isValid: true };
            newForm = { ...form, ...{picture: newField}}
          }
        }

        if(!/^[a-zA-Z0-9_\-. ]{2,25}$/.test(form.superHeroName.value)) {
            const errorMsg: string = `Veuillez entrer un nom de super-héros valide.`;
            const newField: Field = { value: form.superHeroName.value, error: errorMsg, isValid: false };
            newForm = { ...newForm, ...{ superHeroName: newField }}
        } else {
            const newField: Field = { value: form.superHeroName.value, error: '', isValid: true };
            newForm = { ...newForm, ...{ superHeroName: newField }};
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

    const deleteAvenger = () => {
        AvengerService.deleteAvenger(avenger).then(() => history.push(`/avengers`));
    }

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <div className="row">
        <div className="col s12 m8 offset-m2">
          <div className="card hoverable"> 
            {isEditForm && (
            <div className="card-image">
              <img src={avenger.picture} alt={avenger.name} style={{width: '250px', margin: '0 auto'}}/>
              <span style={{margin: '5%'}} className="btn-floating halfway-fab waves-effect waves-light btn-large red darken-2">
                  <i onClick={deleteAvenger} className="material-icons">delete</i>
              </span>            
            </div>
            )}
            <div className="card-stacked">
              <div className="card-content">
                {/*Avenger image*/}
                {isAddForm() && (
                <div className="form-group">
                  <label htmlFor="name">image</label>
                  <input value={form.picture.value} name="picture" id="picture" type="text" className="form-control" onChange={e => handleInputChange(e)}></input>
                  {form.picture.error &&
                  <div className="card-panel red accent-1">
                    {form.picture.error}
                  </div>}
                </div>
                )}                
                {/* Avenger SuperHero Name */}
                <div className="form-group">
                  <label htmlFor="name">Superhero Name</label>
                  <input value={form.superHeroName.value} name="superHeroName" id="superHeroName" type="text" className="form-control" onChange={e => handleInputChange(e)}></input>
                  {form.superHeroName.error &&
                  <div className="card-panel red accent-1">
                    {form.superHeroName.error}
                  </div>
                  }
                </div>
                {/* Avenger name */}
                <div className="form-group">
                  <label htmlFor="hp">Name</label>
                  <input value={form.name.value} name="name" id="name" type="text" className="form-control" onChange={e => handleInputChange(e)}></input>
                </div>
                {/* Avenger fName */}
                <div className="form-group">
                  <label htmlFor="hp">Family Name</label>
                  <input value={form.familyName.value} name="familyName" id="familyName" type="text" className="form-control" onChange={e => handleInputChange(e)}></input>
                </div>
                {/* Avenger backstory */}
                <div className="form-group">
                  <label htmlFor="cp">Backstory</label>
                  <input value={form.backstory.value} id="backstory" name="backstory" type="text" className="form-control" onChange={e => handleInputChange(e)}></input>
                </div>
                {/* Avenger races */}
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