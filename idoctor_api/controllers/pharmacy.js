const axios = require('axios');
const Simptom = require('../models/simptom');
const Pharmacy = require('../models/pharmacy');
const googlePlace = require('../config/googlePlaceApi');

exports.near = async function(req, res) {
    let radius = 100;
    var nearAptekas = {};
    while (true) {
        nearAptekas = await searchNearBy(googlePlace.API_KEY, radius, req.body.lat, req.body.lng);
        if (nearAptekas.data.status != 'ZERO_RESULTS') break;
        else radius += 100;
    }
    let m = [];
    let apt = [];
    // console.log(nearAptekas.data.results);
    // nearAptekas.data.results.forEach(async (it) => {
    //     apt = await Pharmacy.findOne({name: it.name}).exec();
    //     if (apt != null) {
    //         apt.medicaments.forEach((med) => {
    //             m.push({apt_name: apt.name, apt_place: apt.place,m_name: med.name, m_available: med.available, m_price: med.price});
    //             // console.log(m);
    //         });
    //     }
    // });
    let i = 0;
    while(true) {
        if (typeof nearAptekas.data.results[i] != 'undefined') {
            apt = await Pharmacy.findOne({name: nearAptekas.data.results[i].name}).exec();
            apt.medicaments.forEach((med) => {
                m.push({apt_name: apt.name, apt_place: apt.place,apt_time: apt.opening_hours,m_name: med.name,
                    m_available: med.available ? 'Є в наявності' : 'Немає в наявності', m_price: med.price});
            });
        } else {
            break;
        }
        i++;
    }
    res.send({apt:nearAptekas.data.results,med: m});
}

exports.simptoms = async function(req, res) {
    const simptom = await Simptom.findOne({name:{$in: [req.query.s]}}).exec();
    res.send(simptom);
}

function searchNearBy(API_KEY, radius, lat, lng){
    return new Promise((resolve, reject) => {
        axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&language=uk&radius=${radius}&type=pharmacy&key=`+API_KEY)
            .then((response) => resolve(response));
    });
}
