const jsonwebtoken = require("jsonwebtoken");

const generateJWT = async (uid = "") => {
  return new Promise((resolve, reject) => {
    const payload = { uid };

    jsonwebtoken.sign(
      payload,
      process.env.SECRETORPRIVATEKEY,
      {
        expiresIn: "4h",
      },
      (err, token) => {
        if (err) {
          console.log("Error al generar Token", err);
          reject("Se generó un error al generar el toke");
        } else {
          resolve(token);
        }
      }
    );
  });
};

module.exports = generateJWT;
