const imageInput = document.getElementById("imageInput");
const removeBtn = document.getElementById("removeBtn");
const resultImage = document.getElementById("resultImage");
const downloadLink = document.getElementById("downloadLink");

removeBtn.addEventListener("click", async () => {
    const file = imageInput.files[0];

    if (!file) {
        return;
    }

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("http://localhost:8000/remove-bg", {
        method: "POST",
        body: formData,
    });

    const blob = await response.blob();
    const imageURL = URL.createObjectURL(blob);

    resultImage.src = imageURL;
    downloadLink.href = imageURL;
    downloadLink.style.display = "inline";
});