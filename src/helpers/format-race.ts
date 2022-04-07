const formatRace = (race: string): string => {
    let color: string;
   
    switch (race) {
      case 'Human': 
        color = 'cyan lighten-3'; 
        break; 
      case 'God': 
        color = 'amber lighten-1'; 
        break; 
      case 'Mutant': 
        color = 'green accent-1'; 
        break;  
      case 'Synthezoid': 
        color = 'purple lighten-2'; 
        break; 
      case 'Deviant': 
        color = 'lime lighten-1'; 
        break;
      case 'Eternal': 
        color = 'deep-orange lighten-1'; 
        break; 
      case 'Celestial': 
        color = 'pink accent-1'; 
        break;
      case 'Machine': 
        color = 'grey accent-1'; 
        break;
      default: 
        color = 'grey darken-2'; 
        break; 
    }
   
    return `chip ${color}`;
}

export default formatRace;