import Avenger from "../models/avenger";
 
export default class AvengerService {
 
  static getAvengers(): Promise<Avenger[]> {
    return fetch('http://localhost:3001/avengers')
      .then(response => response.json())
      .catch(error => this.handleError(error));
  }
 
  static getAvenger(id: number): Promise<Avenger|null> {
    return fetch(`http://localhost:3001/avengers/${id}`)
      .then(response => response.json())
      .then(data => this.isEmpty(data) ? null : data)
      .catch(error => this.handleError(error));
  }
 
  static updateAvenger(avenger: Avenger): Promise<Avenger> {
      return fetch(`http://localhost:3001/avengers/${avenger.id}`, {
          method: 'PUT',
          body: JSON.stringify(avenger),
          headers: { 'Content-Type': 'application/json'}
      })
      .then(response => response.json())
      .catch(error => this.handleError(error));
  }

  static deleteAvenger(avenger: Avenger): Promise<{}> {
      return fetch(`http://localhost:3001/avengers/${avenger.id}`, {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' }
      })
      .then(response => response.json())
      .catch(error => this.handleError(error));

  }

  static addAvenger(avenger: Avenger): Promise<Avenger> {
    delete avenger.created;

    return fetch(`http://localhost:3001/avengers`, {
      method: 'POST',
      body: JSON.stringify(avenger),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .catch(error => this.handleError(error));
  }

  static searchAvenger(term: string): Promise<Avenger[]> {
    return fetch(`http://localhost:3001/avengers?q=${term}`)
      .then(response => response.json())
      .catch(error => this.handleError(error));
  }

  static isEmpty(data: Object): boolean {
    return Object.keys(data).length === 0;
  }

  static handleError(error: Error): void {
      console.error(error);
  }
}