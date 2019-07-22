/* ~~~~~~~~ PC submenu ~~~~~~~~ */
function create_pc_submenu_buttons()
{
  let classical_mecanic_button = create_custom_js_button("custom_button", "icon_loner", "long_caption", "./Icons/pc_submenu/icons8-satellite-in-orbit-40.png", "Mécanique classique", "Mécanique classique");
  let quantical_mecanic_button = create_custom_js_button("custom_button", "icon_loner", "long_caption", "./Icons/pc_submenu/icons8-physics-64.png", "Physique subatomique", "Physique subatomique");
  let electromagnetism_button = create_custom_js_button("custom_button", "icon_loner", "long_caption", "./Icons/pc_submenu/icons8-magnet-64.png", "Electro-magnétisme", "Electro-magnétisme");
  let thermodynamics_button = create_custom_js_button("custom_button", "icon_loner", "long_caption", "./Icons/pc_submenu/icons8-fire-64.png", "Thermo-dynamique", "Thermo-dynamique");

  let optic_button = create_js_button("./Icons/pc_submenu/icons8-aperture-64.png", "Optique", "Optique");
  let relativity_button = create_js_button("./Icons/pc_submenu/icons8-speed-64.png", "Relativité", "Relativité");
  let astrophysics_button = create_js_button("./Icons/pc_submenu/icons8-planet-on-the-dark-side-64.png", "Astronomie", "Astronomie");
  let chemistry_button = create_js_button("./Icons/pc_submenu/icons8-test-tube-64.png", "Chimie", "Chimie");

  let pc_submenu_buttons = [classical_mecanic_button, quantical_mecanic_button, electromagnetism_button, thermodynamics_button,
                            optic_button, relativity_button, astrophysics_button, chemistry_button];

  let interactions_array = ["onmouseover", "highlight_chosen_button(this)",
                            "onmousedown", "button_pressure_effect(this)",
                            "onmouseout", "remove_highlight_effect(this)"];

  add_buttons_interactions(pc_submenu_buttons, interactions_array);

  return pc_submenu_buttons;
}
