var btn = document.getElementById("btn");
var articlesDiv = document.getElementById("articles");
console.log(btn)

btn.addEventListener("click", function () {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://content.guardianapis.com/uk?show-editors-picks=true&api-key=90661c9e-7226-48d3-b5dd-6d9260772019');
  console.log(xhr)
  xhr.send();
  xhr.onload = function () {
    var response = JSON.parse(xhr.responseText);
    renderHTML(response);
    console.log(response);
  };
});

function renderHTML(data) {
  var responseString = "";

  for (i = 0; i< data.response.editorsPicks.length; i++) {
    responseString += "<a style='text-decoration: none' href='" + data.response.editorsPicks[i].webUrl + "'>" + data.response.editorsPicks[i].webTitle + "</a><br><br>";
  }
    articlesDiv.insertAdjacentHTML('beforeend', responseString);
}
