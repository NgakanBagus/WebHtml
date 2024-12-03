document.getElementById("showMessageBtn").addEventListener("click", function() {
    const messageElement = document.getElementById("message");
    messageElement.textContent = "Tombol telah ditekan!";
    messageElement.style.color = "green";
});
