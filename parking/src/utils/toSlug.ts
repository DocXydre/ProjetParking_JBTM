// création de la fonction toSlug qui prend en paramètre une chaine de caractère et qui retourne une chaine de caractère
export const toSlug = (str : string):string=>{
    
    //enlever les accents
    const accents = str.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); 
    
    //tout mettre en minuscule
    const minuscule= accents.toLowerCase();
    
    //supprimer les caracteres speciaux
    const caractere_speciaux= minuscule.replace(/[^a-z0-9\s-]/g, "");

    //remplacer les espaces par des tirets
    const slug= caractere_speciaux.trim().replace(/\s+/g, "-");
    return slug;
}