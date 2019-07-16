/* ==================== MAIN FUNCTIONS ==================== */

function expand_submenu(obj)
{
  let row1 = obj.parentNode.nextElementSibling.children[1];
  let row2 = obj.parentNode.nextElementSibling.children[2];
  //let collapsed = "submenu_row default_collapse";
  //let expanded = "submenu_row";
  //window.alert(row1);
  //window.alert(row2);

  if (row1.className == "submenu_row default_collapse")
  {
    row1.className = "submenu_row";
    row2.className = "submenu_row";
    obj.src = "./Icons/icons8-collapse-arrow-24.png";
    obj.alt = "Flèche pour déplier le menu";
  }

  else
  {
    row1.className = "submenu_row default_collapse";
    row2.className = "submenu_row default_collapse";
    obj.src = "./Icons/icons8-expand-arrow-24.png";
    obj.alt = "Flèche pour replier le menu";
  }
}

function set_unavailable_infobulle(obj)
{
  if(obj.tagName == "FIGURE")
  {
    obj.nextElementSibling.children[0].style.filter = "blur(1px)";
    let span = create_span("infobulle", "Désolé! Il n'y a pas encore de contenu ici. \t");
    obj.nextElementSibling.appendChild(span);
  }

  else
  {
    obj.children[0].style.filter = "blur(1px)";
    let span = create_span("infobulle", "Désolé! Il n'y a pas encore de contenu ici. \t");
    obj.appendChild(span);
  }
}

function unset_unavailable_infobulle(obj)
{
  //window.alert("Il n'y a pas encore de contenu ici");
  if(obj.tagName == "FIGURE")
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
