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

function highlight_chosen_button(obj)
{
  obj.style.borderRadius = "5px";
  obj.style.boxShadow = "0px 5px 40px -10px rgba(0,0,0,0.57)";
  obj.style.transition= "all 0.3s ease 0s";
}

function remove_highlight_effect(obj)
{
    obj.removeAttribute("style", "border-radius");
    obj.removeAttribute("style", "box-shadow");
}
/* ==================== SECUNDARY FUNCTIONS ==================== */

/*function highlight_chosen_button(obj)
{
  let container = document.createElement("div");
  let button_caption = obj.children[2].cloneNode(true);

  container.appendChild(button_caption);
  container.insertBefore(obj.children[0], container.children[0]);
  container.insertBefore(obj.children[0], container.children[1]);

  for(let i = 0; i < obj.children.length; i++)
  {
    obj.removeChild(obj.children[i]);
  }

  obj.appendChild(container);

  obj.children[0].style.width = "88px";
  obj.children[0].style.height = "45px";
  obj.children[0].style.paddingLeft = "8px";
  obj.children[0].style.paddingTop = "5px";
  obj.children[0].style.borderRadius = "5px";
  obj.children[0].style.boxShadow = "0px 5px 40px -10px rgba(0,0,0,0.57)";
  obj.style.transition= "all 0.3s ease 0s"

  }

function remove_highlight_effect(obj)
{
  let pic1 = obj.children[0].children[0];
  let pic2 = obj.children[0].children[1];
  let caption = obj.children[0].children[2];

  obj.removeChild(obj.lastChild);

  pic1.setAttribute("class", "icon");
  pic2.setAttribute("class", "icon_couple");

  obj.appendChild(caption);
  obj.insertBefore(pic2, obj.firstChild);
  obj.insertBefore(pic1, obj.firstChild);
}*/
