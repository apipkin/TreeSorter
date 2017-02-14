$(function () {
  const $form = $('form');
  const $input = $('#q');
  const $btn = $('form .btn');
  const $submitBtn = $('form .btn[type="submit"]');
  const $resetBtn = $('form .btn[type="reset"]');
  const $resultPanel = $('.panel.result');
  const $result = $('.result .panel-content');
  const $panelLoading = $('.panel .loading');

  $input.data('prev-val', $input.val());

  $input.on('keyup', function (e) {    
    if ($input.val() !== $input.data('prev-val')) {      
      hideResultsPanel();
    }
    $input.data('prev-val', $input.val());
    updateButtons();
  });

  $input.on('input', function (e) {
    updateButtons();
  });

  $form.on('submit', function (e) {
    e.preventDefault();
    var data = $form.serialize();
    delete data.q;

    $.ajax('/sort/' + encodeURIComponent($input.val()), {
      data: data,
      beforeSend: handleStart,
      complete: handleEnd,
      success: handleSuccess,
      failure: handleFaiure,
      method: 'POST'
    });
  });

  $form.on('reset', function (e){
    setTimeout(function (){
    updateButtons();
    hideResultsPanel();
    }, 0);
  });

  function handleStart() {
    $btn.attr('disabled', true);
    $panelLoading.removeClass('hidden');
  }

  function handleEnd() {
    $btn.attr('disabled', null);
    $panelLoading.addClass('hidden');
  }
  
  function handleSuccess(data) {
    if (data.error) {
      hideResultsPanel();
      alert(data.error.message);
    } else {
      $result.parent().removeClass('hidden');
      $result.html(data.sorted);
    }
  }

  function handleFaiure(data) {
    console.log(data);
  }

  function hideResultsPanel() {
    $resultPanel.addClass('hidden');
  }

  function updateButtons() {
    if ($input.val()) {
      $submitBtn.attr('disabled', null);
      $resetBtn.attr('disabled', null);
    } else {
      $submitBtn.attr('disabled', true);
      $resetBtn.attr('disabled', true);
    }
  }
  updateButtons();
});

