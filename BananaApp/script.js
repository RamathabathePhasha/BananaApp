document.addEventListener('DOMContentLoaded', () => {
    const qrcodeCanvas = document.getElementById('qrcode');
    const url = 'https://your-public-url-here.com'; // Replace with your hosted URL

    QRCode.toCanvas(qrcodeCanvas, url, { width: 200 }, function (error) {
        if (error) console.error(error);
        console.log('QR code generated successfully!');
    });
});
