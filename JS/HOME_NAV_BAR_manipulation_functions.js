function add_path_bar()
{
  /* ~~~~~~~~ Nav bar becomes a path bar thanks to some CSS work ~~~~~~~~ */

  let nav_bar = document.getElementsByTagName("nav")[0];
  nav_bar.className = "path_bar";


  /* ~~~~~~~~ Creating elements to be added to the path bar ~~~~~~~~ */

  let home_button = create_custom_hyperbutton("path_bar_button", "path_bar_icon", "",
                                              "./home.html", "./Icons/icons8-home-page-64.png", "Retourner à l'accueil", "");
  append_attributes(home_button, ["id", "home_button"]);//Setting home icon only a bit further from the left edge of the screen
  let path_arrow = create_img("./Icons/icons8-path-arrow-24.png", "Path arrow", "path_bar_arrow");
  append_attributes(path_arrow, ["class", "path_bar_arrow"]);


  /* ~~~~~~~~ Adding javascript interactions to the buttons ~~~~~~~~ */

  //Check ADL_elements_manipulation_functions.js for more information on create_default_button_interactions()
  add_buttons_interactions([home_button.children[0]], create_default_button_interactions());


  /* ~~~~~~~~ Adding elements to the path bar ~~~~~~~~ */

  nav_bar.appendChild(home_button);
  nav_bar.appendChild(path_arrow);
}

function append_path_bar(path_bar, chosen_button)
{
  //Building next submenu call function based on the parent node id
  //A few string manipulations functions were necessary to achieve this
  //Feel free to check those functions in TOOLBOX.js
  let button_id = chosen_button.id;
  let submenu_creation_function = "create_" + button_id + "_submenu()";
  let button_name = capitalize_first_letters(delete_underscores(button_id));

  //Creating and appending new button to path bar
  let path_bar_button = create_iconless_js_button("path_bar_iconless_button", button_name);
  append_attributes(path_bar_button, create_default_button_interactions());
  append_attributes(path_bar_button, ["onmouseup", submenu_creation_function]);
  path_bar.appendChild(path_bar_button);

  //Creating and appending path arrow
  let path_arrow = create_img("./Icons/icons8-path-arrow-24.png", "Path arrow", "path_bar_arrow");
  append_attributes(path_arrow, ["class", "path_bar_arrow"]);
  path_bar.appendChild(path_arrow);
}

function show_level_submenu(chosen_button)
{
  //Deleting home submenu
  let path_bar = document.getElementsByTagName("nav")[0];
  let newsfeed = document.getElementById("newsfeed");

  clean_slate(path_bar);
  full_clean_slate(newsfeed);
  add_path_bar();
  append_path_bar(path_bar, chosen_button);

  let next_submenu = path_bar.children[2].getAttribute("onmouseup");
  create_level_submenu(next_submenu);
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
      append_path_bar(nav_bar, chosen_button);
    break;

    case "Naturelles":
      create_sciences_naturelles_submenu();
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
  //Deleting previous submenu
  let level_submenu_container = document.getElementById("level_submenu_container");
  full_clean_slate(level_submenu_container);

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
  let maths_submenu_grid = create_grid("div", 2, 4, "110px", "150px");
  append_attributes(maths_submenu_grid, ["id", "maths_submenu", "class", "submenu"]);
  maths_column.appendChild(maths_submenu_grid);

  let maths_submenu = maths_column.children[1];
  let maths_submenu_buttons = create_maths_submenu_buttons();
  append_submenu_buttons(maths_submenu_buttons, maths_submenu);


  //Creating CS submenu
  let cs_submenu_grid = create_grid("div", 1, 4, "110px", "150px");
  append_attributes(cs_submenu_grid, ["id", "cs_submenu", "class", "submenu"]);
  cs_column.appendChild(cs_submenu_grid);

  let cs_submenu = cs_column.children[1];
  let cs_submenu_buttons = create_cs_submenu_buttons();
  append_submenu_buttons(cs_submenu_buttons, cs_submenu);
}

