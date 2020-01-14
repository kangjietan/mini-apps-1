var $form = $('form');
// var input = $form[0].elements[0].value;
// console.log(input);

const onSubmitHandler = (event) => {
  event.preventDefault();
  var input = $form[0].elements[0].value;
  $.post("http://localhost:3000/submit", {input});
}

$form.on('submit', onSubmitHandler);