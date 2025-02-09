export function downloadCV() {
  var pathCV = "/pdf.pdf";
  const link = document.createElement("a");
  link.href = pathCV;
  link.download = "pdf.pdf";
  link.click();
}