/* ==================== LEVEL SUBMENU CREATION ==================== */
function create_level_submenu(next_submenu)
{
  //Creating submenu container
  append_submenu_grid_container("div", "level_submenu_container", 1, 4, "300px", "25%");
  append_columns_to_submenu_container_grid(4, "div", "submenu_column", "level_submenu_container");
  let level_submenu_container = document.getElementById("level_submenu_container");
  let primaryschool_column = level_submenu_container.children[0];
  let middleschool_column = level_submenu_container.children[1];
  let highschool_column = level_submenu_container.children[2];
  let superior_column = level_submenu_container.children[3];

  //Adding Titles to columns
  let columns_array = [primaryschool_column, middleschool_column, highschool_column, superior_column];
  let columns_names_array = ["École primaire", "Collège", "Lycée", "Études Supérieures"];
  append_columns_titles(columns_array, columns_names_array, "h2", "transition_submenu_titles");

  //Creating primary school submenu
  let primaryschool_grid = create_grid("div", 3, 2, "110px", "150px");
  append_attributes(primaryschool_grid, ["id", "primaryschool_submenu", "class", "submenu"]);
  primaryschool_column.appendChild(primaryschool_grid);

  let primaryschool_submenu = primaryschool_column.children[1];
  let primaryschool_submenu_buttons = create_primaryschool_submenu_buttons(next_submenu);
  append_submenu_buttons(primaryschool_submenu_buttons, primaryschool_submenu);

  //Creating middleschool submenu
  let middleschool_grid = create_grid("div", 2, 2, "110px", "150px");
  append_attributes(middleschool_grid, ["id", "middleschool_submenu", "class", "submenu"]);
  middleschool_column.appendChild(middleschool_grid);

  let middleschool_submenu = middleschool_column.children[1];
  let middleschool_submenu_buttons = create_middleschool_submenu_buttons(next_submenu);
  append_submenu_buttons(middleschool_submenu_buttons, middleschool_submenu);

  //Creating highschool submenu
  let highschool_grid = create_grid("div", 2, 2, "110px", "150px");
  append_attributes(highschool_grid, ["id", "highschool_submenu", "class", "submenu"])
  highschool_column.appendChild(highschool_grid);

  let highschool_submenu = highschool_column.children[1];
  let highschool_submenu_buttons = create_highschool_submenu_buttons(next_submenu);
  append_submenu_buttons(highschool_submenu_buttons, highschool_submenu);

  //Creating superior studies submenu
  let superior_grid = create_grid("div", 2, 2, "110px", "150px");
  append_attributes(superior_grid, ["id", "superior_submenu", "class", "submenu"]);
  superior_column.appendChild(superior_grid);

  let superior_submenu = superior_column.children[1];
  let superior_submenu_buttons = create_superior_submenu_buttons(next_submenu);
  append_submenu_buttons(superior_submenu_buttons, superior_submenu);
}

/* ==================== NATURAL SCIENCES SUBMENU CREATION ==================== */
function create_sciences_naturelles_submenu()
{
  //Deleting previous submenu
  let level_submenu_container = document.getElementById("level_submenu_container");
  full_clean_slate(level_submenu_container);

  //Creating submenu container
  append_submenu_grid_container("div", "transition_submenu_container", 1, 2, "300px", "49.5vw");
  append_columns_to_submenu_container_grid(2, "div", "submenu_column", "transition_submenu_container");
  let natural_sciences_container = document.getElementById("transition_submenu_container");
  let svt_column = natural_sciences_container.children[0];
  let pc_column = natural_sciences_container.children[1];


  //Adding Titles to columns
  let columns_array = [svt_column, pc_column];
  let columns_names_array = ["Sciences de la Vie et des Planètes", "Physique et Chimie"];
  append_columns_titles(columns_array, columns_names_array, "h2", "transition_submenu_titles");


  //Creating SVT submenu
  let svt_submenu_grid = create_grid("div", 1, 2, "110px", "150px");
  append_attributes(svt_submenu_grid, ["id", "svt_submenu", "class", "submenu"]);
  svt_column.appendChild(svt_submenu_grid);

  let svt_submenu = svt_column.children[1];
  let svt_submenu_buttons = create_svt_submenu_buttons();
  append_submenu_buttons(svt_submenu_buttons, svt_submenu);


  //Creating PC submenu
  let pc_submenu_grid = create_grid("div", 2, 4, "110px", "150px");
  append_attributes(pc_submenu_grid, ["id", "pc_submenu", "class", "submenu"]);
  pc_column.appendChild(pc_submenu_grid);

  let pc_submenu = pc_column.children[1];
  let pc_submenu_buttons = create_pc_submenu_buttons();
  append_submenu_buttons(pc_submenu_buttons, pc_submenu);
}


