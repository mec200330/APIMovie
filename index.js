const { request } = require("express");
const express = require("express");
const cors = require ('cors');
const app = express();
const PORT = 3011;


const movielist = require("./movielist.json");

app.use(cors())
app.get("/", (request, response)=>{
    response.send({response: true, code: 200, movielist: movielist})
} );

app.get("/:id", (request, response)=>{
const {id}= request.params;
const results = movielist.filter(movie => movie.id === Number(id))
response.status(200).send({response: true, movielist: results})
})

app.post("/create", (req, res)=>{
    
})

app.listen(PORT, ()=>{
console.log(`Server listening on port ${PORT}...`);
});