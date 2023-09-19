import axios from "axios";
const URL = "https://dbs-digital.myfreshworks.com/crm/sales";
const CONFIG = {
  headers: {
    Authorization: "Token token=pWIwgJ1gMqWscTMk7mQbCg",
  },
};

export default async function callApiGetDeals(req, res) {
  try {
    const response = await axios.get(`${URL}/api/deals/view/26003391887`, CONFIG);
    res.status(200).send(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      error: "Algo deu errado. Verifique e tente novamente",
    });
  }
}
