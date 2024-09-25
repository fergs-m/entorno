const datos = [

    {
        nombre: 'seccionTriage',
        imgCelu: 'https://entorno.vercel.app/celu-primero.JPG',
        imgTexto: 'https://entorno.vercel.app/texto-primero.JPG'
    },
    {
        nombre: 'seccionDragLeft',
        imgCelu: 'https://entorno.vercel.app/celu-segundo.JPG',
        imgTexto: 'https://entorno.vercel.app/texto-22.JPG'
    },
    {
        nombre: 'seccionDragRight',
        imgCelu: 'https://entorno.vercel.app/celu-tercera.JPG',
        imgTexto: 'https://entorno.vercel.app/texto-33.JPG'
    },
    {
        nombre: 'seccionTap',
        imgCelu: 'https://entorno.vercel.app/celu-cuarto.JPG',
        imgTexto: 'https://entorno.vercel.app/texto-44.JPG'
    },
    {
        nombre: 'seccionReply',
        imgCelu: 'https://entorno.vercel.app/celu-quinto.JPG',
        imgTexto: 'https://entorno.vercel.app/texto-55.JPG'
    }
 
]; 



const paginaController = {

    todasLasImagenes(req,res){

        res.json(datos).status(200)
    }


}
module.exports = paginaController; 
