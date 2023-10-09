document.addEventListener("DOMContentLoaded", function () {
    const zoomInButton = document.getElementById("zoom-in");
    const zoomOutButton = document.getElementById("zoom-out");

    let currentZoom = 100;

    zoomInButton.addEventListener("click", function () {
        currentZoom += 10;
        document.body.style.zoom = currentZoom + "%";
    });

    zoomOutButton.addEventListener("click", function () {
        currentZoom -= 10;
        document.body.style.zoom = currentZoom + "%";
    });
});
