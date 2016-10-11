(function($) {
  'use strict';

  $(function() {

    // 選択中のカテゴリーからアイテムを削除する関数
    function removeCheckedItem(itemId) {
      $('[data-itemid=' + itemId + ']').remove();
    }

    // チェックボックスの処理
    $('input').on('click', function() {

      var $thisItemId = $(this).attr('id');
      var $categolyTitle = $('.nav .active').text();
      var $categolyName = $(this).val();
      var $checkedItem = new Array($categolyTitle, $categolyName);

      if ($(this).prop('checked')) {
        $('#checkedList').append('<div class="checkedList--item" data-itemid=' + $thisItemId + '><span>' + $checkedItem + '</span><button class="">&times;</button></div>');
      } else {
        removeCheckedItem($thisItemId);
      }
    })

    // 削除ボタンの処理
    $('#checkedList').on('click', 'button', function() {

      var dataItemId = $(this).parents().data('itemid');
      var metaItemId = '#' + dataItemId;

      removeCheckedItem(dataItemId);
      $(metaItemId).prop('checked', false);
    })

  });

}).call(this, jQuery);
