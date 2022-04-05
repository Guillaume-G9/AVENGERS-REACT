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
      default: 
        color = 'purple lighten-3'; 
        break; 
    }
   
    return `chip ${color}`;
}

export default formatRace;