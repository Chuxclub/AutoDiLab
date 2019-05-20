/* ==================== SECUNDARY FUNCTIONS ==================== */
function add_button(button_image, button_span, table, row_index, cell_index)
{
  table.childNodes[row_index].childNodes[cell_index].appendChild(button_span);
  table.childNodes[row_index].childNodes[cell_index].insertBefore(button_image, button_span);

  return table;
}

function add_header(header_image, header_caption, table)
{
  table.insertBefore(header_caption, table.childNodes[0]);
  table.insertBefore(header_image, header_caption);

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
      break;

      case "div":
      cells[i] = create_div();
      break;

      default:
      window.alert("Error, element isn't supported or doesn't exist");
      break;
    }

    cells[i] = create_a();
  }

  for(let i = 0; i < cells.length; i++)
  {
    cells[i].setAttribute("class", "cell");
  }

  for(let i = 0; i < cells.length; i++)
  {
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
  //Erasing previous nav menu
  clear_slate("nav", 0);


  //Creating new_table based on website author's needs
  let new_table = create_fake_table(1);
  new_table = create_cells ("a", 4, new_table, 0);


  //Creating required buttons and elements to add to the table
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


  //Adding created buttons and elements to the table
  new_table = add_header(nav_header[0], nav_header[1], new_table);
  new_table = add_button(arithmetic_button[0], arithmetic_button[1], new_table, 2, 0);
  new_table = add_button(analysis_button[0], analysis_button[1], new_table, 2, 1);
  new_table = add_button(geometry_button[0], geometry_button[1], new_table, 2, 2);
  new_table = add_button(prob_sats_button[0], prob_sats_button[1], new_table, 2, 3);


  //Adding new navigation table to home page
  document.getElementsByTagName("nav")[0].appendChild(new_table);
}
