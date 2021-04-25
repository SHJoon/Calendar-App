const eventController = require("../controllers/events.controller");

module.exports = (app) => {
    app.get("/api/events", eventController.getAll);
    app.post("/api/events/create", eventController.create);
    app.get("/api/events/:id", eventController.getOne);
    app.put("/api/events/:id", eventController.update);
    app.delete("/api/events/:id", eventController.delete);
}
