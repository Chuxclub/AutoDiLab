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
               class="home_header_icon unavailable"/>
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
                                   "alt", "AutoDiLab symbol", "class", "home_header_icon",
                                   "title", "Icon made by Freepik from www.flaticon.com"]);
  title_hyperlink.appendChild(website_icon);

  //Adding research tool to h1 main container
  let research_tool = document.createElement("img");
  append_attributes(research_tool, ["src", relative_path_to_root + "Icons/icons8-detective-64.png",
                                   "alt", "Research icon", "class", "home_header_icon tool hidden"]);
  header_title_container.appendChild(research_tool);

  //Adding header main container to document header
  document.getElementsByTagName("header")[0].appendChild(header_title_container);
}

/* ==================== FOOTER ==================== */
function display_standard_footer(relative_path_to_root)
{
  /* This is the HTML version of what is coded down here:
      <h6>Informations:</h6>
      <ul>
          <li> <a href="./Content/Misc/site_map.html">FAQ</a> </li>
          <li> <a href="./Content/Misc/synoptic.html">Qui suis-je?</a> </li>
          //<li> <a href="./Content/Misc/synoptic.html">Remerciements</a> </li>
          <li> <a href="mailto:florian-1992@hotmail.fr">Me contacter</a> </li>
      </ul>

      <ul id="footer_buttons">
        <li>
          <a href="https://www.facebook.com/autodilab/">
            <img src="relative_path_to_root + "Icons/icons8-facebook-64.png" "
                 alt="Icône vers la page Facebook du projet AutoDiLab"
                 class="fb_hyperbutton_image"
                 onmouseover="highlight_chosen_button(this)"
                 onclick="button_pressure_effect(this)"
                 onmouseout="remove_highlight_effect(this)"
                 title="Récompenser l'auteur du site avec un tip!"/>
          </a>

          <a href="https://fr.tipeee.com/autodilab">
            <img src="relative_path_to_root + "Icons/tipeee-tip-btn.png" "
                 alt="Icône vers la page Tipeee du projet AutoDiLab"
                 class="footer_hyperbutton"
                 onmouseover="highlight_chosen_button(this)"
                 onclick="button_pressure_effect(this)"
                 onmouseout="remove_highlight_effect(this)"
                 title="Récompenser l'auteur du site avec un tip!"/>
          </a>
        </li>
      </ul>
  */

  //Creating title
  let list_title = document.createElement("h6");
  let list_title_txt = document.createTextNode("Informations:")
  list_title.appendChild(list_title_txt);

  //Creating first unordered list
  let unordered_options_list_container = document.createElement("ul");
  let list_item1 = document.createElement("li");
  let list_item2 = document.createElement("li");
  let list_item3 = document.createElement("li");
  let list_item4 = document.createElement("li");
  unordered_options_list_container.appendChild(list_item1);
  unordered_options_list_container.appendChild(list_item2);
  unordered_options_list_container.appendChild(list_item3);
  unordered_options_list_container.appendChild(list_item4);


  //Creating buttons unordered list
  let buttons_list_container = document.createElement("ul");
  let buttons_list_item = document.createElement("li");
  buttons_list_container.setAttribute("id", "footer_buttons");
  buttons_list_container.appendChild(buttons_list_item);


  //Creating facebook hyperbutton
  let facebook_hyperbutton = document.createElement("a");
  facebook_hyperbutton.setAttribute("href", "https://www.facebook.com/autodilab/");
  facebook_hyperbutton.setAttribute("class", "fb_footer_hyperbutton");

  let facebook_img = document.createElement("img");
  facebook_img.setAttribute("src", relative_path_to_root + "Icons/icons8-facebook-64.png");
  facebook_img.setAttribute("alt", "Icône vers la page Facebook du projet AutoDiLab");
  facebook_img.setAttribute("class", "fb_footer_hyperbutton_image");
  facebook_img.setAttribute("onmouseover", "highlight_chosen_button(this)");
  facebook_img.setAttribute("onclick", "button_pressure_effect(this)");
  facebook_img.setAttribute("onmouseout", "remove_highlight_effect(this)");
  facebook_img.setAttribute("title", "Découvrir la page Facebook du site");

  facebook_hyperbutton.appendChild(facebook_img);

  //Creating tipeee hyperbutton
  let tipeee_hyperbutton = document.createElement("a");
  tipeee_hyperbutton.setAttribute("href", "https://fr.tipeee.com/autodilab");
  tipeee_hyperbutton.setAttribute("class", "footer_hyperbutton");

  let tipeee_img = document.createElement("img");
  tipeee_img.setAttribute("src", relative_path_to_root + "Icons/tipeee-logo.png");
  tipeee_img.setAttribute("alt", "Icône vers la page Tipeee du projet AutoDiLab");
  tipeee_img.setAttribute("class", "footer_hyperbutton_image");
  tipeee_img.setAttribute("onmouseover", "highlight_chosen_button(this)");
  tipeee_img.setAttribute("onclick", "button_pressure_effect(this)");
  tipeee_img.setAttribute("onmouseout", "remove_highlight_effect(this)");
  tipeee_img.setAttribute("title", "Récompenser l'auteur du site avec un tip!");

  tipeee_hyperbutton.appendChild(tipeee_img);

  //Adding facebook and tipeee hyperbuttons in list item
  buttons_list_container.children[0].appendChild(facebook_hyperbutton);
  buttons_list_container.children[0].appendChild(tipeee_hyperbutton);

  //Adding FAQ hyperlink in list item 1
  let site_map_hyperlink_container = document.createElement("a");
  site_map_hyperlink_container.setAttribute("href", relative_path_to_root + "Content/Misc/FAQ.html");
  let site_map_hyperlink_text = document.createTextNode("FAQ");
  site_map_hyperlink_container.appendChild(site_map_hyperlink_text);
  unordered_options_list_container.children[0].appendChild(site_map_hyperlink_container);

  //Adding Who am I hyperlink in list item 2
  let synoptic_hyperlink_container = document.createElement("a");
  synoptic_hyperlink_container.setAttribute("href", relative_path_to_root + "Content/Misc/qui_suis_je.html");
  let synoptic_hyperlink_text = document.createTextNode("Qui suis-je?");
  synoptic_hyperlink_container.appendChild(synoptic_hyperlink_text);
  unordered_options_list_container.children[1].appendChild(synoptic_hyperlink_container);

  //Adding credits hyperlink in list item 3
  let icons_hyperlink_container = document.createElement("a");
  icons_hyperlink_container.setAttribute("href", "https://icons8.com/icons");
  let icons_hyperlink_text = document.createTextNode("Merci à icons8 pour les icônes!");
  icons_hyperlink_container.appendChild(icons_hyperlink_text);
  unordered_options_list_container.children[2].appendChild(icons_hyperlink_container);

  //Adding contact me hyperlink in list item 4
  let contact_me_hyperlink_container = document.createElement("a");
  contact_me_hyperlink_container.setAttribute("href", "mailto:florian-1992@hotmail.fr");
  let contact_me_hyperlink_text = document.createTextNode("Me contacter");
  contact_me_hyperlink_container.appendChild(contact_me_hyperlink_text);
  unordered_options_list_container.children[3].appendChild(contact_me_hyperlink_container);

  //Adding footer to document
  let footer = document.getElementsByTagName("footer")[0];
  footer.appendChild(list_title);
  footer.appendChild(unordered_options_list_container);
  footer.appendChild(buttons_list_container);
}
