import { createTransport } from "nodemailer";
import dotenv from "dotenv";
dotenv.config();


const transporter = createTransport({
  service: "gmail",
  port: 587,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PWD,
  },
});

export const loadEmail = async (data) => {
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: data.email,
    subject: "Nuevo Usuario",
    html: `<div>
            <h4>Un nuevo cliente se registro en la Web</h4>
            <ul>
                <li>Nombre: ${data.first_name}</li>
                <li>Email: ${data.email}</li>
                <li>Foto: ${data.avatar}</li>
            </ul>
    </div>`,
  };
  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log(error);
  }
};

export const orderEmail = async (data, html) => {
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: data.email, 
    subject: `Un nuevo pedido de ${data.first_name} ${data.email}`,
    html: JSON.stringify(html),
  };
  
  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log(error);
  }
};
