var clip = new Clipboard('.btn');

clip.on("success", function() {
  document.body.insertAdjacentHTML('beforeend', '<div></div>');
});
clip.on("error", function() {
  document.body.insertAdjacentHTML('beforeend', '<div></div>');
});