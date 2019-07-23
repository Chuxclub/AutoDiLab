function set_unavailable_infobulle(obj)
{

  if(obj.className == "button")
  {

    for(let i = 0; i < obj.children.length; i++)
    {
      obj.children[i].style.filter = "blur(2px)";
    }

    let span = create_span("infobulle", "Bientôt disponible!");
    span.style.position = "relative";
    span.style.display = "block";
    span.style.bottom = "57px";
    span.style.left = "8px";
    span.style.width = "86px";
    span.style.height = "0";
    span.style.wordWrap = "break-word";
    obj.appendChild(span);
  }

  else if(obj.tagName == "FIGURE")
  {
    obj.nextElementSibling.children[0].style.filter = "blur(2px)";
    let span = create_span("infobulle", "               Bientôt disponible! \t");
    span.style.whiteSpace = "pre";
    obj.nextElementSibling.appendChild(span);
  }

  else
  {
    obj.children[0].style.filter = "blur(2px)";
    let span = create_span("infobulle", "               Bientôt disponible! \t");
    span.style.whiteSpace = "pre";
    obj.appendChild(span);
  }
}

function unset_unavailable_infobulle(obj)
{
  if(obj.className == "button")
  {
    obj.children[0].style.filter = "blur(0)";
    obj.children[1].style.filter = "blur(0)";
    obj.children[2].style.filter = "blur(0)";
    while(obj.lastChild.tagName == "SPAN")
    {
      obj.removeChild(obj.lastChild);
    }
  }

  else if(obj.tagName == "FIGURE")
  {
    obj.nextElementSibling.children[0].style.filter = "blur(0)";

    while(obj.nextElementSibling.lastChild.tagName == "SPAN")
    {
      obj.nextElementSibling.removeChild(obj.nextElementSibling.lastChild);
    }
  }

  else
  {
    obj.children[0].style.filter = "blur(0)";

    while(obj.lastChild.tagName == "SPAN")
    {
      obj.removeChild(obj.lastChild);
    }
  }
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

// function create_next_submenu_calling_functions(saved_button_id)
// {
//   let submenu_creation_function = "create_" + saved_button_id + "_submenu(this)";
//
//   return submenu_creation_function;
// }
