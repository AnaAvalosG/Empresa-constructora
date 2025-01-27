/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "reco.construccioneses@gmail.com",
    pass: "RecoConstrucciones"
  }
});

exports.sendThankYouEmail = functions.firestore
  .document("emails/{emailId}")
  .onCreate((snap, context) => {
    const data = snap.data();
    const mailOptions = {
      from: "reco.construccioneses@gmail.com",
      to: data.email,
      subject: "Gracias por contactar con Reco Construcciones.",
      text: `Hola ${data.nombre},\n\n Hemos recibido tu mensaje y te responderemos lo antes posible.\n\nSaludos,\nReco Construciones`
    };

    return transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error al enviar correo: ", error);
      } else {
        console.log("Correo enviado: ", info.response);
      }
    });
  });


// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
