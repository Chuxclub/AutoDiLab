/* ==================== INTERACTIONS SPECIFIC TO LESSONS PAGES ==================== */
function reveal_or_hide_user_toolbar_button_subchoices(id)
{
  let subchoices = document.getElementById(id);

  if (subchoices.children[0].style.display == "none")
  {
    for(let i = 0; i < subchoices.children.length; i++)
    {
      subchoices.children[i].style.display = "block";
    }
  }

  else
  {
    for(let i = 0; i < subchoices.children.length; i++)
    {
      subchoices.children[i].style.display = "none";
    }
  }
}

/* ==================== STANDARD PARTS LOADING FUNCTION ==================== */
function load_lessons_standard_parts_and_interactions()
{
  generate_standard_parts_and_interactions('./../../../../../../../../../../../');
  display_lesson_nav();

  //Necessary for reveal_or_hide_user_toolbar_button_subchoices(id) to work
  //at the very first click
  let user_toolbar_button_subchoices = document.getElementsByClassName("user_toolbar_button_subchoices");
  for(let i = 0; i < user_toolbar_button_subchoices.length; i++)
  {
    user_toolbar_button_subchoices[i].style.display = "none";
  }

  //Assigning to "format texte" button under "cours" button (in user tools bar on the right)
  //current page href path
  let lesson_button = document.getElementById("cours_subchoices").children[0];
  lesson_button.setAttribute("href", window.location.href);
}


/* ==================== PARTS SPECIFIC TO LESSONS PAGES ==================== */
function display_lesson_nav()
{
  let lesson_nav_bar = document.getElementById("lesson_navigation");

    //Declaring necessary variables
    let lesson_titles = get_lesson_titles();
    lesson_titles = correct_lesson_titles(lesson_titles);
    let lesson_titles_ids = get_lesson_titles_ids();

    //Creating plan container
    let plan_container = document.createElement("div");
    plan_container.setAttribute("class", "plan_container");

    //Creating lesson nav bar title
    let lesson_nav_bar_title = document.createElement("h2");
    let lesson_nav_bar_title_content = document.createTextNode("Plan du cours:");
    lesson_nav_bar_title.appendChild(lesson_nav_bar_title_content);
    lesson_nav_bar_title.setAttribute("class", "lesson_nav_bar_title");

    //Appending lesson nav bar title to plan container
    plan_container.appendChild(lesson_nav_bar_title);

    //Creating list of lesson titles
    let lesson_list_container = document.createElement("ul");

    for(let i = 0; i < lesson_titles.length; i++)
    {
      let list_item = document.createElement("li");
      let hyperlink = document.createElement("a");
      let list_item_content = document.createTextNode(lesson_titles[i]);

      hyperlink.setAttribute("href", lesson_titles_ids[i]);
      hyperlink.appendChild(list_item_content);

      list_item.appendChild(hyperlink);
      lesson_list_container.appendChild(list_item);
    }

    //Appending lesson titles list to plan container
    plan_container.appendChild(lesson_list_container);

    //Appending plan to lesson nav bar
    lesson_nav_bar.appendChild(plan_container);
}

/* ~~~~~~~ secondary functions for display_lesson_nav() ~~~~~~~ */
function correct_lesson_titles(lesson_titles_array)
{
  for(let i = 0; i < lesson_titles_array.length; i++)
  {
    for(let j = 0; j < lesson_titles_array[i].length; j++)
    {
      if(lesson_titles_array[i].charAt(j) == ":" && j == lesson_titles_array[i].length - 1)
      {
        lesson_titles_array[i] = lesson_titles_array[i].replace(":", " ");
      }
    }
  }

  return lesson_titles_array;
}

function display_chapter_title(chosen_cell, title)
{
  let chapter_bar_header = chosen_cell.parentNode.firstElementChild;
  let title_container = chapter_bar_header.appendChild(document.createElement("h4"));

  title_container.setAttribute("class", "chapter_cell_title");
  title_container.appendChild(document.createTextNode(title));
}

function remove_chapter_title(chosen_cell)
{
  let chapter_bar_header = chosen_cell.parentNode.firstElementChild;
  chapter_bar_header.removeChild(chapter_bar_header.firstElementChild);

}

function get_lesson_titles()
{
  let descendants = document.getElementById("lesson").getElementsByTagName("*");
  let lesson_plan = [];

  for(let i = 0; i < descendants.length; i++)
  {

    if(descendants[i].tagName == "H1" || descendants[i].tagName == "H2" || descendants[i].tagName == "H3" ||
       descendants[i].tagName == "H4" || descendants[i].tagName == "H5" || descendants[i].tagName == "H6")
    {
        lesson_plan.push(descendants[i].innerText);
    }
  }

  return lesson_plan;
}

function get_lesson_titles_ids()
{
  let descendants = document.getElementById("lesson").getElementsByTagName("*");
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
