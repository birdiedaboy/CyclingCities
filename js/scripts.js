function changeCityInput() {
    const cityOrganization = document.getElementById("cityOrganization").value;
    const cityLabel = document.getElementById("cityLabel");
    console.log(cityLabel);
    cityLabel.innerHTML = cityOrganization;
}