/* ==================== HUMAN SCIENCES SUBMENU CREATION ==================== */



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
function create_highschool_submenu_buttons(next_submenu)
{
  let seconde_button = create_js_button("./Icons/Digits/icons8-circled-2-64.png", "Seconde", "Seconde");
  let premiere_button = create_js_button("./Icons/Digits/icons8-1st-64.png", "Première", "Première");
  let terminale_button = create_js_button("./Icons/Alphabets/icons8-t-64.png", "Terminale", "Terminale");

  let highschool_submenu_buttons = [seconde_button, premiere_button, terminale_button];

  let interactions_array = create_default_button_interactions();

  add_buttons_interactions(highschool_submenu_buttons, interactions_array);
  add_buttons_interactions(highschool_submenu_buttons, ["onmouseup", next_submenu]);

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
function create_middleschool_submenu_buttons(next_submenu)
{
  let sixieme_button = create_js_button("./Icons/Digits/icons8-6-100.png", "Sixième", "Sixième");
  let cinquieme_button = create_js_button("./Icons/Digits/icons8-5-100.png", "Cinquième", "Cinquième");
  let quatrieme_button = create_js_button("./Icons/Digits/icons8-4-100.png", "Quatrième", "Quatrième");
  let troisieme_button = create_js_button("./Icons/Digits/icons8-3-100.png", "Troisième", "Troisième");

  let middleschool_submenu_buttons = [sixieme_button, cinquieme_button, quatrieme_button, troisieme_button];

  let interactions_array = create_default_button_interactions();

  add_buttons_interactions(middleschool_submenu_buttons, interactions_array);
  add_buttons_interactions(middleschool_submenu_buttons, ["onmouseup", next_submenu]);

  return middleschool_submenu_buttons;
}

/* ~~~~~~~~ PC submenu ~~~~~~~~ */
function create_pc_submenu_buttons()
{
  let classical_mecanic_button = create_custom_js_button("custom_button", "icon_loner", "long_caption", "./Icons/pc_submenu/icons8-satellite-in-orbit-40.png", "Mécanique classique", "Mécanique classique");
  let quantical_mecanic_button = create_custom_js_button("custom_button", "icon_loner", "long_caption", "./Icons/pc_submenu/icons8-physics-64.png", "Physique subatomique", "Physique subatomique");
  let electromagnetism_button = create_custom_js_button("custom_button", "icon_loner", "long_caption", "./Icons/pc_submenu/icons8-magnet-64.png", "Electro-magnétisme", "Electro-magnétisme");
  let thermodynamics_button = create_custom_js_button("custom_button", "icon_loner", "long_caption", "./Icons/pc_submenu/icons8-fire-64.png", "Thermo-dynamique", "Thermo-dynamique");

  let optic_button = create_js_button("./Icons/pc_submenu/icons8-aperture-64.png", "Optique", "Optique");
  let relativity_button = create_js_button("./Icons/pc_submenu/icons8-speed-64.png", "Relativité", "Relativité");
  let astrophysics_button = create_js_button("./Icons/pc_submenu/icons8-planet-on-the-dark-side-64.png", "Astronomie", "Astronomie");
  let chemistry_button = create_js_button("./Icons/pc_submenu/icons8-test-tube-64.png", "Chimie", "Chimie");

  let pc_submenu_buttons = [classical_mecanic_button, quantical_mecanic_button, electromagnetism_button, thermodynamics_button,
                            optic_button, relativity_button, astrophysics_button, chemistry_button];

  let interactions_array = ["onmouseover", "highlight_chosen_button(this)",
                            "onmousedown", "button_pressure_effect(this)",
                            "onmouseup", "show_level_submenu()",
                            "onmouseout", "remove_highlight_effect(this)"];

  add_buttons_interactions(pc_submenu_buttons, interactions_array);

  return pc_submenu_buttons;
}

/* ~~~~~~~~ Primary school submenu ~~~~~~~~ */
function create_primaryschool_submenu_buttons(next_submenu)
{
  let cp_button = create_js_button("./Icons/primary_school_submenu/icons8-reading-64.png", "CP", "CP");
  let ce1_button = create_js_button("./Icons/primary_school_submenu/icons8-crayon-64.png", "CE1", "CE1");
  let ce2_button = create_js_button("./Icons/primary_school_submenu/icons8-ball-point-pen-64.png", "CE2", "CE2");
  let cm1_button = create_js_button("./Icons/primary_school_submenu/icons8-pen-64.png", "CM1", "CM1");
  let cm2_button = create_js_button("./Icons/primary_school_submenu/icons8-classroom-64.png", "CM2", "CM2");

  let primaryschool_submenu_buttons = [cp_button, ce1_button, ce2_button, cm1_button, cm2_button];

  let interactions_array = create_default_button_interactions();

  add_buttons_interactions(primaryschool_submenu_buttons, interactions_array);
  add_buttons_interactions(primaryschool_submenu_buttons, ["onmouseup", next_submenu]);

  return primaryschool_submenu_buttons;
}

/* ~~~~~~~~ Superior studies submenu ~~~~~~~~ */
function create_superior_submenu_buttons(next_submenu)
{
  let l1_button = create_js_button("./Icons/superior_studies_submenu/icons8-university-64.png", "Licence 1", "Licence 1");
  let l2_button = create_js_button("./Icons/superior_studies_submenu/icons8-book-shelf-64.png", "Licence 2", "Licence 2");
  let l3_button = create_js_button("./Icons/superior_studies_submenu/icons8-graduation-cap-64.png", "Licence 3", "Licence 3");

  let superior_studies_submenu_buttons = [l1_button, l2_button, l3_button];

  let interactions_array = create_default_button_interactions();

  add_buttons_interactions(superior_studies_submenu_buttons, interactions_array);
  add_buttons_interactions(superior_studies_submenu_buttons, ["onmouseup", next_submenu]);

  return superior_studies_submenu_buttons;
}

/* ~~~~~~~~ SVT submenu ~~~~~~~~ */
function create_svt_submenu_buttons()
{
  let biology_button = create_js_button("./Icons/svt_submenu/icons8-microorganisms-80.png", "Biologie", "Biologie");
  let geology_button = create_js_button("./Icons/svt_submenu/icons8-globe-earth-64.png", "Géologie", "Géologie");

  let svt_submenu_buttons = [biology_button, geology_button];
  let interactions_array = ["onmouseover", "highlight_chosen_button(this)",
                            "onmousedown", "button_pressure_effect(this)",
                            "onmouseup", "show_level_submenu()",
                            "onmouseout", "remove_highlight_effect(this)"];

  add_buttons_interactions(svt_submenu_buttons, interactions_array);

  return svt_submenu_buttons;
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
  let submenu_container = create_grid(element_container, nb_of_rows, nb_of_columns, size_of_rows, size_of_columns);
  append_attributes(submenu_container, ["id", id, "class", ""]);
  let home_storyboard = document.getElementById("storyboard");

  document.getElementsByTagName("body")[0].insertBefore(submenu_container, home_storyboard);
}
