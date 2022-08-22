module.exports = {
    port: process.env.PORT || 3000,
    // Connect to MonggoDb, 
    // example atlas : mongodb+srv://zekaistodo:password@clusters.rqvdo.mongodb.net/Database?retryWrites=true&w=majority
    // example local : mongodb://127.0.0.1:27017
    dbURI: 'mongodb://54.173.65.125:27017,54.159.184.69:27017,34.226.153.225:27017/todo?replicaSet=rs0' 
}