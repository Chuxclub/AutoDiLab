/* ==================== STANDARD PARTS LOADING FUNCTION ==================== */
function load_found_lessons_standard_parts_and_interactions()
{
  generate_standard_parts_and_interactions('./../../../../../../../../');
}

/* ==================== SEQUENCES FUNCTIONS ==================== */
function reveal_sequences(chosen_chapter)
{
  let sequences = chosen_chapter.getElementsByClassName("sequence");

  // let hyperlink = document.createElement("a");
  // hyperlink.setAttribute("href", "./Etude_de_fonction/Images_réels_et_calculs/cours1_fonctions/IRC_Fonction_Concept.html");
  // hyperlink.appendChild(document.createTextNode("Lire ce cours..."));

  for(let i = 0; i < sequences.length; i++)
  {
    sequences[i].style.display = "initial";
  }

  // chosen_chapter.children[0].children[0].appendChild(hyperlink);
}

function conceal_sequences(chosen_chapter)
{
  let sequences = chosen_chapter.getElementsByClassName("sequence");

  for(let i = 0; i < sequences.length; i++)
  {
    sequences[i].style.display = "none";
  }

  // chosen_chapter.children[0].children[0].removeChild(chosen_chapter.children[0].children[0].lastChild);
}
