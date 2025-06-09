const QRForm = document.querySelector("#qr-form");
const QRText = document.querySelector("#text-input");
const QRCode = document.querySelector("#qr-code");
const QRColor = document.querySelector("#qr-color");
const downloadButton = document.querySelector("#download-button");


let qrCodeStyling = null;

QRForm.addEventListener("submit",function(event){
    event.preventDefault();

    if(QRText.value.trim() === ""){
        alert("please enter text to generate QR code");
        return;
    }

    QRCode.innerHTML = ""; 

    const data = QRText.value;
    const color = QRColor.value;
    qrCodeStyling = new QRCodeStyling({
        data,
        type: "svg",
        image: "https://cdn-icons-png.flaticon.com/512/732/732200.png",
        dotsOptions: {
            color,
            type: "rounded",
        }
    });
    qrCodeStyling.append(QRCode);
    QRForm.reset();
});

downloadButton.addEventListener("click",function(){
    if (qrCodeStyling === null){
        alert("Please generate QR code before downloading");
        return
    }
    qrCodeStyling.download();
});