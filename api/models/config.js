module.exports.config = {
    // port
    // port: process.env.PORT || 3000,
    port: 4000,
    
    // database
    db: 'mongodb://localhost:27017/enAppDB', 

    useMongoClient: true,

    // test enviroment
    test_env: 'test',
    //test_db: 'mongodb://verbs-test',
    test_port: 3001
};