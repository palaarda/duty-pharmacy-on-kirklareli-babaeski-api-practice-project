async function getPh(){

    const phData = await fetch('https://www.nosyapi.com/apiv2/pharmacyLink?city=kirklareli&county=babaeski&apikey=cR5vc7B9gtZmOUKCBAQshJcIpPyNRwedlLKM8siczdSqaSYsNeTCTjkne80R', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer cR5vc7B9gtZmOUKCBAQshJcIpPyNRwedlLKM8siczdSqaSYsNeTCTjkne80R` 
        }
    })
    datajson = await phData.json();
    aData= datajson.data;
    let pharmacyName = document.getElementById("phName")
    let city = document.getElementById("cityText");
    let adress = document.getElementById("adressText");
    let phoneNumber = document.getElementById("phoneNmb");
    
    const phS = aData.filter(function(aDatas){
        return aDatas.Semt == false;
    })
    
    pharmacyName.innerHTML = phS[0].EczaneAdi;
    city.innerHTML = phS[0].Sehir;
    adress.innerHTML = phS[0].Adresi;
    phoneNumber.innerHTML = phS[0].Telefon;

} 
getPh();