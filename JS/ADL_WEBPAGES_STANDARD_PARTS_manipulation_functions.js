/* ==================== STANDARD PARTS LOADING FUNCTION ==================== */
function generate_standard_parts_and_interactions(relative_path_to_root)
{
  display_standard_header(relative_path_to_root);
  display_standard_footer(relative_path_to_root);
}

/* ==================== HEADER ==================== */

//Standard header generation. relative_path_to_root means
//relative path to get to Icons file, Content files, etc.
//depending on .html position in tree. This is a requirement
//to get pictures and other .html files.
//relative_path_to_root is specified in FOUND_LESSONS_manipulation_functions
//and LESSONS_manipulation_functions

function display_standard_header(relative_path_to_root)
{
  /* This is the html version of what is coded down here:
      <h1 title="Retourner à la page d'accueil">

        <a href="./../../../../../../../../../../../home.html"
           id="website_title"
           onmouseover="highlight_chosen_button(this)"
           onclick="button_pressure_effect(this)"
           onmouseout="remove_highlight_effect(this)">
          AutoDiLab
          <img src="./../../../../../../../../../../../Icons/adl_icon2.png"
               alt="AutoDiLab symbol"
               class="home_header_icon"/>
        </a>

        <img src="./../../../../../../../../../../../Icons/icons8-detective-64.png" alt="AutoDiLab symbol"
             title="Chercher un cours" class="home_header_icon tool"
             onmouseover="highlight_chosen_button(this)"
             onclick="button_pressure_effect(this)"
             onmouseout="remove_highlight_effect(this)"/>
      </h1>
  */

  //Creating header main container
  let header_title_container = document.createElement("h1");

  //Creating and adding hyperlink container
  let hyperlink = document.createElement("a");
  let hyperlink_interactions =
  ["href", relative_path_to_root + "home.html", "id", "website_title", "onmouseover", "highlight_chosen_button(this)",
  "onclick", "button_pressure_effect(this)", "onmouseout", "remove_highlight_effect(this)", "title", "Retourner à la page d'accueil"];
  append_attributes(hyperlink, hyperlink_interactions);
  header_title_container.appendChild(hyperlink);
  let title_hyperlink = header_title_container.children[0];

  //Adding text to header title in hyperlink container
  let header_title_txt = document.createTextNode("AutoDiLab");
  title_hyperlink.appendChild(header_title_txt);

  //Adding website icon in hyperlink container
  let website_icon = document.createElement("img");
  append_attributes(website_icon, ["src", relative_path_to_root + "Icons/adl_icon2.png",
                                   "alt", "AutoDiLab symbol", "class", "home_header_icon"]);
  title_hyperlink.appendChild(website_icon);

  //Adding research tool to h1 main container
  let research_tool = document.createElement("img");
  append_attributes(research_tool, ["src", relative_path_to_root + "Icons/icons8-detective-64.png",
                                   "alt", "Research icon", "class", "home_header_icon tool",
                                   "onmouseover", "highlight_chosen_button(this)", "onclick", "button_pressure_effect(this)",
                                   "onmouseout", "remove_highlight_effect(this)", "title", "Rechercher un cours"]);
  header_title_container.appendChild(research_tool);

  //Adding header main container to document header
  document.getElementsByTagName("header")[0].appendChild(header_title_container);
}

/* ==================== FOOTER ==================== */
function display_standard_footer(relative_path_to_root)
{
  /* This is the HTML version of what is coded down here:
      <ul>
          <li> <a href="./Content/Misc/site_map.html">Plan du Site</a> </li>
          <li> <a href="./Content/Misc/synoptic.html">Synoptique</a> </li>
          <li> <a href="mailto:florian-1992@hotmail.fr">Me contacter</a> </li>
      </ul>
  */

  //Creating unordered list
  let unordered_options_list_container = document.createElement("ul");
  let list_item1 = document.createElement("li");
  let list_item2 = document.createElement("li");
  let list_item3 = document.createElement("li");
  unordered_options_list_container.appendChild(list_item1);
  unordered_options_list_container.appendChild(list_item2);
  unordered_options_list_container.appendChild(list_item3);

  //Adding site map hyperlink in list item 1
  let site_map_hyperlink_container = document.createElement("a");
  site_map_hyperlink_container.setAttribute("href", relative_path_to_root + "Content/Misc/site_map.html");
  let site_map_hyperlink_text = document.createTextNode("Plan du Site");
  site_map_hyperlink_container.appendChild(site_map_hyperlink_text);
  unordered_options_list_container.children[0].appendChild(site_map_hyperlink_container);

  //Adding synoptic hyperlink in list item 2
  let synoptic_hyperlink_container = document.createElement("a");
  synoptic_hyperlink_container.setAttribute("href", relative_path_to_root + "Content/Misc/synoptic.html");
  let synoptic_hyperlink_text = document.createTextNode("Synoptique");
  synoptic_hyperlink_container.appendChild(synoptic_hyperlink_text);
  unordered_options_list_container.children[1].appendChild(synoptic_hyperlink_container);

  //Adding contact me hyperlink in list item 3
  let contact_me_hyperlink_container = document.createElement("a");
  contact_me_hyperlink_container.setAttribute("href", "mailto:florian-1992@hotmail.fr");
  let contact_me_hyperlink_text = document.createTextNode("Me contacter");
  contact_me_hyperlink_container.appendChild(contact_me_hyperlink_text);
  unordered_options_list_container.children[2].appendChild(contact_me_hyperlink_container);

  //Adding footer to document
  let footer = document.getElementsByTagName("footer")[0];
  footer.appendChild(unordered_options_list_container);
}
