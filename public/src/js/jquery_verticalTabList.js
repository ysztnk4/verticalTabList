(function($) {
  'use strict';

  $(function() {

    function removeItem(itemId) {
      $('[data-itemid=' + itemId + ']').remove();
    }

    // item を選択したときの処理
    $('input').on('click', function() {
      var $categolyName = $(this).val();
      var $categolyTitle = $('.nav .active').text();
      var $itemId = $(this).attr('id');

      if ($(this).prop('checked')) {

        var $checkedItem = new Array($categolyTitle, $categolyName);

        $('#checkedList').append('<div class="checkedList--item" data-itemid=' + $itemId + '><span>' + $checkedItem + '</span><button class="">&times;</button></div>');
      } else {
        removeItem($itemId);
      }
    })

    // 削除をクリックした時の処理
    $('#checkedList').on('click', 'button', function() {

      var itemId = $(this).parents().data('itemid');
      var metaItemId = '#' + itemId;

      removeItem(itemId);
      $(metaItemId).prop('checked', false);
    })

  });

}).call(this, jQuery);
