const otroDato = [

    {
        nombre: 'seccionCards',
        imgColor: 'http://localhost:3000/cards-color.jpg',
        imgSinColor: 'http://localhost:3000/praisage-sin-color.jpg'

    }
];

const dosImagenesController = {

    dosImagenes (req,res){

        res.json(otroDato).status(200)
    }
    
}

module.exports = dosImagenesController;