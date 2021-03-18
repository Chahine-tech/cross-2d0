export function genderValidator(gender) {
    if (["homme", "femme", "N/A", "Homme", "Femme"].includes(gender)){
      return ''
    } else {
      return 'Vous devez renseigner votre genre'
    }
  }
  