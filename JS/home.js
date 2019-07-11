/* ==================== SECUNDARY FUNCTIONS ==================== */
function add_button(button_image, button_span, table, row_index, cell_index)
{
  table.childNodes[row_index].childNodes[cell_index].appendChild(button_span);
  table.childNodes[row_index].childNodes[cell_index].insertBefore(button_image, button_span);

  return table;
}

function add_header(header_image, header_element, table, row_index)
{
  let header = header_element.insertBefore(header_image, header_element.childNodes[0]);
  table.childNodes[row_index].appendChild(header_element);

  return table;
}

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

function create_cells(type_of_cells, nb_of_cells, table, row_index)
{
  let cells = [];

  for(let i = 0; i < nb_of_cells; i++)
  {
    switch(type_of_cells)
    {
      case "a":
      cells[i] = create_a();
      cells[i].setAttribute("class", "cell");
      //window.alert(cells[i].style.display == "table-cell");
      break;

      case "div":
      cells[i] = create_div();
      cells[i].setAttribute("class", "cell");
      break;

      default:
      window.alert("Error, element isn't supported or doesn't exist");
      break;
    }
    table.childNodes[row_index].appendChild(cells[i]);
  }
  return table;
}

function create_div()
{
  let div = document.createElement("div");
  return div;
}

//Use #table, .row, .cell in css if you want this function to work
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
    //window.alert(div_arr[i].style.display == "table-row");
  }

  for(let i = 0; i < div_arr.length; i++)
  {
    new_table.appendChild(div_arr[i]);
  }

  return new_table;

}

function create_header(header_txt)
{
  let header = document.createElement("th");
  let header_content = document.createTextNode(header_txt);
  header.appendChild(header_content);
  return header;
}

