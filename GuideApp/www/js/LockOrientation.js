
window.plugins.orientationLock.lock("portrait");

window.addEventListener("orientationchange", function() {
    alert(window.orientation);
});