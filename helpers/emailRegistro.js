import nodemailer from 'nodemailer';

const emailRegistro = async (datos) => {

    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        }
      });

      const {email, nombre, token } = datos;
      //enviar email
      const info = await transporter.sendMail({
          from: "APV- Administrador de Pcientes de Veterinaria",
          to: email,
          subject: "Comprueba t ucuenta de APV",
          text: "Comprueba tu cuenta en APV",
          html: `<p> Hola: ${nombre} comprueba tu cuenta de APV.</p>
                <p>Tu cuenta ya esta lista, solo falta verificarla en el siguiente enlace:
                <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Verificar Cuenta</a> </p>
          `
      })

      console.log("Mensaje enviado: %s", info.messageId)


}

export default emailRegistro