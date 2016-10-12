(function($) {
    'use strict';

    $(function() {

        // 選択中のカテゴリーからアイテムを削除する関数
        function removeCheckedItem(itemId) {
            $('[data-itemid=' + itemId + ']').remove();
        }

        // チェックボックスの処理
        $('input').on('click', function() {

            (new Array(100))
            var thisItemId = $(this).attr('id'),
                categolyName = $('.nav .active').text(),
                itemName = $(this).val(),
                checkedItemTitle = [categolyName, itemName];

            if ($(this).prop('checked')) {
                $('#checkedList').append('<div class="checkedList--item" data-itemid=' + thisItemId + '><span>' + checkedItemTitle + '</span><button class="">&times;</button></div>');
            } else {
                removeCheckedItem(thisItemId);
            }
        })

        // 削除ボタンの処理
        $('#checkedList').on('click', 'button', function() {

            var dataItemId = $(this).parents().data('itemid'),
                metaItemId = '#' + dataItemId;

            removeCheckedItem(dataItemId);
            $(metaItemId).prop('checked', false);
        })

    });

}).call(this, jQuery);
