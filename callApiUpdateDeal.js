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
    const dealId = req.params.id;
    console.log(dealId);
    const response = await axios.put(
      `${BASE_URL}/api/deals/${dealId}?include=products`,
      req.body,
      CONFIG
    );
    return res.status(200).send(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
}
