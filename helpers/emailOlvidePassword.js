import nodemailer from 'nodemailer';

const emailOlvidePassword = async (datos) => {

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
          subject: "Restablece tu Contraseña",
          text: "Restablece tu Contraseña",
          html: `<p> Hola: ${nombre}, has solicitado restablecer tu contraseña.</p>
                <p>Ingresa al siguiente enlace para generar una nueva Contraseña:
                <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Restablecer contraseña</a> </p>
          `
      })

      console.log("Mensaje enviado: %s", info.messageId)


}

export default emailOlvidePassword