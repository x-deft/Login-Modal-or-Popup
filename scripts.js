document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("modal");
    var openModalBtn = document.getElementById("openModalBtn");
    var closeModalBtn = document.getElementById("closeModalBtn");
    var modalContent = document.getElementById("modalContent");

    openModalBtn.onclick = function() {
        modal.style.display = "block";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }

    closeModalBtn.onclick = function() {
        modal.style.display = "none";
        document.body.style.backgroundColor = "";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.style.backgroundColor = "";
        }
    }
});
