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

  if(obj.className == "submenu_choice")
  {

    for(let i = 0; i < obj.children.length; i++)
    {
      obj.children[i].style.filter = "blur(2px)";
    }

    let span = create_span("infobulle", "Bientôt disponible!");
    span.style.position = "relative";
    span.style.display = "block";
    span.style.bottom = "57px";
    span.style.left = "10px";
    span.style.width = "86px";
    span.style.height = "0";
    span.style.wordWrap = "break-word";
    obj.appendChild(span);
  }

  else if(obj.tagName == "FIGURE")
  {
    obj.nextElementSibling.children[0].style.filter = "blur(2px)";
    let span = create_span("infobulle", "        Bientôt disponible! \t");
    span.style.whiteSpace = "pre";
    obj.nextElementSibling.appendChild(span);
  }

  else
  {
    obj.children[0].style.filter = "blur(2px)";
    let span = create_span("infobulle", "        Bientôt disponible! \t");
    span.style.whiteSpace = "pre";
    obj.appendChild(span);
  }
}

function unset_unavailable_infobulle(obj)
{
  if(obj.className == "submenu_choice")
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
