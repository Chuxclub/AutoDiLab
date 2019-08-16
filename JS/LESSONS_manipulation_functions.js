/* ==================== INTERACTIONS SPECIFIC TO LESSONS PAGES ==================== */
function reveal_or_hide_user_toolbar_button_subchoices(chosen_button, targeted_submenu_id)
{
  let subchoices = document.getElementById(targeted_submenu_id);

  if (subchoices.children[0].style.display == "none")
  {
    for(let i = 0; i < subchoices.children.length; i++)
    {
      subchoices.children[i].style.display = "block";
    }

    add_next_button_top_border(chosen_button);
  }

  else
  {
    for(let i = 0; i < subchoices.children.length; i++)
    {
      subchoices.children[i].style.display = "none";
    }

    delete_next_button_top_border(chosen_button);
  }
}

/* ~~~~~~~ secondary functions for reveal_or_hide_user_toolbar_button_subchoices(id) ~~~~~~~ */
function add_next_button_top_border(choice)
{
  let user_toolbar_buttons = document.getElementsByClassName("user_toolbar_button");

  for(let i = 0; i < user_toolbar_buttons.length; i++)
  {
    if(choice.children[0].innerText == user_toolbar_buttons[i].children[0].innerText)
    {
      if(i + 1 != user_toolbar_buttons.length) //If chosen_button is not the last one...
      {
        let next_user_toolbar_button = user_toolbar_buttons[i + 1];
        next_user_toolbar_button.style.borderTop = "solid 1px lightgrey";
        next_user_toolbar_button.style.marginTop = "40px";
      }
    }
  }
}

function delete_next_button_top_border(choice)
{
  let user_toolbar_buttons = document.getElementsByClassName("user_toolbar_button");

  for(let i = 0; i < user_toolbar_buttons.length; i++)
  {
    if(choice.children[0].innerText == user_toolbar_buttons[i].children[0].innerText)
    {
      if(i + 1 != user_toolbar_buttons.length)
      {
        let next_user_toolbar_button = user_toolbar_buttons[i + 1];
        next_user_toolbar_button.style.borderTop = "0";
        next_user_toolbar_button.style.marginTop = "0";
      }
    }
  }
}

/* ==================== STANDARD PARTS LOADING FUNCTION ==================== */
function load_lessons_standard_parts_and_interactions()
{
  generate_standard_parts_and_interactions('./../../../../../../../../../../../');
  display_lesson_nav();
  set_biblio_links();

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

/* ~~~~~~~ secondary functions for load_lessons_standard_parts_and_interactions() ~~~~~~~ */
function set_biblio_links()
{
  let biblio_links = document.getElementsByClassName("biblio_link");

  for(let i = 0; i < biblio_links.length; i++)
  {
    let index = i + 1;
    biblio_links[i].appendChild(document.createTextNode(index));
    biblio_links[i].setAttribute("id", "biblio_link_" + index);
  }
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

function get_lesson_titles_elements()
{
  let descendants = document.getElementById("found_lessons").getElementsByTagName("*");
  let lesson_plan = [];

  for(let i = 0; i < descendants.length; i++)
  {

    if(descendants[i].tagName == "H2" || descendants[i].tagName == "H3")
    {
        lesson_plan.push(descendants[i]);
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
