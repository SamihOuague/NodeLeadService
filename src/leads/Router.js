const router = require("express").Router();
const { listLeads, addLead } = require("./Controller");

router.get("/list", listLeads);
router.post("/add", addLead);

module.exports = router;