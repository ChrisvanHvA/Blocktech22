require('dotenv').config();

const { MongoClient, ServerApiVersion } = require('mongodb');
const url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASS}@cluster0.qzliq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const connectDb = async () => {
    try {
        await client.connect();

        console.log('DB connected');
    } catch (error) {
        console.log('something went wrong w db connect');
        throw error;
    }
}

module.exports = {
    connectDb
};