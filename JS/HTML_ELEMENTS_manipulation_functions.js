/* ==================== ATTRIBUTES ==================== */
function append_attributes(html_element, attributes_array)
{
  for(let i = 0; i < attributes_array.length; i += 2)
  {
    html_element.setAttribute(attributes_array[i], attributes_array[i+1]);
  }
}


/* ==================== TAGS ==================== */
function create_img(img_src, img_alt)
{
  let new_dom_img = document.createElement("img");

  new_dom_img.src = img_src;
  new_dom_img.alt = img_alt;

  return new_dom_img;
}

function create_span(span_class, span_txt)
{
  let span = document.createElement("span");
  let span_content = document.createTextNode(span_txt);
  span.setAttribute("class", span_class);
  span.appendChild(span_content);
  return span;
}


/* ==================== PRE-EDITED WITH CSS ==================== */

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~ GRIDS ~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
function create_grid(element_container, nb_of_rows, nb_of_columns, size_of_rows, size_of_columns)
{
  let new_submenu_container = document.createElement(element_container);
  new_submenu_container.style.display = "grid";

  for(let i = 0; i < nb_of_columns; i++)
  {
    new_submenu_container.style.gridTemplateColumns += " " + size_of_columns;
  }

  for(let i = 0; i < nb_of_rows; i++)
  {
    new_submenu_container.style.gridTemplateRows += " " + size_of_rows;
  }

  return new_submenu_container;
}
