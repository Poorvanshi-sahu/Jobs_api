const express = require("express");
const router = express.Router();

const {
  getAllJobs,
  createJob,
  getJob,
  updatejob,
  deletejob,
} = require("../controllers/jobs");

router.route("/").get(getAllJobs).post(createJob);

router.route("/:id").get(getJob).patch(updatejob).delete(deletejob);

module.exports = router;
