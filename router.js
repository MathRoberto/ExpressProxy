import { Router } from "express";
import callApiGetProdutos from "./callGETProducts.js";
import checkForLifesigns from "./checkForLifesigns.js";
import callApiGetDeals from "./callGETDeals.js";
import callApiUpdateDeal from "./callApiUpdateDeal.js";

const router = Router();


router.get("/produtos", callApiGetProdutos);
router.get("/check", checkForLifesigns);
router.get("/negocios", callApiGetDeals);
router.put("/adicionarproduto", callApiUpdateDeal);

export default router;
