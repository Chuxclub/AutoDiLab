/* ~~~~~~~~ Maths submenu ~~~~~~~~ */
function create_maths_submenu_buttons()
{
  let analysis_button = create_js_button("./Icons/icons8-minimum-value-512.png", "Analyse", "Analyse");
  let arithmetic_button = create_js_button("./Icons/icons8-math-64.png", "Arithmétique", "Arithmétique");
  let statistics_button = create_js_button("./Icons/icons8-statistics-64.png", "Statistique", "Statistique");
  let probabilities_button = create_js_button("./Icons/icons8-dice-64.png", "Probabilités", "Probabilités");

  let methodology_button = create_js_button("./Icons/icons8-checklist-64.png", "Méthodes", "Méthodes");
  let geometry_button = create_js_button("./Icons/icons8-measurement-tool-64.png", "Géométrie", "Géométrie");
  let algebra_button = create_js_button("./Icons/icons8-data-sheet-64.png", "Algèbre", "Algèbre");
  let misc_button = create_js_button("./Icons/icons8-ask-question-64.png", "Autres", "Autres");

  let maths_submenu_buttons = [analysis_button, arithmetic_button, statistics_button, probabilities_button,
                              methodology_button, geometry_button, algebra_button, misc_button];
  let interactions_array = create_default_button_interactions();

  add_buttons_interactions(maths_submenu_buttons, interactions_array);

  return maths_submenu_buttons;
}
