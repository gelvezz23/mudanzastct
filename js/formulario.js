const $form = document.querySelector("#form");
const $buttomMail = document.querySelector("#mailTo");

const handleSubmit = (event) => {
  event.preventDefault();
  const form = new FormData($form);
  $buttomMail.setAttribute(
    "href",
    `mailto:mao_23_@hotmail.com?subject=${form.get(
      "name"
    )} quiere una mudanza&body= para realizar una mudanza a nombre de ${form.get(
      "name"
    )} que se dirige desde : ${form.get("desde")} hasta : ${form.get(
      "hasta"
    )} contacto : ${form.get("celphone")} o al correo ${form.get("email")}`
  );
  $buttomMail.click();
};

$form.addEventListener("submit", handleSubmit);
