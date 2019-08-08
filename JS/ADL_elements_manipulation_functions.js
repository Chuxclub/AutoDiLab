/* ==================== HEADER ==================== */
function display_standard_header(relative_path_to_root)
{
  //Creating header main container
  let header_title_container = document.createElement("h1");
  header_title_container.setAttribute("title", "Retourner à la page d'accueil");

  //Creating and adding hyperlink container
  let hyperlink = document.createElement("a");
  let hyperlink_interactions =
  ["href", relative_path_to_root + "home.html", "id", "website_title", "onmouseover", "highlight_chosen_button(this)",
  "onclick", "button_pressure_effect(this)", "onmouseout", "remove_highlight_effect(this)"];
  append_attributes(hyperlink, hyperlink_interactions);
  header_title_container.appendChild(hyperlink);
  let title_hyperlink = header_title_container.children[0];

  //Adding text to header title in hyperlink container
  let header_title_txt = document.createTextNode("AutoDiLab");
  title_hyperlink.appendChild(header_title_txt);

  //Adding website icon in hyperlink container
  let website_icon = document.createElement("img");
  append_attributes(website_icon, ["src", relative_path_to_root + "Icons/adl_icon2.png",
                                   "alt", "AutoDiLab symbol", "class", "home_header_icon"]);
  title_hyperlink.appendChild(website_icon);

  //Adding research tool to h1 main container
  let research_tool = document.createElement("img");
  append_attributes(research_tool, ["src", relative_path_to_root + "Icons/icons8-detective-64.png",
                                   "alt", "Research icon", "class", "home_header_icon tool",
                                   "onmouseover", "highlight_chosen_button(this)", "onclick", "button_pressure_effect(this)",
                                   "onmouseout", "remove_highlight_effect(this)"]);
  header_title_container.appendChild(research_tool);

  //Adding header main container to document header
  document.getElementsByTagName("header")[0].appendChild(header_title_container);
}

/* ==================== FOOTER ==================== */
function display_standard_footer()
{

}

/* ==================== BUTTONS FUNCTIONS ==================== */
function add_buttons_interactions(buttons_array, interactions_array)
{
  for(let i = 0; i < buttons_array.length; i++)
  {
    for(let j = 0; j < interactions_array.length; j += 2)
    {
      buttons_array[i].setAttribute(interactions_array[j], interactions_array[j+1]);
    }
  }
}

function button_pressure_effect(submenu_button)
{
  submenu_button.style.boxShadow = "0px 5px 20px -10px rgba(0,0,0,0.57) inset";
}

//The hyperbutton (<a> html element) contains the button (<figure>)
//which contains a picture and a caption
function create_custom_hyperbutton(button_class_name, icon_class_name, figcaption_class_name,
                                   href, img_src, img_alt, figcaption)
{
  let hyperbutton = document.createElement("a");
  let button = document.createElement("figure");
  let button_picture = document.createElement("img");
  let button_caption_container = document.createElement("figcaption");
  let button_caption = document.createTextNode(figcaption);

  hyperbutton.setAttribute("href", href);
  button_picture.src = img_src;
  button_picture.alt = img_alt;
  button_picture.className = icon_class_name;
  button.className = button_class_name;

  button_caption_container.className = figcaption_class_name;

  button.appendChild(button_picture);
  button_caption_container.appendChild(button_caption);
  button.appendChild(button_caption_container);
  hyperbutton.appendChild(button);

  return hyperbutton;
}

//Javascript buttons with user defined CSS, interactions are added thanks
//to the add_buttons_interactions() function
function create_custom_js_button(button_class_name, icon_class_name, figcaption_class_name, img_src, img_alt, figcaption)
{
  let button = document.createElement("figure");
  let button_picture = document.createElement("img");
  let button_caption_container = document.createElement("figcaption");
  let button_caption = document.createTextNode(figcaption);

  button_picture.src = img_src;
  button_picture.alt = img_alt;
  button_picture.className = icon_class_name;
  button.className = button_class_name;

  button_caption_container.className = figcaption_class_name;

  button.appendChild(button_picture);
  button_caption_container.appendChild(button_caption);
  button.appendChild(button_caption_container);

  return button;
}

function create_iconless_js_button(button_class_name, button_name)
{
  let button = document.createElement("p");
  let button_txt = document.createTextNode(button_name);

  button.className = button_class_name;

  button.appendChild(button_txt);

  return button;
}

//Default javascript buttons interactions are as follow:
//"onmouseover", "highlight_chosen_button(this)",
//"onmousedown", "button_pressure_effect(this)",
//"onmouseout", "remove_highlight_effect(this)"
function create_default_button_interactions()
{
  let default_interactions_array = ["onmouseover", "highlight_chosen_button(this)",
                            "onmousedown", "button_pressure_effect(this)",
                            "onmouseout", "remove_highlight_effect(this)",];

  return default_interactions_array;
}

