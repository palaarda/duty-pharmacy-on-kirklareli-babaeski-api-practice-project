
async function getPh() {
    const pharmacyName = document.getElementById("phName");
    const city = document.getElementById("cityText");
    const address = document.getElementById("addressText");
    const phoneNumber = document.getElementById("phoneNmb");

    const API_KEY = "YOUR_API_KEY";

    try {
        const response = await fetch(
            "https://api.collectapi.com/health/dutyPharmacy?ilce=babaeski&il=K%C4%B1rklareli",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": API_KEY
                }
            }
        );

        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        const data = await response.json();
        const pharmacy = data.result?.[0];

        if (!pharmacy) {
            throw new Error("No pharmacy data found.");
        }

        pharmacyName.textContent = pharmacy.name || "Not available";
        city.textContent = pharmacy.dist || "Not available";
        address.textContent = pharmacy.address || "Not available";

        phoneNumber.textContent = pharmacy.phone || "Not available";
        phoneNumber.href = pharmacy.phone
            ? `tel:${pharmacy.phone.replace(/[^\d+]/g, "")}`
            : "#";

    } catch (error) {
        console.error("Pharmacy data could not be loaded:", error);

        pharmacyName.textContent = "Data could not be loaded add your API key";
        city.textContent = "-";
        address.textContent = "-";
        phoneNumber.textContent = "-";
        phoneNumber.href = "#";
    }
}

getPh();
