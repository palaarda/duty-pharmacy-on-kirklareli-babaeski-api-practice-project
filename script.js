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


    pharmacyName.innerHTML = datajson.result[0].name;
    city.innerHTML = datajson.result[0].dist;
    adress.innerHTML = datajson.result[0].address;
    phoneNumber.innerHTML = datajson.result[0].phone;
} 
getPh();