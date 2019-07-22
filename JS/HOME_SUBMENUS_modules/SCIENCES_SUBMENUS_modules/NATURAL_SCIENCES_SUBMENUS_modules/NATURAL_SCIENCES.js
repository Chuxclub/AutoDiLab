/* ==================== NATURAL SCIENCES SUBMENU CREATION ==================== */
function create_sciences_naturelles_submenu(chosen_button)
{
  //Appending path bar with button indicating user position in submenus tree
  let path_bar = document.getElementsByTagName("nav")[0];
  let chosen_level_submenu_button_name = get_button_name(chosen_button);
  let submenu_container = document.getElementById("storyboard").previousElementSibling;

  if(!(path_bar.children[4]))
  {
    append_path_bar(path_bar, chosen_level_submenu_button_name, "create_sciences_naturelles_submenu(this)");
    path_bar.removeChild(path_bar.children[5]);
  }

  //Deleting previous submenu
  full_clean_slate(submenu_container);

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
