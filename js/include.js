function includeHTML() {
  var z, i, elmnt, file, xhttp;
  z = document.querySelectorAll("#include");
  z.forEach((item, i) =>{
    elmnt = item;
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3include");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3include");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }

  });
}