/* ==================== DOM CREATION FUNCTIONS ==================== */
function create_grid(element_container, id, nb_of_rows, nb_of_columns, size_of_rows, size_of_columns)
{
  let new_submenu_container = document.createElement(element_container);
  new_submenu_container.style.display = "grid";
  new_submenu_container.id = id;

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

function create_span(span_class, span_txt)
{
  let span = document.createElement("span");
  let span_content = document.createTextNode(span_txt);
  span.setAttribute("class", span_class);
  span.appendChild(span_content);
  return span;
}


/* ==================== DOM DELETION FUNCTIONS ==================== */
function clean_slate(starting_node)
{
  while(starting_node.hasChildNodes())
  {
    starting_node.removeChild(starting_node.firstChild);
  }
}

function full_clean_slate(starting_node)
{
  while(starting_node.hasChildNodes())
  {
    starting_node.removeChild(starting_node.firstChild);
  }
  starting_node.parentNode.removeChild(starting_node);
}
