/* ==================== LEVEL SUBMENU CREATION ==================== */
function create_level_submenu(cycle_2_next_submenu, cycle_3_next_submenu, cycle_4_next_submenu, seconde_next_submenu, highschool_next_submenu, next_submenu)
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
  let primaryschool_submenu_buttons = create_primaryschool_submenu_buttons(cycle_2_next_submenu, cycle_3_next_submenu);
  append_submenu_buttons(primaryschool_submenu_buttons, primaryschool_submenu);

  //Creating middleschool submenu
  let middleschool_grid = create_grid("div", 2, 2, "110px", "150px");
  append_attributes(middleschool_grid, ["id", "middleschool_submenu", "class", "submenu"]);
  middleschool_column.appendChild(middleschool_grid);

  let middleschool_submenu = middleschool_column.children[1];
  let middleschool_submenu_buttons = create_middleschool_submenu_buttons(cycle_3_next_submenu, cycle_4_next_submenu);
  append_submenu_buttons(middleschool_submenu_buttons, middleschool_submenu);

  //Creating highschool submenu
  let highschool_grid = create_grid("div", 2, 2, "110px", "150px");
  append_attributes(highschool_grid, ["id", "highschool_submenu", "class", "submenu"])
  highschool_column.appendChild(highschool_grid);

  let highschool_submenu = highschool_column.children[1];
  let highschool_submenu_buttons = create_highschool_submenu_buttons(seconde_next_submenu, highschool_next_submenu);
  append_submenu_buttons(highschool_submenu_buttons, highschool_submenu);

  //Creating superior studies submenu
  let superior_grid = create_grid("div", 2, 2, "110px", "150px");
  append_attributes(superior_grid, ["id", "superior_submenu", "class", "submenu"]);
  superior_column.appendChild(superior_grid);

  let superior_submenu = superior_column.children[1];
  let superior_submenu_buttons = create_superior_submenu_buttons(next_submenu);
  append_submenu_buttons(superior_submenu_buttons, superior_submenu);
}

/* ==================== SPECIFIC TO THE... ==================== */

/* ~~~~~~~~ Highschool submenu ~~~~~~~~ */
function create_highschool_submenu_buttons(seconde_next_submenu, next_submenu)
{
  let seconde_button = create_js_button("./Icons/Digits/icons8-circled-2-64.png", "Seconde", "Seconde");
  let premiere_button = create_unavailable_js_button("./Icons/Digits/icons8-1st-64.png", "Première", "Première");
  let terminale_button = create_unavailable_js_button("./Icons/Alphabets/icons8-t-64.png", "Terminale", "Terminale");

  let highschool_submenu_buttons = [seconde_button, premiere_button, terminale_button];

  let interactions_array = create_default_button_interactions();

  add_buttons_interactions([seconde_button], interactions_array);
  add_buttons_interactions([seconde_button], ["onmouseup", seconde_next_submenu]);

  return highschool_submenu_buttons;
}

/* ~~~~~~~~ Middleschool submenu ~~~~~~~~ */
function create_middleschool_submenu_buttons(cycle_3_next_submenu, cycle_4_next_submenu)
{
  let sixieme_button = create_unavailable_js_button("./Icons/Digits/icons8-6-100.png", "Sixième", "Sixième");
  let cinquieme_button = create_unavailable_js_button("./Icons/Digits/icons8-5-100.png", "Cinquième", "Cinquième");
  let quatrieme_button = create_unavailable_js_button("./Icons/Digits/icons8-4-100.png", "Quatrième", "Quatrième");
  let troisieme_button = create_unavailable_js_button("./Icons/Digits/icons8-3-100.png", "Troisième", "Troisième");

  let middleschool_submenu_buttons = [sixieme_button, cinquieme_button, quatrieme_button, troisieme_button];

  let interactions_array = create_default_button_interactions();

  // add_buttons_interactions(middleschool_submenu_buttons, interactions_array);
  // add_buttons_interactions([sixieme_button], ["onmouseup", cycle_3_next_submenu]);
  // add_buttons_interactions([cinquieme_button, quatrieme_button, troisieme_button], ["onmouseup", cycle_4_next_submenu]);

  return middleschool_submenu_buttons;
}

/* ~~~~~~~~ Primary school submenu ~~~~~~~~ */
function create_primaryschool_submenu_buttons(cycle_2_next_submenu, cycle_3_next_submenu)
{
  let cp_button = create_unavailable_js_button("./Icons/primary_school_submenu/icons8-reading-64.png", "CP", "CP");
  let ce1_button = create_unavailable_js_button("./Icons/primary_school_submenu/icons8-crayon-64.png", "CE1", "CE1");
  let ce2_button = create_unavailable_js_button("./Icons/primary_school_submenu/icons8-ball-point-pen-64.png", "CE2", "CE2");
  let cm1_button = create_unavailable_js_button("./Icons/primary_school_submenu/icons8-pen-64.png", "CM1", "CM1");
  let cm2_button = create_unavailable_js_button("./Icons/primary_school_submenu/icons8-classroom-64.png", "CM2", "CM2");

  let primaryschool_submenu_buttons = [cp_button, ce1_button, ce2_button, cm1_button, cm2_button];

  let interactions_array = create_default_button_interactions();

  // add_buttons_interactions(primaryschool_submenu_buttons, interactions_array);
  // add_buttons_interactions([cp_button, ce1_button, ce2_button], ["onmouseup", cycle_2_next_submenu]);
  // add_buttons_interactions([cm1_button, cm2_button], ["onmouseup", cycle_3_next_submenu]);

  return primaryschool_submenu_buttons;
}

/* ~~~~~~~~ Superior studies submenu ~~~~~~~~ */
function create_superior_submenu_buttons(next_submenu)
{
  let l1_button = create_unavailable_js_button("./Icons/superior_studies_submenu/icons8-university-64.png", "Licence 1", "Licence 1");
  let l2_button = create_unavailable_js_button("./Icons/superior_studies_submenu/icons8-book-shelf-64.png", "Licence 2", "Licence 2");
  let l3_button = create_unavailable_js_button("./Icons/superior_studies_submenu/icons8-graduation-cap-64.png", "Licence 3", "Licence 3");

  let superior_studies_submenu_buttons = [l1_button, l2_button, l3_button];

  let interactions_array = create_default_button_interactions();

  // add_buttons_interactions(superior_studies_submenu_buttons, interactions_array);
  // add_buttons_interactions(superior_studies_submenu_buttons, ["onmouseup", next_submenu]);

  return superior_studies_submenu_buttons;
}
