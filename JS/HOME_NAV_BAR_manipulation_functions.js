//WIP, serious redesign of how CSS classes and javascript work together has to be done.
//Several unefficient amendings are being made throughout the modules.
function add_path_bar()
{
  let nav_bar = document.getElementsByTagName("nav")[0];
  let home_button = create_button("./Icons/icons8-home-page-64.png", "Retourner à l'accueil", "");
  let path_arrow = document.createElement("img");
  home_button.children[0].style.width = "30px";
  home_button.children[0].style.height = "auto";
  home_button.style.margin = "0 0 0 0";
  home_button.style.padding = "5px 0 5px 0";
  home_button.style.height = "30px";
  home_button.style.width = "60px";
  home_button.style.display = "inline-block";

  nav_bar.appendChild(home_button);

  path_arrow.src = "./Icons/icons8-path-arrow-24.png";
  path_arrow.alt = "Path arrow";
  path_arrow.style.display = "inline-block";

  nav_bar.appendChild(path_arrow);

  nav_bar.style.display = "inline-block";
  nav_bar.style.borderBottom = "1px solid lightgrey";
  nav_bar.style.width = "100vw";
  nav_bar.style.height = "40px";
}

function show_next_submenu(chosen_button)
{
  let nav_bar = document.getElementsByTagName("nav")[0];
  let newsfeed = document.getElementById("newsfeed");
  let button_name = chosen_button.getElementsByTagName("figcaption")[0].innerText;

  clean_slate(nav_bar);
  full_clean_slate(newsfeed);
  add_path_bar();

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

/* ==================== FORMAL SCIENCES SUBMENU CREATION ==================== */
function create_sciences_formelles_submenu()
{
  //Creating submenu container
  append_submenu_grid_container("div", "formal_sciences_container", 1, 2, "300px", "49.5vw");
  append_columns_to_submenu_container_grid("div", "formal_sciences_container");
  let formal_sciences_container = document.getElementById("formal_sciences_container");
  let maths_column = formal_sciences_container.children[0];
  let cs_column = formal_sciences_container.children[1];

  //Adding Titles to columns
  let columns_array = [maths_column, cs_column];
  let columns_names_array = ["Mathématiques", "Informatique"];
  append_columns_titles(columns_array, columns_names_array, "h2");

  //Styling columns titles
  let maths_title = maths_column.children[0];
  let cs_title = cs_column.children[0];
  style_maths_submenu_title(maths_title);
  style_cs_submenu_title(cs_title);
  maths_column.style.borderRight = "1px solid lightgrey";

  //Creating maths submenu
  let maths_submenu_grid = create_grid("div", "maths_submenu", 2, 4, "110px", "150px");
  maths_column.appendChild(maths_submenu_grid);

  let maths_submenu = maths_column.children[1];
  let maths_submenu_buttons = create_maths_submenu_buttons();
  append_maths_submenu_buttons(maths_submenu_buttons, maths_submenu);

  //Styling maths submenu
  maths_submenu.style.justifyContent = "center";

  //Creating CS submenu
  let cs_submenu_grid = create_grid("div", "cs_submenu", 1, 4, "110px", "150px");
  cs_column.appendChild(cs_submenu_grid);

  let cs_submenu = cs_column.children[1];
  let cs_submenu_buttons = create_cs_submenu_buttons();
  append_cs_submenu_buttons(cs_submenu_buttons, cs_submenu);

  //Styling CS submenu
  cs_submenu.style.justifyContent = "center";
}


/* ==================== SPECIFIC TO THE CS SUBMENU ==================== */
function create_cs_submenu_buttons()
{
  let programmation_languages_button = create_button("./Icons/icons8-c-programming-64.png", "Languages", "Languages");
  let algorithms_button = create_button("./Icons/icons8-module-64.png", "Algorithmes", "Algorithmes");
  let data_structures_button = create_button("./Icons/icons8-flow-chart-64.png", "Données", "Données");
  let networks_button = create_button("./Icons/icons8-globe-64.png", "Réseaux", "Réseaux");

  let cs_submenu_buttons = [programmation_languages_button, algorithms_button, data_structures_button, networks_button];

  let interactions_array = ["onmouseover", "highlight_chosen_button(this)",
                            "onmousedown", "button_pressure_effect(this)",
                            "onmouseup", "set_unavailable_infobulle(this)",
                            "onmouseout", "remove_highlight_effect(this)",
                            "onmouseleave", "unset_unavailable_infobulle(this)"];

  add_buttons_interactions(cs_submenu_buttons, interactions_array);

  return cs_submenu_buttons;
}

function append_cs_submenu_buttons(cs_submenu_buttons, cs_submenu)
{
  for(let i = 0; i < cs_submenu_buttons.length; i++)
  {
    cs_submenu.appendChild(cs_submenu_buttons[i]);
  }
}

function style_cs_submenu_title(cs_submenu_title)
{
  cs_submenu_title.style.color = "#6A7BCA";
  cs_submenu_title.style.textAlign = "center";
}


/* ==================== SPECIFIC TO THE MATHS SUBMENU ==================== */
function append_maths_submenu_buttons(maths_submenu_buttons, maths_submenu)
{
  for(let i = 0; i < maths_submenu_buttons.length; i++)
  {
    maths_submenu.appendChild(maths_submenu_buttons[i]);
  }
}

function create_maths_submenu_buttons()
{
  let analysis_button = create_button("./Icons/icons8-minimum-value-512.png", "Analyse", "Analyse");
  let arithmetic_button = create_button("./Icons/icons8-math-64.png", "Arithmétique", "Arithmétique");
  let statistics_button = create_button("./Icons/icons8-statistics-64.png", "Statistique", "Statistique");
  let probabilities_button = create_button("./Icons/icons8-dice-64.png", "Probabilités", "Probabilités");

  let methodology_button = create_button("./Icons/icons8-checklist-64.png", "Méthodes", "Méthodes");
  let geometry_button = create_button("./Icons/icons8-measurement-tool-64.png", "Géométrie", "Géométrie");
  let algebra_button = create_button("./Icons/icons8-data-sheet-64.png", "Algèbre", "Algèbre");
  let misc_button = create_button("./Icons/icons8-ask-question-64.png", "Autres", "Autres");

  let maths_submenu_buttons = [analysis_button, arithmetic_button, statistics_button, probabilities_button,
                              methodology_button, geometry_button, algebra_button, misc_button];
  let interactions_array = ["onmouseover", "highlight_chosen_button(this)",
                            "onmousedown", "button_pressure_effect(this)",
                            "onmouseup", "set_unavailable_infobulle(this)",
                            "onmouseout", "remove_highlight_effect(this)",
                            "onmouseleave", "unset_unavailable_infobulle(this)"];

  add_buttons_interactions(maths_submenu_buttons, interactions_array);

  return maths_submenu_buttons;
}

function style_maths_submenu_title(maths_submenu_title)
{
  maths_submenu_title.style.color = "#6A7BCA";
  maths_submenu_title.style.textAlign = "center";
}


/* ==================== SUBMENU COLUMNS MANIPULATIONS ==================== */
function append_columns_titles(columns_array, columns_names_array, html_element)
{
  for(let i = 0; i < columns_array.length; i++)
  {
    let column_title = document.createElement(html_element);
    column_title.appendChild(document.createTextNode(columns_names_array[i]));
    columns_array[i].appendChild(column_title);
  }
}


/* ==================== SUBMENU CONTAINER CREATION ==================== */
function append_columns_to_submenu_container_grid(html_element, container_id)
{
  let container = document.getElementById(container_id);
  container.appendChild(document.createElement(html_element));
  container.appendChild(document.createElement(html_element));
}

function append_submenu_grid_container(element_container, id, nb_of_rows, nb_of_columns, size_of_rows, size_of_columns)
{
  let formal_sciences_submenu_container = create_grid(element_container, id, nb_of_rows, nb_of_columns, size_of_rows, size_of_columns);
  let home_storyboard = document.getElementById("storyboard");

  document.getElementsByTagName("body")[0].insertBefore(formal_sciences_submenu_container, home_storyboard);
}
