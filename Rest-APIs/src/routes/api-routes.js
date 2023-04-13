const routes = (app) => {
  app
    .route("/contact")
    .get((req, res) => res.send("Get request Successful!!!"))

    .post((req, res) => res.send("POST request Successful!!!"));

  app
    .route("/contact/:contactId")
    .put((req, res) => res.send("PUT request Successful!!!"))

    .delete((req, res) => res.send("DELETE request Successful!!!"));
};

export default routes;
