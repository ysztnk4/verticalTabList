# Vertical Tab List

Bootstrap3のTabをベースにスタイルとjsの調整を加えた縦型のタブリスト。

## ファイル構造

```ファイル構造

-┬- public
 ├- index.html
 ├- template.html
 └- src
  ├--- css
  │ ├- jquery_verticalTabList.css
  │ └- bootstrap.min.css
  └-- js
   ├- jquery_verticalTabList.js
   └- bootstrap.min.js

```

## 使い方

Bootstrap 3のタブをcssで整形、jqueryで動作させてます。

### いるもの
- jQuery
- Bootstrap 3
 - bootstrap.min.css
 - bootstrap.min.js
- jquery_verticalTabList.js
- jquery_verticalTabList.css


```html

<div id="verticalTabList" class="row">
  <div class="col-md-5">
    <div class="verticalTabList__container">

      <ul class="nav nav-tabs">
        <li role="presentation" class="active"><a href="#tab1" data-toggle="tab">Tab 1</a></li>
        <li role="presentation"><a href="#tab2" data-toggle="tab">Tab 2</a></li>
      </ul>

      <div class="tab-content">
        <div id="tab1" class="tab-pane active">

          <div itemtype="item" class="bottom-level meta-item" class="bottom-level meta-item">
              <input type="checkbox" id="item-checkbox1" class="right-pane-checkbox item_input" value="Item Name 1">
              <label for="item-checkbox1">Item Name 1</label>
          </div>

          <div itemtype="item" class="bottom-level meta-item">
              <input type="checkbox" id="item-checkbox2" class="right-pane-checkbox item_input" value="Item Name 2">
              <label for="item-checkbox2">Item Name 2</label>
          </div>

        </div>
        <!-- End of tab-pane -->

        <div id="tab2" class="tab-pane">
          <div itemtype="item" class="bottom-level meta-item">
              <input type="checkbox" id="item-checkbox4" class="right-pane-checkbox item_input" value="Item Name 3">
              <label for="item-checkbox4">Item Name 3</label>
          </div>

          <div itemtype="item" class="bottom-level meta-item">
              <input type="checkbox" id="item-checkbox5" class="right-pane-checkbox item_input" value="Item Name 2">
              <label for="item-checkbox5">Item Name 4</label>
          </div>
        </div>
        <!-- End of tab-pane -->

      </div>
      <!-- End of tab-content -->
    </div>
    <!-- End of .verticalTabList__container -->
  </div>

  <div class="col-md-3">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">Checked Items</h3>
      </div>
      <div class="panel-body">
        <div id="checkedList" class="checkedList">
        </div>
      </div>
    </div>
    <!-- End of .panel -->
  </div>
</div>
<!-- Eof #verticalTabList -->

```
