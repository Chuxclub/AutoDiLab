function reveal_sequences(chosen_chapter)
{
  let sequences = chosen_chapter.getElementsByClassName("sequence");

  let hyperlink = document.createElement("a");
  hyperlink.setAttribute("href", "https://www.google.fr/");
  hyperlink.appendChild(document.createTextNode("Lire ce cours..."));

  for(let i = 0; i < sequences.length; i++)
  {
    sequences[i].style.display = "initial";
  }

  chosen_chapter.children[0].appendChild(hyperlink);
}


function conceal_sequences(chosen_chapter)
{
  let sequences = chosen_chapter.getElementsByClassName("sequence");

  for(let i = 0; i < sequences.length; i++)
  {
    sequences[i].style.display = "none";
  }

  chosen_chapter.children[0].removeChild(chosen_chapter.children[0].lastChild);
}
