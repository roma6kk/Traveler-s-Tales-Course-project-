document.getElementById("send").addEventListener("click", function() {
    let email = document.getElementById("email").value;

    let userData = {
        email: email
    };

    let jsonData = JSON.stringify(userData, null, 2);

    let xmlData = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xmlData += '<user>\n';
    xmlData += '  <email>' + email + '</email>\n';
    xmlData += '</user>';

    let jsonBlob = new Blob([jsonData], { type: "application/json" });
    let jsonUrl = URL.createObjectURL(jsonBlob);

    let xmlBlob = new Blob([xmlData], { type: "application/xml" });
    let xmlUrl = URL.createObjectURL(xmlBlob);

    let jsonLink = document.createElement("a");
    jsonLink.href = jsonUrl;

    let xmlLink = document.createElement("a");
    xmlLink.href = xmlUrl;

    let timestamp = new Date().getTime();
    jsonLink.download = "data_email_" + timestamp + ".json";
    xmlLink.download = "data_email_" + timestamp + ".xml";

    jsonLink.click();
    xmlLink.click();

    URL.revokeObjectURL(jsonUrl);
    URL.revokeObjectURL(xmlUrl);
});