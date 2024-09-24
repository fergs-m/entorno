const datos = [

    {
        nombre: 'seccionTriage',
        imgCelu: 'http://localhost:3000/celu-primero.jpg',
        imgTexto: 'http://localhost:3000/texto-primero.jpg'
    },
    {
        nombre: 'seccionDragLeft',
        imgCelu: 'http://localhost:3000/celu-segundo.jpg',
        imgTexto: 'http://localhost:3000/texto-22.jpg'
    },
    {
        nombre: 'seccionDragRight',
        imgCelu: 'http://localhost:3000/celu-tercera.jpg',
        imgTexto: 'http://localhost:3000/texto-33.jpg'
    },
    {
        nombre: 'seccionTap',
        imgCelu: 'http://localhost:3000/celu-cuarto.jpg',
        imgTexto: 'http://localhost:3000/texto-44.jpg'
    },
    {
        nombre: 'seccionReply',
        imgCelu: 'http://localhost:3000/celu-quinto.jpg',
        imgTexto: 'http://localhost:3000/texto-55.jpg'
    }
 
]; 



const paginaController = {

    todasLasImagenes(req,res){

        res.json(datos).status(200)
    }


}
module.exports = paginaController; 