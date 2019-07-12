function expand_submenu(obj)
{
  let row1 = obj.nextElementSibling.children[1];
  let row2 = obj.nextElementSibling.children[2];
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
