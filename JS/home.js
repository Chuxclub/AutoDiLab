/* ==================== SECUNDARY FUNCTIONS ==================== */

function clear_slate(obj, index)
{

  let element_children = document.getElementsByTagName(obj)[index].childNodes;

  for(let i = 0; i < element_children.length; i++)
  {
    element_children[i].remove();
  }

  for(let i = 0; i < element_children.length; i++)
  {
    element_children[i].remove();
  }
}

function create_a()
{
  let a = document.createElement("a");
  return a;
}

function create_image(img_path, img_alt)
{
  let image = document.createElement("img");
  image.setAttribute("src", img_path);
  image.setAttribute("alt", img_alt);
  return image;
}

function create_caption(caption_txt)
{
  let caption = document.createElement("caption");
  let caption_content = document.createTextNode(caption_txt);
  caption.appendChild(caption_content);
  return caption;
}

function create_div()
{
  let div = document.createElement("div");
  return div;
}

//Use #table, .row, .cell for this function to work
function create_fake_table(rows)
{
  let new_table = create_div();
  new_table.setAttribute("id", "table");

  let div_arr = [];

  for(let i = 0; i < rows; i++)
  {
    div_arr[i] = create_div();
  }

  for(let i = 0; i < div_arr.length; i++)
  {
    div_arr[i].setAttribute("class", "row");
  }

  for(let i = 0; i < div_arr.length; i++)
  {
    new_table.appendChild(div_arr[i]);
  }

  return new_table;

}

//Use .image_caption in css if you want this function to work
function create_nav_header(img_path, img_alt, img_title, header_title)
{
  let header_image = create_image(img_path, img_alt);
  let header_caption = create_caption(header_title);

  header_image.setAttribute("title", img_title);
  header_image.setAttribute("class", "icon");
  header_caption.setAttribute("class", "image_caption");

  header_image.style.marginLeft = "25px";

  let nav_header = [header_image, header_caption];
  return nav_header;
}

function create_nav_button(img_path, img_alt, img_title, img_span)
{
  let button_image = create_image(img_path, img_alt);
  let button_span = create_span(img_span);

  button_image.setAttribute("title", img_title);
  button_image.setAttribute("class", "icon");
  button_span.setAttribute("class", "image_caption");

  button_image.style.marginLeft = "25px";

  let nav_button = [button_image, button_span];
  return nav_button;
}

function create_span(span_txt)
{
  let span = document.createElement("span");
  let span_content = document.createTextNode(span_txt);
  span.appendChild(span_content);
  return span;
}
/* ==================== MAIN FUNCTIONS ==================== */

function maths_choices()
{
  let nav = document.getElementsByTagName("nav")[0];
  clear_slate("nav", 0);

  let new_table = create_fake_table(1);
  let nav_header = create_nav_header("./Icons/icons8-infinity-64.png",
                                     "Image représentant les mathématiques",
                                     "Mathématiques", "Mathématiques");
  let arithmetic_button = create_nav_button("./Icons/icons8-math-64.png",
                                            "Bouton arithmétique", "Choisir arithmétique",
                                            "Arithmétique");
  let analysis_button = create_nav_button("./Icons/icons8-minimum-value-512.png",
                                          "Bouton analyse", "Choisir analyse",
                                          "Analyse");
  let geometry_button = create_nav_button("./Icons/icons8-measurement-tool-64.png",
                                          "Bouton géométrie", "Choisir géométrie",
                                          "Géométrie");
  let prob_sats_button = create_nav_button("./Icons/icons8-statistics-64.png",
                                          "Bouton statistiques et probabilités",
                                          "Choisir statistiques et probabilités",
                                          "Statistiques et Probabilités");

  let cell0 = create_a();
  cell0.setAttribute("class", "cell");

  let cell1 = create_a();
  cell1.setAttribute("class", "cell");

  let cell2 = create_a();
  cell2.setAttribute("class", "cell");

  let cell3 = create_a();
  cell3.setAttribute("class", "cell");


  new_table.insertBefore(nav_header[1], new_table.childNodes[0]);
  new_table.insertBefore(nav_header[0], nav_header[1]);

  new_table.style.border = "solid black 1px";
  new_table.childNodes[2].style.border = "solid black 1px";

  new_table.childNodes[2].appendChild(cell0);
  new_table.childNodes[2].childNodes[0].appendChild(arithmetic_button[1]);
  new_table.childNodes[2].childNodes[0].insertBefore(arithmetic_button[0], arithmetic_button[1]);

  new_table.childNodes[2].appendChild(cell1);
  new_table.childNodes[2].childNodes[1].appendChild(analysis_button[1]);
  new_table.childNodes[2].childNodes[1].insertBefore(analysis_button[0], analysis_button[1]);

  new_table.childNodes[2].appendChild(cell2);
  new_table.childNodes[2].childNodes[2].appendChild(geometry_button[1]);
  new_table.childNodes[2].childNodes[2].insertBefore(geometry_button[0], geometry_button[1]);

  new_table.childNodes[2].appendChild(cell3);
  new_table.childNodes[2].childNodes[3].appendChild(prob_sats_button[1]);
  new_table.childNodes[2].childNodes[3].insertBefore(prob_sats_button[0], prob_sats_button[1]);

  nav.appendChild(new_table);

}
