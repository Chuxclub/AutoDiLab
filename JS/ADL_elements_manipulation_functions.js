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

function create_button(img_src, img_alt, caption)
{
  let button = document.createElement("figure");
  let button_picture = document.createElement("img");
  let button_caption_container = document.createElement("figcaption");
  let button_caption = document.createTextNode(caption);

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
