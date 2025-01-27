
import emailjs from 'emailjs-com';

const enviarEmail = (toEmail, nombre) => {
  const templateParams = {
    to_email: toEmail,
    nombre_usuario: nombre
  };

  emailjs.send('service_q0lygbe', 'template_9ebdc7j', templateParams, 'RLQ58mvLdyzsVR9e0')
    .then((response) => {
      console.log('Correo enviado:', response.status, response.text);
    })
    .catch((error) => {
      console.error('Error al enviar el correo:', error);
    });
};

export { enviarEmail };
