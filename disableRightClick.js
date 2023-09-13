export function showWarning(event) {
    event.preventDefault();
    alert("You can't do that");
  }
  
  document.addEventListener("contextmenu", showWarning);
