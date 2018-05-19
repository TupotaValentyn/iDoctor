const axios = require('axios');
exports.near = async function(req, res) {
    const API_KEY = 'AIzaSyDKDXIBED6ZQ312aSo0f2O4E33jB7YU7MA';
    let radius = 100;
    var nearAptekas = {};
    while (true) {
        nearAptekas = await searchNearBy(API_KEY, radius);
        console.log(nearAptekas.data);
        if (nearAptekas.data.status != 'ZERO_RESULTS') break;
        else radius += 100;
    }
    res.send(nearAptekas.data.results);
}

function searchNearBy(API_KEY, radius){
    return new Promise((resolve, reject) => {
        axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=49.431817699999996,32.056939&radius=${radius}&type=pharmacy&key=`+API_KEY)
            .then((response) => resolve(response));
    });
}
