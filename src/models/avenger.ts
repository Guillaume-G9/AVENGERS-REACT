export default class Avenger {
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
     name: string = 'Enter a name',
     familyName: string = 'Enter a family name',
     race: Array<string> = ['Human'],
     age: number = 1000,
     picture: string = 'http://{enter your URL here}',
     superHeroName: string = "Enter a superhero name",
     author: string ="author",
     created: Date = new Date(),
     backstory: string ="Write the character's story here"
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