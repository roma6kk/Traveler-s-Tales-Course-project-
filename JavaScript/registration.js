document.getElementById("registration").addEventListener("click", function() {
    let email = document.getElementById("mail").value;
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;

    let userData = {
        email: email,
        name: name,
        password: password
    };

    let jsonData = JSON.stringify(userData, null, 2);

    let jsonBlob = new Blob([jsonData], { type: "application/json" });
    let jsonUrl = URL.createObjectURL(jsonBlob);

    let xmlData = convertToXml(userData); 
    let xmlBlob = new Blob([xmlData], { type: "application/xml" });
    let xmlUrl = URL.createObjectURL(xmlBlob);

    let jsonLink = document.createElement("a");
    jsonLink.href = jsonUrl;
    let jsonTimestamp = new Date().getTime();
    jsonLink.download = "data_registration_" + jsonTimestamp + ".json";

    let xmlLink = document.createElement("a");
    xmlLink.href = xmlUrl;
    let xmlTimestamp = new Date().getTime();
    xmlLink.download = "data_registration_" + xmlTimestamp + ".xml";

    jsonLink.click();
    xmlLink.click();

    URL.revokeObjectURL(jsonUrl);
    URL.revokeObjectURL(xmlUrl);
});

function convertToXml(obj) {
    let xml = '';
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            xml += "<" + prop + ">" + obj[prop] + "</" + prop + ">";
        }
    }
    return "<root>" + xml + "</root>";
}