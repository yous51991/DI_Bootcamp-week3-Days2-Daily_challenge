let btn = document.getElementById("lib-button");
btn.addEventListener("click", libClick);

function getFormData() {
  let noun = document.getElementById("noun").value;
  let adjective = document.getElementById("adjective").value;
  let person = document.getElementById("person").value;
  let verb = document.getElementById("verb").value;
  let place = document.getElementById("place").value;
  return { noun, adjective, person, verb, place };
}

function libClick(e) {
  e.preventDefault();
  let { noun, adjective, person, verb, place } = getFormData();
  if ([noun, adjective, person, verb, place].includes("")) return;
  let story = Stories()
  let span = document.getElementById("story");
  span.textContent = story;
}

function Stories() {
  let { noun, adjective, person, verb, place } = getFormData();
  return `le mot ${noun} a pour adjective ${adjective}  dont ${person} emploie beaucoup avec le verbe ${verb} dans son ${place} `;
}
