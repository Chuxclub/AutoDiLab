/* ==================== STANDARD PARTS LOADING FUNCTION ==================== */
function load_found_lessons_standard_parts_and_interactions()
{
  generate_standard_parts_and_interactions('./../../../../../../../../');
  display_found_lessons_nav();
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

/* ==================== PARTS SPECIFIC TO FOUND LESSONS PAGES ==================== */
function display_contextual_information(author_name, last_modification_date, relative_path_to_root)
{
  // <h2>Informations sur ce chapitre:</h2>
  // <div id="chapter_contextual_information">
  //     <p>Auteur: Florian Legendre</p>
  //     <p>Dernière modification: 09/08/2019</p>
  //     <a href="https://fr.tipeee.com/autodilab"
  //        class="tipeee_button">
  //        <figure onmouseover="highlight_chosen_button(this)"
  //                onclick="button_pressure_effect(this)"
  //                onmouseout="remove_highlight_effect(this)">
  //           <img src="./../../../../../../../../../../../Icons/tipeee-tip-btn.png"
  //                alt="Icônes cliquables menant vers la page Tipeee de l'auteur du cours"
  //                id="tipeee_button_pic2"/>
  //           <img src="./../../../../../../../../../../../Icons/icons8-gift-64.png"
  //                alt="Icônes cliquables menant vers la page Tipeee de l'auteur du cours"
  //                id="tipeee_button_pic1"
  //                title="Récompenser l'auteur pour son cours"/>
  //         </figure>
  //     </a>
  // </div>

  /* ================ DELETING ANY REMAINING CONTEXTUAL INFORMATION  ================ */
  let user_bar = document.getElementById("user_tools");
  clean_slate(user_bar);

  /* ================ CREATING NEEDED ELEMENTS  ================ */
  let chapter_contextual_information_title_container = document.createElement("h2");
  let chapter_contextual_information_title_container_txt = document.createTextNode("Informations sur ce chapitre");

  let chapter_contextual_information_container = document.createElement("div");
      chapter_contextual_information_container.setAttribute("id", "chapter_contextual_information");

  let author_container = document.createElement("p");
  let author_container_txt = document.createTextNode(author_name);

  let last_modification_date_container = document.createElement("p");
  let last_modification_date_container_txt = document.createTextNode(last_modification_date);

  let tip_button_hyperbutton = document.createElement("a");
      tip_button_hyperbutton.setAttribute("href", "https://fr.tipeee.com/autodilab");
      tip_button_hyperbutton.setAttribute("class", "tipeee_button");

  let tip_hyperbutton_image_container = document.createElement("figure");
      tip_hyperbutton_image_container.setAttribute("onmouseover", "highlight_chosen_button(this)");
      tip_hyperbutton_image_container.setAttribute("onclick", "button_pressure_effect(this)");
      tip_hyperbutton_image_container.setAttribute("onmouseout", "remove_highlight_effect(this)");

  let tip_hyperbutton_image_2 = document.createElement("img");
      tip_hyperbutton_image_2.setAttribute("src", relative_path_to_root + "Icons/tipeee-tip-btn.png");
      tip_hyperbutton_image_2.setAttribute("alt", "Icônes cliquables menant vers la page Tipeee de l'auteur du cours");
      tip_hyperbutton_image_2.setAttribute("id", "tipeee_button_pic2");

  let tip_hyperbutton_image_1 = document.createElement("img");
      tip_hyperbutton_image_1.setAttribute("src", relative_path_to_root + "Icons/icons8-gift-64.png");
      tip_hyperbutton_image_1.setAttribute("alt", "Icônes cliquables menant vers la page Tipeee de l'auteur du cours");
      tip_hyperbutton_image_1.setAttribute("id", "tipeee_button_pic1");
      tip_hyperbutton_image_1.setAttribute("title", "Récompenser l'auteur pour son cours");



  /* ================ APPENDING ELEMENTS FROM BOTTOM TO TOP ================ */
  tip_hyperbutton_image_container.appendChild(tip_hyperbutton_image_2);
  tip_hyperbutton_image_container.appendChild(tip_hyperbutton_image_1);

  tip_button_hyperbutton.appendChild(tip_hyperbutton_image_container);
  last_modification_date_container.appendChild(last_modification_date_container_txt);
  author_container.appendChild(author_container_txt);
  chapter_contextual_information_title_container.appendChild(chapter_contextual_information_title_container_txt);

  chapter_contextual_information_container.appendChild(author_container);
  chapter_contextual_information_container.appendChild(last_modification_date_container);
  chapter_contextual_information_container.appendChild(tip_button_hyperbutton);

  user_bar.appendChild(chapter_contextual_information_title_container);
  user_bar.appendChild(chapter_contextual_information_container);
}


function display_found_lessons_nav()
{
    let lessons_nav_bar = document.getElementById("themes_navigation");
    let subcontainer_index = -1;

    //Declaring necessary variables
    let lessons_titles = get_lessons_titles_innerText();
    lessons_titles = correct_lessons_titles(lessons_titles);
    let lessons_titles_elements = get_lessons_titles_elements();
    let lessons_titles_ids = get_lessons_titles_ids();

    //Creating plan container
    let plan_container = document.createElement("div");
    plan_container.setAttribute("class", "plan_container");

    //Creating lesson nav bar title
    let lessons_nav_bar_title = document.createElement("h2");
    let lessons_nav_bar_title_content = document.createTextNode("Thèmes et chapitres trouvés:");
    lessons_nav_bar_title.appendChild(lessons_nav_bar_title_content);
    lessons_nav_bar_title.setAttribute("class", "lessons_nav_bar_title");

    //Appending lesson nav bar title to plan container
    plan_container.appendChild(lessons_nav_bar_title);

    //Creating list of lesson titles
    let lessons_list_container = document.createElement("ol");

    for(let i = 0; i < lessons_titles_elements.length; i++)
    {
      if(lessons_titles_elements[i].tagName == "H2")
      {
        let list_item = document.createElement("li");
        let hyperlink = document.createElement("a");
        let list_item_content = document.createTextNode(lessons_titles[i]);

        hyperlink.setAttribute("href", lessons_titles_ids[i]);
        hyperlink.appendChild(list_item_content);

        list_item.appendChild(hyperlink);
        lessons_list_container.appendChild(list_item);

        subcontainer_index++;
      }

      else
      {
        let chapters_list_container = document.createElement("ul");
        let chapters_list_item = document.createElement("li");
        let chapter_hyperlink = document.createElement("a");
        let list_item_content = document.createTextNode(lessons_titles[i]);

        chapter_hyperlink.setAttribute("href", lessons_titles_ids[i]);
        chapter_hyperlink.appendChild(list_item_content);
        chapters_list_item.appendChild(chapter_hyperlink);
        chapters_list_container.appendChild(chapters_list_item);

        lessons_list_container.children[subcontainer_index].appendChild(chapters_list_container);
      }

    }

    //Appending lesson titles list to plan container
    plan_container.appendChild(lessons_list_container);

    //Appending plan to lesson nav bar
    lessons_nav_bar.appendChild(plan_container);
}

/* ~~~~~~~ secondary functions for display_lesson_nav() ~~~~~~~ */
function correct_lessons_titles(lessons_titles_array)
{
  for(let i = 0; i < lessons_titles_array.length; i++)
  {
    for(let j = 0; j < lessons_titles_array[i].length; j++)
    {
      if(lessons_titles_array[i].charAt(j) == ":" && j == lessons_titles_array[i].length - 1)
      {
        lessons_titles_array[i] = lessons_titles_array[i].replace(":", " ");
      }
    }
  }

  return lessons_titles_array;
}

function get_lessons_titles_innerText()
{
  let descendants = document.getElementById("found_lessons").getElementsByTagName("*");
  let lesson_plan = [];

  for(let i = 0; i < descendants.length; i++)
  {

    if(descendants[i].tagName == "H2" || descendants[i].tagName == "H3")
    {
        lesson_plan.push(descendants[i].innerText);
    }
  }

  return lesson_plan;
}

function get_lessons_titles_elements()
{
  let descendants = document.getElementById("found_lessons").getElementsByTagName("*");
  let lessons_plan = [];

  for(let i = 0; i < descendants.length; i++)
  {

    if(descendants[i].tagName == "H2" || descendants[i].tagName == "H3")
    {
        lessons_plan.push(descendants[i]);
    }
  }

  return lessons_plan;
}

function get_lessons_titles_ids()
{
  let descendants = document.getElementById("found_lessons").getElementsByTagName("*");
  let lesson_titles_ids = [];

  for(let i = 0; i < descendants.length; i++)
  {

    if(descendants[i].tagName == "H1" || descendants[i].tagName == "H2" || descendants[i].tagName == "H3" ||
       descendants[i].tagName == "H4" || descendants[i].tagName == "H5" || descendants[i].tagName == "H6")
    {
        lesson_titles_ids.push("#" + descendants[i].id);
    }
  }

  return lesson_titles_ids;
}
