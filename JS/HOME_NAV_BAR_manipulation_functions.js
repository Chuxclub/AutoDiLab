function add_path_bar()
{
  /* ~~~~~~~~ Nav bar becomes a path bar thanks to some CSS work ~~~~~~~~ */

  let nav_bar = document.getElementsByTagName("nav")[0];
  nav_bar.className = "path_bar";


  /* ~~~~~~~~ Creating elements to be added to the path bar ~~~~~~~~ */

  let home_button = create_custom_hyperbutton("path_bar_button", "path_bar_icon", "",
                                              "./home.html", "./Icons/icons8-home-page-64.png", "Retourner à l'accueil", "");
  home_button.id = "home_button"; //Setting home icon only a bit further from the left edge of the screen
  let path_arrow = create_img("./Icons/icons8-path-arrow-24.png", "Path arrow", "path_bar_arrow");


  /* ~~~~~~~~ Adding javascript interactions to the buttons ~~~~~~~~ */

  //Check ADL_elements_manipulation_functions.js for more information on create_default_button_interactions()
  add_buttons_interactions([home_button.children[0]], create_default_button_interactions());


  /* ~~~~~~~~ Adding elements to the path bar ~~~~~~~~ */

  nav_bar.appendChild(home_button);
  nav_bar.appendChild(path_arrow);
}

function show_level_submenu()
{
  //Deleting Transition submenu
  full_clean_slate(document.getElementById("transition_submenu_container"));

  //Creating submenu container
  append_submenu_grid_container("div", "level_submenu_container", 1, 2, "300px", "49.5vw");
  append_columns_to_submenu_container_grid(2, "div", "submenu_column", "level_submenu_container");
  let level_submenu_container = document.getElementById("level_submenu_container");
  let middleschool_column = level_submenu_container.children[0];
  let highschool_column = level_submenu_container.children[1];


  //Adding Titles to columns
  let columns_array = [middleschool_column, highschool_column];
  let columns_names_array = ["Collège", "Lycée"];
  append_columns_titles(columns_array, columns_names_array, "h2", "transition_submenu_titles");


  //Creating middleschool submenu
  let middleschool_grid = create_grid("div", "middleschool_submenu", "submenu", 2, 2, "110px", "150px");
  middleschool_column.appendChild(middleschool_grid);

  let middleschool_submenu = middleschool_column.children[1];
  let middleschool_submenu_buttons = create_middleschool_submenu_buttons();
  append_submenu_buttons(middleschool_submenu_buttons, middleschool_submenu);


  //Creating highschool submenu
  let highschool_grid = create_grid("div", "highschool_submenu", "submenu", 1, 3, "110px", "150px");
  highschool_column.appendChild(highschool_grid);

  let highschool_submenu = highschool_column.children[1];
  let highschool_submenu_buttons = create_highschool_submenu_buttons();
  append_submenu_buttons(highschool_submenu_buttons, highschool_submenu);
}

function show_transition_submenu(chosen_button)
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
  append_submenu_grid_container("div", "transition_submenu_container", 1, 2, "300px", "49.5vw");
  append_columns_to_submenu_container_grid(2, "div", "submenu_column", "transition_submenu_container");
  let formal_sciences_container = document.getElementById("transition_submenu_container");
  let maths_column = formal_sciences_container.children[0];
  let cs_column = formal_sciences_container.children[1];


  //Adding Titles to columns
  let columns_array = [maths_column, cs_column];
  let columns_names_array = ["Mathématiques", "Informatique"];
  append_columns_titles(columns_array, columns_names_array, "h2", "transition_submenu_titles");


  //Creating maths submenu
  let maths_submenu_grid = create_grid("div", "maths_submenu", "submenu", 2, 4, "110px", "150px");
  maths_column.appendChild(maths_submenu_grid);

  let maths_submenu = maths_column.children[1];
  let maths_submenu_buttons = create_maths_submenu_buttons();
  append_submenu_buttons(maths_submenu_buttons, maths_submenu);


  //Creating CS submenu
  let cs_submenu_grid = create_grid("div", "cs_submenu", "submenu", 1, 4, "110px", "150px");
  cs_column.appendChild(cs_submenu_grid);

  let cs_submenu = cs_column.children[1];
  let cs_submenu_buttons = create_cs_submenu_buttons();
  append_submenu_buttons(cs_submenu_buttons, cs_submenu);
}


/* ==================== SPECIFIC TO THE... ==================== */

/* ~~~~~~~~ CS submenu ~~~~~~~~ */
function create_cs_submenu_buttons()
{
  let programmation_languages_button = create_js_button("./Icons/icons8-c-programming-64.png", "Languages", "Languages");
  let algorithms_button = create_js_button("./Icons/icons8-module-64.png", "Algorithmes", "Algorithmes");
  let data_structures_button = create_js_button("./Icons/icons8-flow-chart-64.png", "Données", "Données");
  let networks_button = create_js_button("./Icons/icons8-globe-64.png", "Réseaux", "Réseaux");

  let cs_submenu_buttons = [programmation_languages_button, algorithms_button, data_structures_button, networks_button];

  let interactions_array = ["onmouseover", "highlight_chosen_button(this)",
                            "onmousedown", "button_pressure_effect(this)",
                            "onmouseup", "show_level_submenu()",
                            "onmouseout", "remove_highlight_effect(this)"];

  add_buttons_interactions(cs_submenu_buttons, interactions_array);

  return cs_submenu_buttons;
}

