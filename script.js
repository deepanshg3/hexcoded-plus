const cards = document.querySelectorAll(".video-card");
const modal = document.getElementById("modal");
const backdrop = document.getElementById("backdrop");
const closeBtn = document.getElementById("close");
const modalImage = document.getElementById("modalImage");
const processing = document.getElementById("processing");
const processingTitle = document.getElementById("processingTitle");
const processingSubtitle = document.getElementById("processingSubtitle");
const result = document.getElementById("result");
const resultTitle = document.getElementById("resultTitle");
const originalResult = document.getElementById("originalResult");
const enhancedResult = document.getElementById("enhancedResult");
const detailResult = document.getElementById("detailResult");
const detailOriginal = document.getElementById("detailOriginal");
const detailEnhanced = document.getElementById("detailEnhanced");

let current = "1";

const assets = {
  "1": {
    original: "generated-output/1.jpeg",
    upscale: "upscaled/1.jpg",
    color: "color-corrected/1.png"
  },
  "2": {
    original: "generated-output/2.jpg",
    upscale: "upscaled/2.jpg",
    color: "color-corrected/2.png"
  }
};

function openModal(id){
  current = id;
  modalImage.src = assets[id].original;
  originalResult.src = assets[id].original;
  result.classList.remove("show");
  detailResult.classList.remove("show");
  processing.classList.remove("show");
  backdrop.classList.add("open");
  modal.classList.add("open");
  modal.setAttribute("aria-hidden","false");
}

function closeModal(){
  modal.classList.remove("open");
  backdrop.classList.remove("open");
  modal.setAttribute("aria-hidden","true");
}

cards.forEach(card => card.addEventListener("click", () => openModal(card.dataset.id)));
closeBtn.addEventListener("click", closeModal);
backdrop.addEventListener("click", closeModal);
document.addEventListener("keydown", e => { if(e.key === "Escape") closeModal(); });

function setDetailCrop(el, src, crop) {
  el.style.backgroundImage = "url(" + src + ")";
  el.style.backgroundPosition = crop;
}

const detailCrops = {
  "1": "60% 55%",
  "2": "50% 72%"
};

document.querySelectorAll(".process-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const op = btn.dataset.op;
    const isUpscale = op === "upscale";
    processingTitle.textContent = isUpscale ? "Applying AI Upscale..." : "Applying Color Correction...";
    processingSubtitle.textContent = isUpscale ? "Enhancing your creative" : "Optimizing color and tone";
    processing.classList.add("show");
    result.classList.remove("show");
    detailResult.classList.remove("show");

    setTimeout(() => {
      enhancedResult.src = assets[current][op];
      resultTitle.textContent = isUpscale ? "AI UPSCALE · 4×" : "AI COLOR CORRECTION";
      processing.classList.remove("show");
      result.classList.add("show");

      if (isUpscale) {
        var crop = detailCrops[current] || "50% 50%";
        setDetailCrop(detailOriginal, assets[current].original, crop);
        setDetailCrop(detailEnhanced, assets[current].upscale, crop);
        detailResult.classList.add("show");
      } else {
        detailResult.classList.remove("show");
      }
    }, 2000);
  });
});
