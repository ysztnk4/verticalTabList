(function($) {
    'use strict';

    $(function() {
        // 選択中のカテゴリーからアイテムを削除する関数
        function removeCheckedItem(itemId) {
            $('[data-itemId=' + itemId + ']').remove();
        }

        // チェックボックスの処理
        var $itemInput = $('.verticalTabList .item_input');

        $itemInput.on('click', function() {
            (new Array(100))
            var thisItemId = $(this).attr('id'),
                categolyName = $('.nav .active').text(),
                itemName = $(this).val(),
                checkedItemTitle = [categolyName, itemName];

            if ($(this).prop('checked')) {
                $('#checkedList').append('<div class="checkedList--item" data-itemId=' + thisItemId + '><span>' + checkedItemTitle + '</span><button class="">&times;</button></div>');
            } else {
                removeCheckedItem(thisItemId);
            }
        })

        // 削除ボタンの処理
        $('#checkedList').on('click', 'button', function() {
            var dataItemId = $(this).parent().data('itemid'),
                metaItemId = '#' + dataItemId;

            removeCheckedItem(dataItemId);
            $(metaItemId).prop('checked', false);
        })

    });

}).call(this, jQuery);
