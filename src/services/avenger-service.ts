import Avenger from "../models/avenger";
import AVENGERS from "../models/mock-avenger";
  
export default class AvengerService {
  
  static avengers:Avenger[] = AVENGERS;
  
  static isDev = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development');
  
  static getAvengers(): Promise<Avenger[]> {
    if(this.isDev) {
      return fetch('http://localhost:3001/avengers')
      .then(response => response.json())
      .catch(error => this.handleError(error));
    }
  
    return new Promise(resolve => {
      resolve(this.avengers);
    });
  }
  
  static getAvenger(id: number): Promise<Avenger|null> {
    if(this.isDev) {
      return fetch(`http://localhost:3001/avengers/${id}`)
      .then(response => response.json())
      .then(data => this.isEmpty(data) ? null : data)
      .catch(error => this.handleError(error));
    }
  
    return new Promise(resolve => {    
      resolve(this.avengers.find(avenger => id === avenger.id));
    }); 
  }
  
  static updateAvenger(avenger: Avenger): Promise<Avenger> {
    if(this.isDev) {
      return fetch(`http://localhost:3001/avengers/${avenger.id}`, {
        method: 'PUT',
        body: JSON.stringify(avenger),
        headers: { 'Content-Type': 'application/json'}
      })
      .then(response => response.json())
      .catch(error => this.handleError(error));
    }
  
    return new Promise(resolve => {
      const { id } = avenger;
      const index = this.avengers.findIndex(avenger => avenger.id === id);
      this.avengers[index] = avenger;
      resolve(avenger);
    }); 
  }
  
  static deleteAvenger(avenger: Avenger): Promise<{}> {
    if(this.isDev) {
      return fetch(`http://localhost:3001/avengers/${avenger.id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json'}
      })
      .then(response => response.json())
      .catch(error => this.handleError(error));
    }
  
    return new Promise(resolve => {    
      const { id } = avenger;
      this.avengers = this.avengers.filter(avenger => avenger.id !== id);
      resolve({});
    }); 
  }
  
  static addAvenger(avenger: Avenger): Promise<Avenger> {
    avenger.created = new Date(avenger.created);
  
    if(this.isDev) {
      return fetch(`http://localhost:3001/avengers`, {
        method: 'POST',
        body: JSON.stringify(avenger),
        headers: { 'Content-Type': 'application/json'}
      })
      .then(response => response.json())
      .catch(error => this.handleError(error));
    }
  
    return new Promise(resolve => {    
      this.avengers.push(avenger);
      resolve(avenger);
    }); 
  }
  
  static searchAvenger(term: string): Promise<Avenger[]> {
    if(this.isDev) {
      return fetch(`http://localhost:3001/avengers?q=${term}`)
      .then(response => response.json())
      .catch(error => this.handleError(error));
    }
  
    return new Promise(resolve => {    
      const results = this.avengers.filter(avenger => avenger.superHeroName.includes(term));
      resolve(results);
    });
  
  }
  
  static isEmpty(data: Object): boolean {
    return Object.keys(data).length === 0;
  }
  
  static handleError(error: Error): void {
    console.error(error);
  }
}