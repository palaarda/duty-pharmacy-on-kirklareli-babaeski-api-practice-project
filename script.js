async function getPh(){
    let pharmacyName = document.getElementById("phName")
    let city = document.getElementById("cityText");
    let adress = document.getElementById("adressText");
    let phoneNumber = document.getElementById("phoneNmb");
    const pharmacys = await fetch('https://www.nosyapi.com/apiv2/pharmacyLink?city=kirklareli&county=babaeski&apikey=cR5vc7B9gtZmOUKCBAQshJcIpPyNRwedlLKM8siczdSqaSYsNeTCTjkne80R',)
    datajson = await pharmacys.json();
    pharmacyData = datajson.data;
    
    const phS = pharmacyData.filter(function(pharmacy){
        return pharmacy.Semt == false;
    })
    const getPharmacy = phS[0];
    pharmacyName.innerHTML = getPharmacy.EczaneAdi;
    city.innerHTML = getPharmacy.Sehir;
    adress.innerHTML = getPharmacy.Adresi;
    phoneNumber.innerHTML = getPharmacy.Telefon;
} 
getPh();