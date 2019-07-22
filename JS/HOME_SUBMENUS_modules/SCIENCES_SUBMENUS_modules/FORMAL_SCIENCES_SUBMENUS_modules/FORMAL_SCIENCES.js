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
