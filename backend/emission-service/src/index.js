const express = require("express");
const app = express(); 
const cors = require("cors"); 
const pool = require("./db");
const { addEmission, getTodayUserEmissions, getAnnualEmissions } = require("./querys"); 

//middleware 
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

//create or log a new emmision based on individual activity
app.post("/emission/post", async(req, res) => {
    try{
        console.log(req.body);
        const { userId, emission } = req.body;

        if (!userId || !emission) {
            return res.status(400).json({ error: "Missing userId or emission data" });
        }

        const newEmission = await addEmission(userId, emission);
        res.status(201).json(newEmission); 

    } catch(err){
        console.log(err.message);
        res.status(500).json({ error: "Failed to add emission" });
    }
});

//delete an recorded emission

//get all daily emmision for a single user
app.get("/emission/today_data", async(req, res) => {
    try{
        console.log("query:", req.query);
        const { userId, date } = req.query;

        if (!userId || !date) {
            return res.status(400).json({ error: "Missing userId or date" });
        }

        const todayEmission = await getTodayUserEmissions(userId, date);
        res.status(200).json(todayEmission); 


    } catch(err){
        console.log(err.message);
        res.status(500).json({ error: "Failed to get daily emission data" });
    }
});

//get all emmisions for a single user (annual)
app.get("/emission/annual_data", async(req, res) => {
    try{
        console.log("query:", req.query);
        const { userId, year} = req.query;

        if (!userId || !year) {
            return res.status(400).json({ error: "Missing userId or year" });
        }

        const annualEmission = await getAnnualEmissions(userId, year);
        res.status(200).json(annualEmission); 

    } catch(err){
        console.log(err.message);
        res.status(500).json({ error: "Failed to get annual emission" });
    }
});


//ROUTES


app.listen(5003, () => {
    console.log("db service started on port 5003"); 
}); 