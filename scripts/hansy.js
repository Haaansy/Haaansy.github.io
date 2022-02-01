function copyText(evt) {
     /* Get the text field */
  var Text = evt

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(Text);

}