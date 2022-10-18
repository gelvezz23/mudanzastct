$(document).ready(function () {
  $("#myModal").modal("show");
});
const btn = document.getElementById("buttonClose");

btn.addEventListener("click", () => {
  $("#myModal").modal("hide");
  $("#myModal").on("hidden.bs.modal", function (e) {
    // do something...
  });
});
