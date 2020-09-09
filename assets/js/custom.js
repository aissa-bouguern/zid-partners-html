$('.nav-link').click(function () {
  const $this = $(this);
  const target = $this.data('target');

  $('.nav-link').removeClass('active');
  $this.addClass('active');

  if (!target)
    return $('.partners-category')
      .removeClass('d-none')
      .addClass('has-separator');

  $('.partners-category').addClass('d-none').removeClass('has-separator');
  $(target).removeClass('d-none');
});
