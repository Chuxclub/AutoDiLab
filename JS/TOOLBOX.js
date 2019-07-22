function delete_underscores(string)
{
  for(let i = 0; i < string.length; i++)
  {
    if(string.charAt(i) == "_")
    {
      let split_string = string.split("_");
      let new_string = split_string[0] + " " + split_string[1];
      return new_string;
    }
  }
}

function capitalize_first_letters(string)
{
  for(let i = 0; i < string.length; i++)
  {
    if(string.charAt(i) == " ")
    {
      let split_string = string.split(" ");

      let first_letter = split_string[0].slice(0, 1);
      let first_word_letters = split_string[0].slice(1, split_string[0].length);

      let second_letter = split_string[1].slice(0, 1);
      let second_word_letters = split_string[1].slice(1, split_string[1].length);

      first_letter = first_letter.toUpperCase();
      second_letter = second_letter.toUpperCase();

      let new_string = first_letter + first_word_letters + " " + second_letter + second_word_letters;
      return new_string;
    }
  }
}
