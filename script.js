async function getPh(){
    let pharmacyName = document.getElementById("phName")
    let city = document.getElementById("cityText");
    let adress = document.getElementById("adressText");
    let phoneNumber = document.getElementById("phoneNmb");
    const pharmacys = await fetch('https://api.collectapi.com/health/dutyPharmacy?ilce=babaeski&il=K%C4%B1rklareli', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'apikey 3RUOpnZW6CqXhF34uJchV2:2qzXzLjn2l6WhpMtAOpuqA'
      }
    });
    datajson = await pharmacys.json();
    pharmacyData = datajson.data;


    pharmacyName.innerHTML = datajson.result[1].name;
    city.innerHTML = datajson.result[1].dist;
    adress.innerHTML = datajson.result[1].address;
    phoneNumber.innerHTML = datajson.result[1].phone;
} 
getPh();