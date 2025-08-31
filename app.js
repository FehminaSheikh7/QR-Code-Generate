function generate() {
  const input = document.getElementById("text").value;

  
  if (!input) return alert("Please Enter Text or URL");

  
  const qrImage = `https://quickchart.io/qr?text=${encodeURIComponent(input)}`;


  document.getElementById("qrBox").innerHTML = `
    <img src="${qrImage}" alt="QR Code">
  `;
}