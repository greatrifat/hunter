import mongoose from 'mongoose';

const MONGODB_URI = "mongodb+srv://greatrifat:greatrifat@cluster0.b1gshzv.mongodb.net/?retryWrites=true&w=majority"

async function connect() {
  await mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

module.exports = { connect };

