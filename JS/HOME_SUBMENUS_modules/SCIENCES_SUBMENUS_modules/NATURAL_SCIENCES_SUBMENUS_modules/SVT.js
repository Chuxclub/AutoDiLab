/* ~~~~~~~~ SVT submenu ~~~~~~~~ */
function create_svt_submenu_buttons()
{
  let biology_button = create_js_button("./Icons/svt_submenu/icons8-microorganisms-80.png", "Biologie", "Biologie");
  let geology_button = create_js_button("./Icons/svt_submenu/icons8-globe-earth-64.png", "Géologie", "Géologie");

  let svt_submenu_buttons = [biology_button, geology_button];
  let interactions_array = ["onmouseover", "highlight_chosen_button(this)",
                            "onmousedown", "button_pressure_effect(this)",
                            "onmouseup", "show_level_submenu()",
                            "onmouseout", "remove_highlight_effect(this)"];

  add_buttons_interactions(svt_submenu_buttons, interactions_array);

  return svt_submenu_buttons;
}
