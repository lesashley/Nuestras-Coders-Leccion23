var content = document.getElementById("content");
var docFragment = document.createDocumentFragment();

var files = [{src : "assets/images/25.png",name:"Erika Vidal"},{src : "assets/images/26.png", name:"Katherine Ortega"},
            {src : "assets/images/27.png",name:"Schelsen Majuan"},{src : "assets/images/28.png", name:"Flor Tello"},
            {src : "assets/images/29.png",name:"Leslie Avendaño"},{src : "assets/images/30.png", name:"Cindy Mendoza"}]

function createHeader(dfm) {
  var boxHeader = document.createElement("article");
  var title = document.createElement("h3");
  var border = document.createElement("div");

  boxHeader.setAttribute("class","box-header");
  border.setAttribute("class","line");

  title.appendChild(document.createTextNode("Nuestras Coders"));
  boxHeader.appendChild(title);
  boxHeader.appendChild(border);
  dfm.appendChild(boxHeader);
  return dfm;
}

function createImages(dfm,src,name) {
  var contentImage = document.createElement("div");
  var img = document.createElement("img");
  var figcaption = document.createElement("figcaption");

  img.src = src;
  contentImage.setAttribute("class","box-pictures");
  img.setAttribute("class","picture");

  dfm.appendChild(contentImage);
  contentImage.appendChild(img);
  contentImage.appendChild(figcaption);
  figcaption.appendChild(document.createTextNode(name));
  return dfm;
}

window.addEventListener("load",function () {
  content.appendChild(createHeader(docFragment));
  files.forEach(function (e) {
    createImages(docFragment,e.src,e.name);
  })
content.appendChild(docFragment);
})
