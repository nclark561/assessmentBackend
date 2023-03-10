let database = [];

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = [
            'Success is coming your way',
            'The springtime of your youth is just around the corner',
            'Be aware of your surroundings, you\'ll be surprised what comes your way',
            'Yikes, your future is lookin a little rough',
            'The opportunity of a lifetime will come when you least expect it.'
            ];
        let randInd = Math.floor(Math.random() * fortunes.length);
        
        res.status(200).send(fortunes[randInd]);
    },
    faveColor: (req, res) => {
        if(req.body.id.toLowerCase() === 'purple') {
            res.status(200).send(req.body.id)
        } else {
            res.status(200).send(false)
        }
    },
    postStr: (req, res) => {
        database.push(req.body.id)
        console.log(database)
        req.body.id;
        res.status(200).send(database)
    },
    deleteStr: (req, res) => {
        let idx = Math.floor(Math.random() * database.length);
        database.splice(database[idx], 1)
        res.status(200).send(database)
    }
}