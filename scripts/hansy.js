function copyText(evt) {
     /* Get the text field */
  var Text = evt

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(Text);

}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      const square = entry.target.querySelector('.animate');

      if (entry.isIntersecting) {
          square.classList.add('animate-object');
          return; // if we added the class, exit the function
      }

      // We're not intersecting, so remove the class!
      square.classList.remove('animate-object');
  });
});

let target = '.animation-wrapper';
document.querySelectorAll(target).forEach((i) => {
    if (i) {
        observer.observe(i);
    }
});
