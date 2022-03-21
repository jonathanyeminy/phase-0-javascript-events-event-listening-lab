function addingEventListener() {
    const input = document.getElementById('input');

function clickAlert() {
  console.log("I was clicked")
  alert('I was clicked!');
}

input.addEventListener('click', clickAlert);
}
