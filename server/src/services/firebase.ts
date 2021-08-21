var admin = require("firebase-admin");

// Fetch the service account key JSON file contents
var serviceAccount = require(process.env.GOOGLE_APPLICATION_CREDENTIALS);

// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "ht-challenge-25447.appspot.com"
});

const bucket = admin.storage().bucket()

// As an admin, the app has access to read and write all data, regardless of Security Rules
var db = admin.database();
var ref = db.ref("restricted_access/secret_document");

module.exports = {
  bucket,
  db
}