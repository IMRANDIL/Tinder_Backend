const TinderCard = require('../model/tinder')

//get the data....




exports.getTinderCard = async (req, res, next) => {

    try {

        const getTinderCard = await TinderCard.find();

        if (!getTinderCard) {
            return res.status(400).send('Nothing here!')
        }

        res.status(200).send(getTinderCard)



    } catch (error) {
        res.status(500).json({ error: error });
        console.log(error);
    }


}



//post the details....//create...


exports.postTinderCard = async (req, res, next) => {
    const dbCard = req.body;

    try {

        const tinderCard = await TinderCard.create(dbCard);

        if (!tinderCard) {
            return res.status(500).send('Something Went Wrong!')
        }


        await tinderCard.save();
        res.status(201).send(tinderCard)
        next()

    } catch (error) {
        res.status(500).json({ error: error });
        console.log(error);
    }



}