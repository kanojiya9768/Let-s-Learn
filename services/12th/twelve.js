let english = document.getElementById('English_medium_table');
let hindi = document.getElementById('Hindi_medium_table');
let marathi = document.getElementById('marathi_medium_table');

let shoe_english = () =>{
    english.style.display = 'flex';
    hindi.style.display = 'none';
    marathi.style.display = 'none';
}
let show_hindi = () =>{
    hindi.style.display = 'flex';
    english.style.display = 'none';
    marathi.style.display = 'none';
}
let shoe_marathi = () =>{
    marathi.style.display = 'flex';
    english.style.display = 'none';
    hindi.style.display = 'none';
}