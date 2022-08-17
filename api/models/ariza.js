const mongoose = require("mongoose")

const arizaSchema = mongoose.Schema(
    {
        name: String,
        surename: String,
        father_name: String,
        phone_number: {type: String, unique: true},
        passport_seria_number: {type: String, unique: true},
        passport_jshir: String,
        passport_location: String,
        birth_date: String,
        gender: String,
        nogironlik: String,
        region: String,
        city: String,
        street: String,
        home_number: String,
        bio_img: String,
        finished_study: String,
        country: String,
        university: String,
        study_type: String,
        study_lang: String,
        study_level: String,
        facultet: String,
            status: {type:Boolean, default: false},
            date: {type: Date, default: Date.now}
    }
)
module.exports = mongoose.model("Ariza", arizaSchema)
