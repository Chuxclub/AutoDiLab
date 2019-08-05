/* ~~~~~~~~ CS submenu ~~~~~~~~ */
function create_cs_submenu_buttons()
{
  let programmation_languages_button = create_unavailable_js_button("./Icons/icons8-c-programming-64.png", "Languages", "Languages");
  let algorithms_button = create_unavailable_js_button("./Icons/icons8-module-64.png", "Algorithmes", "Algorithmes");
  let data_structures_button = create_unavailable_js_button("./Icons/icons8-flow-chart-64.png", "Données", "Données");
  let networks_button = create_unavailable_js_button("./Icons/icons8-globe-64.png", "Réseaux", "Réseaux");

  let cs_submenu_buttons = [programmation_languages_button, algorithms_button, data_structures_button, networks_button];

  let interactions_array = create_default_button_interactions();

  add_buttons_interactions(cs_submenu_buttons, interactions_array);

  return cs_submenu_buttons;
}
