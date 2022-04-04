export default class Avener {
    // 1. Typage des propiétés
    id: number;
    name: string;
    familyName: string;
    race: string;
    age: number;
    picture: string;
    superHeroName: string;
    created: Date;
     
    // 2. Définition des valeurs par défaut des propriétés 
    constructor(
     id: number,
     name: string = 'name',
     familyName: string = 'familyName',
     race: string = 'race',
     age: number = 1000,
     picture: string = 'http://...',
     superHeroName: string = "superHeroName",
     created: Date = new Date()
    ) {
     // 3. Initialisation des propiétés 
     this.id = id;
     this.name = name;
     this.familyName = familyName;
     this.race = race;
     this.age = age;
     this.picture = picture;
     this.superHeroName = superHeroName;
     this.created = created;
    }
   }