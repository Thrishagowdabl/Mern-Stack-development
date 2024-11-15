var express =require("express");
const mongoose = require("mongoose");
var app=express();
var mongoDB="mongodb://127.0.0.1/MyDB";
mongoose.connect(mongoDB).then((data)=>{console.log("DB Connection is succesful..");})
var db = mongoose.connection;
db.on("error",console.error.bind(console,"MongoDB connection error"));
app.listen(8001,function(req,res){console.log("server is listening at http://localhost:8001");})

var Schema = mongoose.Schema;
var RestaurantSchema=new Schema({

    "id":Number,
    "name":String,
    "type":String,
    "location":String,
    "rating":Number,
    "topfood":String

});
const restaurantTable=mongoose.model("Restaurant",RestaurantSchema);
const DoctorTable = mongoose.model('doctor', DoctorSchema);

// Insert initial data
const insertInitialData = async () => {
    try {
        const existingData = await DoctorTable.find();
        if (existingData.length === 0) { // Check if collection is empty
            const initialDoctors = [
                {
                    id: 1,
                    name: "Dr. John Doe",
                    specification: "Cardiologist",
                    phone_num: 1234567890,
                    location: "New York"
                },
                {
                    id: 2,
                    name: "Dr. Jane Smith",
                    specification: "Dermatologist",
                    phone_num: 9876543210,
                    location: "Los Angeles"

app.get("/getSllRestaurant",function(req,res){
    restaurantTable.find().then((data)=>{
        console.log(data)
        res.status(200).send(data)
    }).catch(err =>{

        res.status(400).send(err);
    });
});
