export default class Avener {
    // 1. Typage des propiétés
    id: number;
    name: string;
    familyName: string;
    race: Array<string>;
    age: number;
    picture: string;
    superHeroName: string;
    author: string;
    created: Date;
    backstory: string;
     
    // 2. Définition des valeurs par défaut des propriétés 
    constructor(
     id: number,
     name: string = 'name',
     familyName: string = 'familyName',
     race: Array<string> = ['Human'],
     age: number = 1000,
     picture: string = 'http://...',
     superHeroName: string = "superHeroName",
     author: string ="author",
     created: Date = new Date(),
     backstory: string ="backstory"
    ) {
     // 3. Initialisation des propiétés 
     this.id = id;
     this.name = name;
     this.familyName = familyName;
     this.race = race;
     this.age = age;
     this.picture = picture;
     this.superHeroName = superHeroName;
     this.author = author;
     this.created = created;
     this.backstory = backstory;
    }
   }