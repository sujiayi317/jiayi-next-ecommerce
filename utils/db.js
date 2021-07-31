import mongoose from 'mongoose';

const connection = {};


async function connect() {
  if (connection.isConnected) {
    console.log('already connected');
    return;
  }
  // check connections array, which contains all the previous connections
  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) { // this connection is open and ready
      console.log('use previous connection');
      return;
    }
    // status isn't 1, need to disconnect
    await mongoose.disconnect();
  }

  // here, it's the first time to connect to the db
  const db = await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log('new connection');
  connection.isConnected = db.connections[0].readyState;
}

async function disconnect() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === 'production') {
      // release the resources on the server
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      console.log('not disconnected');
    }
  }
}

const db = { connect, disconnect };
export default db;