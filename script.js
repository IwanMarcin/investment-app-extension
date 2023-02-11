let informations = {
  broker: "",
  file: "",
};
let filecontent = "";
document.getElementById("customFile").addEventListener("change", (event) => {
  const file2 = event.target.files[0];
  const reader = new FileReader();
  reader.readAsText(file2);
  reader.onload = () => {
    filecontent = reader.result;
  };
});

document.getElementById("submit").onclick = function () {
  informations.file = filecontent;
  informations.broker = document.getElementById("investor").value;
  console.log(informations);
};
