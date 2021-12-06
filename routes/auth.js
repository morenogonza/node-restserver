const { Router } = require("express");
const { check } = require("express-validator");

const { validarCampos } = require("../middlewares/validar-campos");

const { login, googleSingIn } = require("../controllers/auth");

const router = Router();

router.post(
  "/login",
  [
    check("mail", "El correo es un campo obligatorio").isEmail(),
    check("password", "La contraseña es obligatoria").not().isEmpty(),
    validarCampos,
  ],
  login
);

router.post(
  "/google",
  [
    check("id_token", "Es necesario el token de google").not().isEmpty(),
    validarCampos,
  ],
  googleSingIn
);

module.exports = router;
