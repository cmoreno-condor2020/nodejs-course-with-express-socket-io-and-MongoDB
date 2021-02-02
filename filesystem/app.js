const fs = require('fs');

//read file
/*fs.readFile('./files/note.txt', (err, data) =>{
    if(err){
        console.log(err);
    }else{
        console.log(data.toString());
    }
});*/

//write file
/*fs.writeFile('./files/note.txt', 'Nuevo contenido para el archivo', (err, data) => {
    if(err){
        console.log(err);
    }else{
        console.log('New content created');
    }
});*/

//append file
fs.appendFile('./files/note.txt', 'Contenido agregado para el archivo\n\r', (err, data) => {
    if(err){
        console.log(err);
    }else{
        console.log('New content agregado');
    }
});