document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const pdfModal = document.getElementById("pdf-modal");
const pdfViewer = document.getElementById("pdf-viewer");
const pdfDownload = document.getElementById("pdf-download");
const closePdf = document.getElementById("close-pdf");

if (pdfModal) {
  document.querySelectorAll(".open-pdf").forEach(btn => {
    btn.addEventListener("click", () => {
      const file = btn.getAttribute("data-file");
      pdfViewer.src = file;
      pdfDownload.href = file;
      pdfModal.style.display = "block";
    });
  });

  closePdf.addEventListener("click", () => {
    pdfModal.style.display = "none";
    pdfViewer.src = "";
  });

  window.addEventListener("click", (e) => {
    if (e.target === pdfModal) {
      pdfModal.style.display = "none";
      pdfViewer.src = "";
    }
  });
}