let chosen_home_nav_button_id = "";
let chosen_home_nav_button_name = "";

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

function append_path_bar(path_bar, button_name, calling_function)
{
  //Creating and appending new button to path bar
  let path_bar_button = create_iconless_js_button("path_bar_iconless_button", button_name);
  append_attributes(path_bar_button, create_default_button_interactions());
  append_attributes(path_bar_button, ["onmouseup", calling_function]);
  path_bar.appendChild(path_bar_button);

  //Creating and appending path arrow
  let path_arrow = create_img("./Icons/icons8-path-arrow-24.png", "Path arrow", "path_bar_arrow");
  append_attributes(path_arrow, ["class", "path_bar_arrow"]);
  path_bar.appendChild(path_arrow);
}

function show_level_submenu(chosen_button)
{
  let nav_bar = document.getElementsByTagName("nav")[0];
  let submenu_container = document.getElementById("storyboard").previousElementSibling;

  if(document.getElementById("newsfeed"))
  {
    chosen_home_nav_button_id = chosen_button.id;
    chosen_home_nav_button_name = create_path_button_name(chosen_button);
  }

  clean_slate(nav_bar);
  full_clean_slate(submenu_container);

  //Creating path bar
  add_path_bar();
  let path_bar = nav_bar;

  //Creating level submenu with its buttons
  //And affecting calling submenu function to all buttons
  let next_submenu_calling_function = create_next_submenu_calling_functions(chosen_home_nav_button_id);
  let submenus_choices_array = [next_submenu_calling_function,
                                next_submenu_calling_function,
                                next_submenu_calling_function,
                                next_submenu_calling_function,
                                next_submenu_calling_function];

  create_level_submenu(submenus_choices_array[0],
                       submenus_choices_array[1],
                       submenus_choices_array[2],
                       submenus_choices_array[3],
                       submenus_choices_array[4]);

  append_path_bar(path_bar, chosen_home_nav_button_name, "show_level_submenu(this)");
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


/* ==================== SUBMENU BUTTONS MANIPULATIONS ==================== */
function append_submenu_buttons(submenu_buttons, submenu)
{
  for(let i = 0; i < submenu_buttons.length; i++)
  {
    submenu.appendChild(submenu_buttons[i]);
  }
}

function create_path_button_name(chosen_button)
{
  if(chosen_button.parentNode.className == "submenu") //If it's a submenu button
  {
    let button_name = chosen_button.children[1].innerText;
    return button_name;
  }

  else if(chosen_button.parentNode.className == "submenu_row") //If it's a nav bar button
  {
    let button_name = capitalize_first_letters(delete_underscores(chosen_button.id));
    return button_name;
  }

  else //If it's a path bar button
  {
    let button_name = chosen_button.innerText;
    return button_name;
  }
}

function create_next_submenu_calling_functions(saved_button_id)
{
  let submenu_creation_function = "create_" + saved_button_id + "_submenu(this)";

  return submenu_creation_function;
}

function get_button_name(chosen_button)
{
  if(chosen_button.parentNode.className == "submenu") //If it's a submenu button
  {
    return chosen_button.children[1].innerText;
  }

  else if(chosen_button.parentNode.className == "submenu_row") //If it's a nav bar button
  {
    return capitalize_first_letters(delete_underscores(chosen_button.id));
  }

  else //If it's a path bar button
  {
    return chosen_button.innerText;
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





// //Deleting home submenu
// let path_bar = document.getElementsByTagName("nav")[0];
// let newsfeed = document.getElementById("newsfeed");
//
// if(document.getElementById("newsfeed"))
// {
//   saved_button_id = chosen_button.id;
//   clean_slate(path_bar);
//   full_clean_slate(newsfeed);
//   add_path_bar();
//   append_path_bar(path_bar, chosen_button);
//   create_level_submenu("show_level_submenu(this)");
// }
//
// else if(document.getElementById("level_submenu_container"))
// {
//   append_path_bar(path_bar, chosen_button);
//   let level_container = document.getElementById("level_submenu_container");
//   full_clean_slate(level_container);
//   create_level_submenu("create_sciences_formelles_submenu()");
// }
//
// else
// {
//   // append_path_bar(path_bar, chosen_button);
//   let transition_container = document.getElementById("transition_submenu_container");
//   full_clean_slate(transition_container);
//   create_level_submenu("create_sciences_formelles_submenu()");
// }
