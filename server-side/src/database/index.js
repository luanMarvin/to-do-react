const moongose = require("mongoose");

function connect(URI){
    moongose.connect(URI);
    const db = moongose.connection;
    db.once("open", () => {console.log(`Connected to ${URI}`)});
};

module.exports = {
    connect
};