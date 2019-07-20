/* ==================== DOM DELETION FUNCTIONS ==================== */
function clean_slate(starting_node)
{
  while(starting_node.hasChildNodes())
  {
    starting_node.removeChild(starting_node.firstChild);
  }
}

function full_clean_slate(starting_node)
{
  while(starting_node.hasChildNodes())
  {
    starting_node.removeChild(starting_node.firstChild);
  }
  starting_node.parentNode.removeChild(starting_node);
}
