const axios = require('axios');
const Simptom = require('../models/simptom');
const Pharmacy = require('../models/pharmacy');
const Appointment = require('../models/appointment');
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
    let i = 0;
    while(true) {
        if (typeof nearAptekas.data.results[i] != 'undefined') {
            apt = await Pharmacy.findOne({name: nearAptekas.data.results[i].name}).exec();
            apt.medicaments.forEach((med) => {
                if (req.body.needMeds.indexOf(med.name) >= 0) {
                    m.push({
                        apt_name: apt.name, apt_place: apt.place, apt_time: apt.opening_hours, m_name: med.name,
                        m_available: med.available ? 'Є в наявності' : 'Немає в наявності', m_price: med.price
                    });
                }
            });
        } else {
            break;
        }
        i++;
    }
    res.send({apt:nearAptekas.data.results,med: m});
}

exports.Postsimptoms = async function(req, res) {
    const simptom = await Simptom.findOne({name:{$in: [req.body.msg]}}).exec();
    res.send(simptom);
}

exports.simptoms = async function(req, res) {
    const simptom = await Simptom.findOne({name:{$in: [req.query.s]}}).exec();
    res.send(simptom);
}

exports.appointment = async function(req, res) {
    let errors = [];
    let check = await Appointment.findOne({doctor_name: req.body.doctor_name, day_ap: req.body.writeDay, time_ap: req.body.time}).exec();
    if (check != null) {
        errors.push("Оберіть інший час, оскільки цей вже зайнято");
    }
    if (req.body.fio == "") {
        errors.push("Введіть ПІБ");
    }
    if (req.body.doctor_name == "") {
        errors.push("Введіть лікаря");
    }
    if (req.body.writeDay == "") {
        errors.push("Введіть день ваших відвідин");
    }
    if (req.body.time == "") {
        errors.push("Введіть час ваших відвідин");
    }
    if (req.body.report == "") {
        errors.push("Введіть ваші симптоми");
    }
    if (errors.length > 0) {
        res.send({errors:errors});
    } else {
        const ap = await Appointment.create({fio: req.body.fio,doctor_name:req.body.doctor_name,day_ap:req.body.writeDay,time_ap:req.body.time,report:req.body.report});
        res.send({status: 200});
    }
}

function searchNearBy(API_KEY, radius, lat, lng){
    return new Promise((resolve, reject) => {
        axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&language=uk&radius=${radius}&type=pharmacy&key=`+API_KEY)
            .then((response) => resolve(response));
    });
}