//Use .image_caption in css if you want this function to work
function create_nav_header(img_path, img_alt, img_title, header_title)
{
  let header_image = create_image(img_path, img_alt);
  let header_caption = create_header(header_title);

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

  // button_image.style.marginLeft = "25px";

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
function home_choices()
{
  //Erasing previous nav menu
  clear_slate("nav", 0);


  //Creating new_table based on website author's needs
  let new_table = create_fake_table(3);
  new_table = create_cells ("a", 4, new_table, 0);
  new_table = create_cells ("a", 4, new_table, 1);
  new_table = create_cells ("a", 4, new_table, 2);


  //Creating required buttons and elements to add to the table
  let math_button = create_nav_button("./Icons/icons8-infinity-64.png",
                                     "Image représentant les mathématiques",
                                     "Choisir Mathématiques", "Mathématiques");
  let physics_button = create_nav_button("./Icons/icons8-physics-64.png",
                                            "Bouton Physique-Chimie", "Choisir Physique-Chimie",
                                            "Physique-Chimie");
  let cs_button = create_nav_button("./Icons/icons8-informatics-64.png",
                                          "Bouton Informatique", "Choisir Informatique",
                                          "Informatique");
  let biology_button = create_nav_button("./Icons/icons8-leaf-64.png",
                                          "Bouton SVT", "Choisir SVT",
                                          "SVT");

  let litterature_button = create_nav_button("./Icons/icons8-book-64.png",
                                          "Bouton Littérature",
                                          "Choisir Littérature",
                                          "Littérature");
  let languages_button = create_nav_button("./Icons/icons8-language-64.png",
                                      "Bouton Langues",
                                      "Choisir Langues",
                                      "Langues");
  let history_button = create_nav_button("./Icons/icons8-world-map-64.png",
                                           "Bouton Histoire-Géographie",
                                           "Choisir Histoire-Géographie",
                                           "Histoire-Géographie");
  let arts_button = create_nav_button("./Icons/icons8-paint-palette-64.png",
                                           "Bouton Arts",
                                           "Choisir Arts",
                                           "Arts");

  let philosophy_button = create_nav_button("./Icons/icons8-idea-64.png",
                                           "Bouton Philosophie",
                                           "Choisir Philosophie",
                                           "Philosophie");
  let methodology_button = create_nav_button("./Icons/icons8-checklist-64.png",
                                           "Bouton Méthodologie",
                                           "Choisir Méthodologie",
                                           "Méthodologie");
  let society_button = create_nav_button("./Icons/icons8-user-groups-64.png",
                                           "Bouton Sciences Sociales",
                                           "Choisir Sciences Sociales",
                                           "Sciences Sociales");
  let browse_button = create_nav_button("./Icons/icons8-detective-64.png",
                                           "Bouton Rechercher",
                                           "Effectuer une recherche",
                                           "Faire une recherche");


  //Adding created buttons and elements to the table
  new_table = add_button(math_button[0], math_button[1], new_table, 0, 0);
  new_table = add_button(physics_button[0], physics_button[1], new_table, 0, 1);
  new_table = add_button(cs_button[0], cs_button[1], new_table, 0, 2);
  new_table = add_button(biology_button[0], biology_button[1], new_table, 0, 3);


  new_table = add_button(litterature_button[0], litterature_button[1], new_table, 1, 0);
  new_table = add_button(languages_button[0], languages_button[1], new_table, 1, 1);
  new_table = add_button(history_button[0], history_button[1], new_table, 1, 2);
  new_table = add_button(arts_button[0], arts_button[1], new_table, 1, 3);

  new_table = add_button(philosophy_button[0], philosophy_button[1], new_table, 2, 0);
  new_table = add_button(methodology_button[0], methodology_button[1], new_table, 2, 1);
  new_table = add_button(society_button[0], society_button[1], new_table, 2, 2);
  new_table = add_button(browse_button[0], browse_button[1], new_table, 2, 3);


  new_table.childNodes[0].childNodes[0].setAttribute("onclick", "maths_choices()");

  //Adding new navigation table to home page
  document.getElementsByTagName("nav")[0].appendChild(new_table);
}

function maths_choices()
{
  //Erasing previous nav menu
  clear_slate("nav", 0);


  //Creating new_table based on website author's needs
  let new_table = create_fake_table(3);
  new_table = create_cells ("a", 4, new_table, 1);
  new_table = create_cells ("a", 1, new_table, 2);


  //Creating required buttons and elements to add to the table
  // let nav_header = create_nav_header("./Icons/icons8-infinity-64.png",
  //                                     "Image représentant les mathématiques",
  //                                     "Mathématiques", "Mathématiques");
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
  let home_button = create_nav_button("./Icons/icons8-home-page-64.png",
                                      "Bouton pour retourner à l'accueil",
                                      "Retourner à l'accueil",
                                      "Retour à l'accueil");


  //Adding created buttons and elements to the table
  // new_table = add_header(nav_header[0], nav_header[1], new_table, 0);
  let header = document.createElement("th");
  let header_content = document.createTextNode("Mathématiques");
  header.appendChild(header_content);
  new_table.childNodes[0].appendChild(header);
  new_table.childNodes[0].childNodes[0].style.position = "relative";
  new_table.childNodes[0].childNodes[0].style.left = "155px";
  new_table.childNodes[0].childNodes[0].style.paddingBottom = "20px";

  new_table = add_button(arithmetic_button[0], arithmetic_button[1], new_table, 1, 0);
  new_table = add_button(analysis_button[0], analysis_button[1], new_table, 1, 1);
  new_table = add_button(geometry_button[0], geometry_button[1], new_table, 1, 2);
  new_table = add_button(prob_sats_button[0], prob_sats_button[1], new_table, 1, 3);
  new_table = add_button(home_button[0], home_button[1], new_table, 2, 0);

  // new_table.childNodes[0].childNodes[0].style.position = "relative";
  // new_table.childNodes[0].childNodes[0].style.left = "155px";
  // new_table.childNodes[0].childNodes[0].style.padding = "0 0 30px 0";

  new_table.childNodes[2].childNodes[0].style.position = "absolute";
  new_table.childNodes[2].childNodes[0].style.left = "145px";
  new_table.childNodes[2].childNodes[0].setAttribute("onclick", "home_choices()");

  //Adding new navigation table to home page
  document.getElementsByTagName("nav")[0].appendChild(new_table);
}
