const express = require('express');
const App = express();
const data = require('./data.json')

App.use(express.json());

App.get("/clients", function(req, res) {
    res.json(data);
});

App.get("/clients/:id", function(req, res) {
    const {id} = req.params;
    const client = data.find(cli => cli.id = id)

    if (!client) return res.status(404).json();

    res.json(client);
});

App.post("/clients", function(req, res) {
    const {nome, email} = req.body;

    res.json({nome, email});
});

App.put("/clients/:id", function(req, res) {
    const {id} = req.params;
    const client = data.find(cli => cli.id = id);

    if (!client) return res.status(204).json();

    const {name} = req.body;
    client.name = name;

    res.json(client)
});

App.delete("/clients/:id", function(req, res) {
    const {id} = req.params;
    const clientDeleted = data.find(cli => cli.id != id);

   res.json(clientDeleted);
});

App.listen(3000, () => {
    console.log("Server is on!")
})