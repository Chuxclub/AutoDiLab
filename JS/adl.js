/* ==================== MAIN FUNCTIONS ==================== */

function button_pressure_effect(submenu_button)
{
  submenu_button.style.boxShadow = "0px 5px 20px -10px rgba(0,0,0,0.57) inset";
}

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





/* ==================== SECUNDARY FUNCTIONS ==================== */

function create_span(span_class, span_txt)
{
  let span = document.createElement("span");
  let span_content = document.createTextNode(span_txt);
  span.setAttribute("class", span_class);
  span.appendChild(span_content);
  return span;
}
