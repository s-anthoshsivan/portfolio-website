const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "files/santhoshsivan-resume.pdf"; // path to your PDF
  link.download = "Resume.pdf";   // name when downloaded
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});