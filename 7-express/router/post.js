import express from "express";

const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    res.status(201).send("GET /posts");
  })
  .post((req, res) => {
    res.status(201).send("POST /posts");
  });
router
  .route("/:id")
  .put((req, res) => {
    res.status(201).send("PUT /posts");
  })
  .delete((req, res) => {
    res.status(201).send("DELETE /posts");
  });

export default router;
