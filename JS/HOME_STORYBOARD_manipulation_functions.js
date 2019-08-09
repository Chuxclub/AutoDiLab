let current_index = 0;

function get_stories()
{
  let story_container = document.getElementById("story_container");
  let stories = story_container.getElementsByTagName("div");

  return stories;
}

function hop_to_next_array_item(array)
{
  if(current_index + 1 == array.length)
  {
    current_index = 0;
  }

  else
  {
    current_index++;
  }
}

function hop_to_previous_array_item(array)
{
  if(current_index - 1 < 0)
  {
    current_index = array.length - 1;
  }

  else
  {
    current_index--;
  }
}

function reveal_previous_story()
{
  let stories = get_stories();
  hop_to_previous_array_item(stories);

  for(let i = 0; i < stories.length; i++)
  {
    if(i == current_index)
    {
      stories[current_index].className = "story";
    }

    else
    {
      stories[i].className = "hidden_story";
    }
  }
}

function reveal_next_story()
{
  let stories = get_stories();
  hop_to_next_array_item(stories);

  for(let i = 0; i < stories.length; i++)
  {
    if(i == current_index)
    {
      stories[current_index].className = "story";
    }

    else
    {
      stories[i].className = "hidden_story";
    }
  }
}