/* ~~~~~~~~ Highschool submenu ~~~~~~~~ */
function create_highschool_submenu_buttons()
{
  let seconde_button = create_js_button("./Icons/Digits/icons8-circled-2-64.png", "Seconde", "Seconde");
  let premiere_button = create_js_button("./Icons/Digits/icons8-1st-64.png", "Première", "Première");
  let terminale_button = create_js_button("./Icons/Alphabets/icons8-t-64.png", "Terminale", "Terminale");

  let highschool_submenu_buttons = [seconde_button, premiere_button, terminale_button];

  let interactions_array = create_default_button_interactions();

  add_buttons_interactions(highschool_submenu_buttons, interactions_array);

  return highschool_submenu_buttons;
}

/* ~~~~~~~~ Maths submenu ~~~~~~~~ */
function create_maths_submenu_buttons()
{
  let analysis_button = create_js_button("./Icons/icons8-minimum-value-512.png", "Analyse", "Analyse");
  let arithmetic_button = create_js_button("./Icons/icons8-math-64.png", "Arithmétique", "Arithmétique");
  let statistics_button = create_js_button("./Icons/icons8-statistics-64.png", "Statistique", "Statistique");
  let probabilities_button = create_js_button("./Icons/icons8-dice-64.png", "Probabilités", "Probabilités");

  let methodology_button = create_js_button("./Icons/icons8-checklist-64.png", "Méthodes", "Méthodes");
  let geometry_button = create_js_button("./Icons/icons8-measurement-tool-64.png", "Géométrie", "Géométrie");
  let algebra_button = create_js_button("./Icons/icons8-data-sheet-64.png", "Algèbre", "Algèbre");
  let misc_button = create_js_button("./Icons/icons8-ask-question-64.png", "Autres", "Autres");

  let maths_submenu_buttons = [analysis_button, arithmetic_button, statistics_button, probabilities_button,
                              methodology_button, geometry_button, algebra_button, misc_button];
  let interactions_array = ["onmouseover", "highlight_chosen_button(this)",
                            "onmousedown", "button_pressure_effect(this)",
                            "onmouseup", "show_level_submenu()",
                            "onmouseout", "remove_highlight_effect(this)"];

  add_buttons_interactions(maths_submenu_buttons, interactions_array);

  return maths_submenu_buttons;
}

/* ~~~~~~~~ Middleschool submenu ~~~~~~~~ */
function create_middleschool_submenu_buttons()
{
  let sixieme_button = create_js_button("./Icons/Digits/icons8-circled-6-64.png", "Sixième", "Sixième");
  let cinquieme_button = create_js_button("./Icons/Digits/icons8-circled-5-64.png", "Cinquième", "Cinquième");
  let quatrieme_button = create_js_button("./Icons/Digits/icons8-circled-4-64.png", "Quatrième", "Quatrième");
  let troisieme_button = create_js_button("./Icons/Digits/icons8-circled-3-64.png", "Troisième", "Troisième");

  let middleschool_submenu_buttons = [sixieme_button, cinquieme_button, quatrieme_button, troisieme_button];

  let interactions_array = create_default_button_interactions();

  add_buttons_interactions(middleschool_submenu_buttons, interactions_array);

  return middleschool_submenu_buttons;
}


/* ==================== SUBMENU BUTTONS MANIPULATIONS ==================== */
function append_submenu_buttons(submenu_buttons, submenu)
{
  for(let i = 0; i < submenu_buttons.length; i++)
  {
    submenu.appendChild(submenu_buttons[i]);
  }
}


/* ==================== SUBMENU COLUMNS MANIPULATIONS ==================== */
function append_columns_titles(columns_array, columns_names_array, html_element, class_name)
{
  for(let i = 0; i < columns_array.length; i++)
  {
    let column_title = document.createElement(html_element);
    column_title.appendChild(document.createTextNode(columns_names_array[i]));
    column_title.className = class_name;
    columns_array[i].appendChild(column_title);
  }
}


/* ==================== SUBMENU CONTAINER MANIPULATIONS ==================== */
function append_columns_to_submenu_container_grid(nb_of_columns, html_element, class_name, container_id)
{
  let container = document.getElementById(container_id);

  for(let i = 0; i < nb_of_columns; i++)
  {
    let column = document.createElement(html_element);
    column.className = class_name;
    container.appendChild(column);
  }
}

function append_submenu_grid_container(element_container, id, nb_of_rows, nb_of_columns, size_of_rows, size_of_columns)
{
  let formal_sciences_submenu_container = create_grid(element_container, id, "", nb_of_rows, nb_of_columns, size_of_rows, size_of_columns);
  let home_storyboard = document.getElementById("storyboard");

  document.getElementsByTagName("body")[0].insertBefore(formal_sciences_submenu_container, home_storyboard);
}
