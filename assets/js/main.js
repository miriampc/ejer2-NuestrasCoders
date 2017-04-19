var ruta="assets/images/img-";
var coders=[{name:'Daguiana Revoredo',src:ruta},{name:'Grecia Rayme',src:ruta},{name:'Janine Vega',src:ruta},
            {name:'Michelle More',src:ruta},{name:'Mishel Velasquez',src:ruta},{name:'Rosario Felix',src:ruta}];

window.addEventListener('load',function(){
  var docFragment=document.createDocumentFragment();
  var contenedor=document.createElement('section');
  contenedor.setAttribute("id",'contenedor');

  var titulo=document.createElement('h3');
  titulo.appendChild(document.createTextNode("Nuestras Coders"));

  contenedor.appendChild(titulo);

  coders.forEach(function(e,id){
    var figure=document.createElement('figure');
    var image=document.createElement('img');
    var span=document.createElement('span');

    figure.setAttribute("class","js-figure");
    image.setAttribute("alt",e.name);
    image.src=e.src+id+".jpg";

    span.appendChild(document.createTextNode(e.name));
    figure.appendChild(image);
    figure.appendChild(span);
    docFragment.appendChild(figure);
    contenedor.appendChild(docFragment);
  });
  document.body.appendChild(contenedor);
});
