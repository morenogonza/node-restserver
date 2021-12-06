const { request } = require("express");
const Category = require("../models/category");

// obtener categorias - paginado - total -populate

const getDataWebhook = async (req = request, res) => {
  console.log("llega la data", req.body);

  res.json({
    ok: true,
    data: req.body,
  });
};

module.exports = {
  getDataWebhook,
};

[
  {
    lead_id:
      "TeSter-123-ABCDEFGHIJKLMNOPQRSTUVWXYZ-abcdefghijklmnopqrstuvwxyz-0123456789-AaBbCcDdEeFfGgHhIiJjKkLl",
    user_column_data: [
      {
        column_name: "Full Name",
        string_value: "FirstName LastName",
        column_id: "FULL_NAME",
      },
      {
        column_name: "User Phone",
        string_value: "+16505550123",
        column_id: "PHONE_NUMBER",
      },
      {
        column_name: "User Email",
        string_value: "test@example.com",
        column_id: "EMAIL",
      },
    ],
    api_version: "1.0",
    form_id: 16029674244,
    campaign_id: 1046168316,
    google_key: "asd",
    is_test: true,
    gcl_id:
      "TeSter-123-ABCDEFGHIJKLMNOPQRSTUVWXYZ-abcdefghijklmnopqrstuvwxyz-0123456789-AaBbCcDdEeFfGgHhIiJjKkLl",
    adgroup_id: 20000000000,
    creative_id: 30000000000,
  },
];
