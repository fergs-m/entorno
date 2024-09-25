const otroDato = [

    {
        nombre: 'seccionCards',
        imgColor: 'https://entorno.vercel.app/cards-color.jpg',
        imgSinColor: 'https://entorno.vercel.app/praisage-sin-color.jpg'

    }
];

const dosImagenesController = {

    dosImagenes (req,res){

        res.json(otroDato).status(200)
    }
    
}

module.exports = dosImagenesController;
