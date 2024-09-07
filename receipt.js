fetch('navbar.html')
.then(response => response.text())
.then(data => {
    document.getElementById('navbar-placeholder').innerHTML = data;
});
const container = document.querySelector('.container');
const dateElement = document.getElementById('date');

function getCurrentDate() {
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = now.toLocaleDateString('en-US', options);
  dateElement.textContent = formattedDate;
}

// Call the function once to display immediately
getCurrentDate();


const downloadBtn = document.getElementById('back-7');
const popupNotification = document.getElementById('popup-notification');

downloadBtn.addEventListener('click', () => {
    showPopupNotification();
});

function showPopupNotification() {
    popupNotification.style.display = 'block';

    // Hide the notification after 3 seconds
    setTimeout(() => {
        popupNotification.style.display = 'none';
    }, 7000);
}
function showDownloadNotification() {
    const element = document.body; // you can specify any element you want to convert to PDF
    const opt = {
        margin: 0.5,
        filename: 'receipt.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(element).set(opt).save();
}
