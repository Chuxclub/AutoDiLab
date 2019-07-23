/* ==================== FORMAL SCIENCES SUBMENU CREATION ==================== */

function create_sciences_formelles_submenu_c2(chosen_button)
{
  //Appending path bar with button indicating user position in submenus tree
  let path_bar = document.getElementsByTagName("nav")[0];
  let chosen_level_submenu_button_name = get_button_name(chosen_button);
  let submenu_container = document.getElementById("storyboard").previousElementSibling;

  //Assigning path bar button interaction to get back to previous submenu
  let path_bar_button = path_bar.children[2];
  append_attributes(path_bar_button, create_default_button_interactions());
  append_attributes(path_bar_button, ["onmouseup", "show_level_submenu(this)"]);
  path_bar.appendChild(path_bar_button);

  if(!(path_bar.children[4]))
  {
    append_path_bar(path_bar, chosen_level_submenu_button_name, "create_sciences_formelles_submenu(this)");
  }

  //Deleting previous submenu
  full_clean_slate(submenu_container);

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

function create_sciences_formelles_submenu_c3(chosen_button)
{
  //Appending path bar with button indicating user position in submenus tree
  let path_bar = document.getElementsByTagName("nav")[0];
  let chosen_level_submenu_button_name = get_button_name(chosen_button);
  let submenu_container = document.getElementById("storyboard").previousElementSibling;

  //Assigning path bar button interaction to get back to previous submenu
  let path_bar_button = path_bar.children[2];
  append_attributes(path_bar_button, create_default_button_interactions());
  append_attributes(path_bar_button, ["onmouseup", "show_level_submenu(this)"]);
  path_bar.appendChild(path_bar_button);

  if(!(path_bar.children[4]))
  {
    append_path_bar(path_bar, chosen_level_submenu_button_name, "create_sciences_formelles_submenu(this)");
  }

  //Deleting previous submenu
  full_clean_slate(submenu_container);

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

function create_sciences_formelles_submenu_c4(chosen_button)
{
  //Appending path bar with button indicating user position in submenus tree
  let path_bar = document.getElementsByTagName("nav")[0];
  let chosen_level_submenu_button_name = get_button_name(chosen_button);
  let submenu_container = document.getElementById("storyboard").previousElementSibling;

  //Assigning path bar button interaction to get back to previous submenu
  let path_bar_button = path_bar.children[2];
  append_attributes(path_bar_button, create_default_button_interactions());
  append_attributes(path_bar_button, ["onmouseup", "show_level_submenu(this)"]);
  path_bar.appendChild(path_bar_button);

  if(!(path_bar.children[4]))
  {
    append_path_bar(path_bar, chosen_level_submenu_button_name, "create_sciences_formelles_submenu(this)");
  }

  //Deleting previous submenu
  full_clean_slate(submenu_container);

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

function create_sciences_formelles_submenu_lyc(chosen_button)
{
  //Appending path bar with button indicating user position in submenus tree
  let path_bar = document.getElementsByTagName("nav")[0];
  let chosen_level_submenu_button_name = get_button_name(chosen_button);
  let submenu_container = document.getElementById("storyboard").previousElementSibling;

  //Assigning path bar button interaction to get back to previous submenu
  let path_bar_button = path_bar.children[2];
  append_attributes(path_bar_button, create_default_button_interactions());
  append_attributes(path_bar_button, ["onmouseup", "show_level_submenu(this)"]);
  path_bar.appendChild(path_bar_button);

  if(!(path_bar.children[4]))
  {
    append_path_bar(path_bar, chosen_level_submenu_button_name, "create_sciences_formelles_submenu(this)");
  }

  //Deleting previous submenu
  full_clean_slate(submenu_container);

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

function create_sciences_formelles_submenu_sup(chosen_button)
{
  //Appending path bar with button indicating user position in submenus tree
  let path_bar = document.getElementsByTagName("nav")[0];
  let chosen_level_submenu_button_name = get_button_name(chosen_button);
  let submenu_container = document.getElementById("storyboard").previousElementSibling;

  //Assigning path bar button interaction to get back to previous submenu
  let path_bar_button = path_bar.children[2];
  append_attributes(path_bar_button, create_default_button_interactions());
  append_attributes(path_bar_button, ["onmouseup", "show_level_submenu(this)"]);
  path_bar.appendChild(path_bar_button);

  if(!(path_bar.children[4]))
  {
    append_path_bar(path_bar, chosen_level_submenu_button_name, "create_sciences_formelles_submenu(this)");
  }

  //Deleting previous submenu
  full_clean_slate(submenu_container);

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


/* ==================== DEFAULT FORMAL SCIENCES SUBMENU CREATION ==================== */

// function create_sciences_formelles_submenu(chosen_button)
// {
//   //Appending path bar with button indicating user position in submenus tree
//   let path_bar = document.getElementsByTagName("nav")[0];
//   let chosen_level_submenu_button_name = get_button_name(chosen_button);
//   let submenu_container = document.getElementById("storyboard").previousElementSibling;
//
//   if(!(path_bar.children[4]))
//   {
//     append_path_bar(path_bar, chosen_level_submenu_button_name, "create_sciences_formelles_submenu(this)");
//     path_bar.removeChild(path_bar.children[5]);
//   }
//
//   //Deleting previous submenu
//   full_clean_slate(submenu_container);
//
//   //Creating submenu container
//   append_submenu_grid_container("div", "transition_submenu_container", 1, 2, "300px", "49.5vw");
//   append_columns_to_submenu_container_grid(2, "div", "submenu_column", "transition_submenu_container");
//   let formal_sciences_container = document.getElementById("transition_submenu_container");
//   let maths_column = formal_sciences_container.children[0];
//   let cs_column = formal_sciences_container.children[1];
//
//
//   //Adding Titles to columns
//   let columns_array = [maths_column, cs_column];
//   let columns_names_array = ["Mathématiques", "Informatique"];
//   append_columns_titles(columns_array, columns_names_array, "h2", "transition_submenu_titles");
//
//
//   //Creating maths submenu
//   let maths_submenu_grid = create_grid("div", 2, 4, "110px", "150px");
//   append_attributes(maths_submenu_grid, ["id", "maths_submenu", "class", "submenu"]);
//   maths_column.appendChild(maths_submenu_grid);
//
//   let maths_submenu = maths_column.children[1];
//   let maths_submenu_buttons = create_maths_submenu_buttons();
//   append_submenu_buttons(maths_submenu_buttons, maths_submenu);
//
//
//   //Creating CS submenu
//   let cs_submenu_grid = create_grid("div", 1, 4, "110px", "150px");
//   append_attributes(cs_submenu_grid, ["id", "cs_submenu", "class", "submenu"]);
//   cs_column.appendChild(cs_submenu_grid);
//
//   let cs_submenu = cs_column.children[1];
//   let cs_submenu_buttons = create_cs_submenu_buttons();
//   append_submenu_buttons(cs_submenu_buttons, cs_submenu);
// }