function create_hyperbutton(href, img_src, img_alt, figcaption)
{
  let hyperbutton = document.createElement("a");
  let button = document.createElement("figure");
  let button_picture = document.createElement("img");
  let button_caption_container = document.createElement("figcaption");
  let button_caption = document.createTextNode(figcaption);

  hyperbutton.setAttribute("href", href);
  button_picture.src = img_src;
  button_picture.alt = img_alt;
  button_picture.className = "icon_loner";
  hyperbutton.className = "hyperbutton";

  button_caption_container.className = "simple_caption";

  button.appendChild(button_picture);
  button_caption_container.appendChild(button_caption);
  button.appendChild(button_caption_container);
  hyperbutton.appendChild(button);

  return hyperbutton;
}

//Default javascript button CSS is: .button, .icon_loner, .simple_caption
//defined in home_nav_bar.css under BUTTONS category
//A javascript button isn't contained in a <a> html element
//Interactions are added thanks to the add_buttons_interactions() function
function create_js_button(img_src, img_alt, figcaption)
{
  let button = document.createElement("figure");
  let button_picture = document.createElement("img");
  let button_caption_container = document.createElement("figcaption");
  let button_caption = document.createTextNode(figcaption);

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

function create_unavailable_js_button(img_src, img_alt, figcaption)
{
  let button = document.createElement("figure");
  let button_picture = document.createElement("img");
  let button_caption_container = document.createElement("figcaption");
  let button_caption = document.createTextNode(figcaption);

  button_picture.src = img_src;
  button_picture.alt = img_alt;
  button_picture.className = "icon_loner unavailable";
  button.className = "button";
  button.setAttribute("onmouseenter", "set_unavailable_infobulle(this)");
  button.setAttribute("onmouseleave", "unset_unavailable_infobulle(this)");

  button_caption_container.className = "simple_caption unavailable";

  button.appendChild(button_picture);
  button_caption_container.appendChild(button_caption);
  button.appendChild(button_caption_container);

  return button;
}

function highlight_chosen_button(submenu_button)
{
  submenu_button.style.borderRadius = "5px";
  submenu_button.style.boxShadow = "0px 5px 40px -10px rgba(0,0,0,0.57)";
  submenu_button.style.transition= "all 0.3s ease 0s";
}

function remove_highlight_effect(submenu_button)
{
    submenu_button.removeAttribute("style", "border-radius");
    submenu_button.removeAttribute("style", "box-shadow");
}


/* ==================== EXPAND/COLLAPSE ARROWS FUNCTIONS ==================== */

//This function is used on arrows icon found in the right hand corner of
//all submenus. It uses the display CSS attribute to hide elements with the
//onclick event. The class name used is "collapsed" which can be found
//in home_nav_bar.css under SUBMENU_BODY
function expand_submenu(arrow_icon)
{
  let submenu_first_row = arrow_icon.parentNode.nextElementSibling.children[1];
  let submenu_second_row = arrow_icon.parentNode.nextElementSibling.children[2];

  //If the submenu is collapsed then, onclick, expand it
  if (submenu_first_row.className == "submenu_row collapsed")
  {
    submenu_first_row.className = "submenu_row";
    submenu_second_row.className = "submenu_row";
    arrow_icon.src = "./Icons/icons8-collapse-arrow-24.png";
    arrow_icon.alt = "Flèche pour déplier le menu";
  }

  //Otherwise, onclick, collapse it
  else
  {
    submenu_first_row.className = "submenu_row collapsed";
    submenu_second_row.className = "submenu_row collapsed";
    arrow_icon.src = "./Icons/icons8-expand-arrow-24.png";
    arrow_icon.alt = "Flèche pour replier le menu";
  }
}


/* ==================== USER INTERACTIONS FUNCTIONS ==================== */
function set_unavailable_infobulle(obj)
{

  if(obj.className == "button")
  {
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
    let span = create_span("infobulle", "               Bientôt disponible! \t");
    span.style.whiteSpace = "pre";
    obj.nextElementSibling.appendChild(span);
  }

  else
  {
    let span = create_span("infobulle", "               Bientôt disponible! \t");
    span.style.whiteSpace = "pre";
    obj.appendChild(span);
  }
}

function unset_unavailable_infobulle(obj)
{
  if(obj.className == "button")
  {
    while(obj.lastChild.tagName == "SPAN")
    {
      obj.removeChild(obj.lastChild);
    }
  }

  else if(obj.tagName == "FIGURE")
  {
    while(obj.nextElementSibling.lastChild.tagName == "SPAN")
    {
      obj.nextElementSibling.removeChild(obj.nextElementSibling.lastChild);
    }
  }

  else
  {
    while(obj.lastChild.tagName == "SPAN")
    {
      obj.removeChild(obj.lastChild);
    }
  }
}
