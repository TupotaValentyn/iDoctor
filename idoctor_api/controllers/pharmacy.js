const axios = require('axios');
const Simptom = require('../models/simptom');
const googlePlace = require('../config/googlePlaceApi');

exports.near = async function(req, res) {
    let radius = 100;
    var nearAptekas = {};
    while (true) {
        nearAptekas = await searchNearBy(googlePlace.API_KEY, radius, req.body.lat, req.body.lng);
        console.log(nearAptekas.data);
        if (nearAptekas.data.status != 'ZERO_RESULTS') break;
        else radius += 100;
    }
    res.send(nearAptekas.data.results);
}

exports.simptoms = async function(req, res) {
    const simptom = await Simptom.findOne({name:{$in: [req.query.s]}}).exec();
    res.send(simptom);
}

function searchNearBy(API_KEY, radius, lat, lng){
    return new Promise((resolve, reject) => {
        axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${radius}&type=pharmacy&key=`+API_KEY)
            .then((response) => resolve(response));
    });
}
