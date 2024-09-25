const otroDato = [

    {
        nombre: 'seccionCards',
        imgColor: 'https://entorno.vercel.app/cards-color.JPG',
        imgSinColor: 'https://entorno.vercel.app/praisage-sin-color.JPG'

    }
];

const dosImagenesController = {

    dosImagenes (req,res){

        res.json(otroDato).status(200)
    }
    
}

module.exports = dosImagenesController;
