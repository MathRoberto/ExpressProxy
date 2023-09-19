import axios from "axios";

const BASE_URL = "https://dbs-digital.myfreshworks.com/crm/sales";
const CONFIG = {
  headers: {
    Authorization: "Token token=pWIwgJ1gMqWscTMk7mQbCg",
    "Content-Type": "application/json",
  },
};

export async function callApiUpdateDeal(requestBody) {
  try {
    const response = await axios.put(`${BASE_URL}/api/deals/${requestBody.dealId}?include=products`, requestBody, CONFIG);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Erro ao fazer a solicitação PUT.");
  }
}
