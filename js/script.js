// var pTag= document.createElement('p');
// document.body.append(pTag);
// pTag.innerHTML = 'testing';

//create an ajax request fetch from
fetch("https://jsonplaceholder.typicode.com/photos")
  .then(res => res.json())
  .then(json =>
    json.slice(0, 10).map(pic => {
      var ul = document.createElement("ul");
      var liId = document.createElement("li");
      var liTitle = document.createElement("li");
      var urlImg = document.createElement("img");

      liId.innerHTML = pic.id;
      liTitle.innerHTML = pic.title;
      urlImg.setAttribute("src", pic.url);
      ul.setAttribute("id", "ulInner");
      document.getElementById("ulContainer").append(ul);
      ul.append(liId);
      ul.append(liTitle);
      ul.append(urlImg);
    })
  );

var button = document.createElement("button");
button.innerHTML = "Click Me!";
document.body.append(button);

function displayItems() {
  var toggleItem = document.getElementById("ulContainer");

  if (toggleItem.style.display === "") {
    toggleItem.style.display = "block";
  } else {
    toggleItem.style.display = "";
  }
}

button.addEventListener("click", displayItems);
