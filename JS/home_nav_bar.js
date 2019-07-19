/* ==================== MAIN FUNCTIONS ==================== */

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

function show_next_submenu(chosen_button)
{
  let nav_bar = document.getElementsByTagName("nav")[0];
  let newsfeed = document.getElementById("newsfeed");
  let button_name = chosen_button.getElementsByTagName("figcaption")[0].innerText;

  clean_slate(nav_bar);
  full_clean_slate(newsfeed);

  switch(button_name)
  {

    //Sciences
    case "Formelles":
      create_sciences_formelles_submenu();
    break;

    case "Naturelles":
    break;

    case "Humaines":
    break;

    case "Appliquées":
    break;

    //Vie quotidienne
    case "Entretiens":
    break;

    case "Relations":
    break;

    case "Orientation":
    break;

    case "Entraide":
    break;

    //Arts
    case "Littérature":
    break;

    case "Visuels":
    break;

    case "Spectacle/Son":
    break;

    case "Appliqués":
    break;

    default:
    window.alert("Quelque-chose ne s'est pas passé comme prévu, veuillez contacter l'administrateur de ce site");
    break;
  }
}

/* ==================== SECUNDARY FUNCTIONS ==================== */

function create_button(img_src, img_alt, caption)
{
  let button = document.createElement("figure");
  let button_picture = document.createElement("img");
  let button_caption_container = document.createElement("figcaption");
  let button_caption = document.createTextNode(caption);

  button_picture.src = img_src;
  button_picture.alt = img_alt;
  button_picture.className = "icon_loner";
  button.className = "button";

  button_caption_container.className = "simple_caption";

  button.appendChild(button_picture);
  button_caption_container.appendChild(button_caption);
  button.appendChild(button_caption_container);

  return button;
}

function create_submenu_grid(element_container, id, nb_of_rows, nb_of_columns, size_of_rows, size_of_columns)
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

function create_sciences_formelles_submenu()
{
  //Creating submenu container
  let formal_sciences_submenu_container = create_submenu_grid("div", "formal_sciences_container", 1, 2, "300px", "50vw");
  let home_storyboard = document.getElementById("storyboard");

  document.getElementsByTagName("body")[0].insertBefore(formal_sciences_submenu_container, home_storyboard);

  let formal_sciences_container = document.getElementById("formal_sciences_container");

  //Creating the columns
  formal_sciences_container.appendChild(document.createElement("div"));
  formal_sciences_container.appendChild(document.createElement("div"));

  let maths_column = formal_sciences_container.children[0];
  let cs_column = formal_sciences_container.children[1];

  //Adding Titles to columns
  maths_column.appendChild(document.createElement("h2"));
  cs_column.appendChild(document.createElement("h2"));

  let maths_title = formal_sciences_container.children[0].children[0];
  let cs_title = formal_sciences_container.children[1].children[0];

  formal_sciences_container.children[0].children[0].appendChild(document.createTextNode("Mathématiques"));
  formal_sciences_container.children[1].children[0].appendChild(document.createTextNode("Informatique"));

  //Creating maths grid with buttons
  let maths_submenu_grid = create_submenu_grid("div", "maths_submenu", 2, 4, "110px", "150px");

  maths_column.appendChild(maths_submenu_grid);

  let maths_submenu = maths_column.children[1];

  let analysis_button = create_button("./Icons/icons8-minimum-value-512.png", "Analyse", "Analyse");
  let arithmetic_button = create_button("./Icons/icons8-math-64.png", "Arithmétique", "Arithmétique");
  let statistics_button = create_button("./Icons/icons8-statistics-64.png", "Statistique", "Statistique");
  let probabilities_button = create_button("./Icons/icons8-dice-64.png", "Probabilités", "Probabilités");

  let methodology_button = create_button("./Icons/icons8-checklist-64.png", "Méthodes", "Méthodes");
  let geometry_button = create_button("./Icons/icons8-measurement-tool-64.png", "Géométrie", "Géométrie");
  let algebra_button = create_button("./Icons/icons8-data-sheet-64.png", "Algèbre", "Algèbre");
  let misc_button = create_button("./Icons/icons8-ask-question-64.png", "Autres", "Autres");

  maths_submenu.appendChild(analysis_button);
  maths_submenu.appendChild(arithmetic_button);
  maths_submenu.appendChild(statistics_button);
  maths_submenu.appendChild(probabilities_button);

  maths_submenu.appendChild(methodology_button);
  maths_submenu.appendChild(geometry_button);
  maths_submenu.appendChild(algebra_button);
  maths_submenu.appendChild(misc_button);
}
