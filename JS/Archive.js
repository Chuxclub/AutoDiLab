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
