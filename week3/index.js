document.addEventListener("DOMContentLoaded", takeOverAppleLink)

function handleAppleLink(event) {
  console.log(event)
  event.preventDefault()
  window.alert("Nope.")
}
  
function takeOverAppleLink() {
  let appleLink = document.querySelector("#apple");
  appleLink.addEventListener("click", handleAppleLink);
}

    // Classic-style anonymous function syntax
    // appleLink.addEventListener("click", function(e) {
    //   console.log(e);
    //   e.preventDefault();
    //   window.alert("Nice try!");
    // });

    // New-style "arrow" function syntax
    // appleLink.addEventListener("click", (e) => {
    //   console.log(e);
    //   e.preventDefault();
    //   window.alert("Nice try!");
    // });
