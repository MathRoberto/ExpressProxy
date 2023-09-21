import axios from "axios";

const BASE_URL = "https://dbs-digital.myfreshworks.com/crm/sales";
const CONFIG = {
  headers: {
    Authorization: "Token token=pWIwgJ1gMqWscTMk7mQbCg",
    "Content-Type": "application/json",
  },
};

export default async function callApiUpdateDeal(req, res) {
  try {
    const { dealId, products } = req.body; // Extrai o dealId e products do corpo da requisição

    // Monta o JSON
    const requestData = {
      dealId,
      products,
    };

    console.log(requestData);

    // Monta a URL
    const apiUrl = `${BASE_URL}/api/deals/${dealId}?include=products`;

    // Faz a requisição pra API do Sales
    const response = await axios.put(apiUrl, requestData, CONFIG);

    return res.status(200).send(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
}
