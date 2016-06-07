// JavaScript Document

CKEDITOR.dialog.add('silk_table_dialog', function(editor) {
  return {
    title: 'SILK Table Properties',
    minWidth: 400,
    minHeight: 200,
    contents: [{
      id: 'tab-basic',
      label: 'SILK Table Settings',
      elements: [{
          type: 'text',
          id: 'columns',
          label: 'Columns',
          validate: CKEDITOR.dialog.validate.notEmpty("Columns field cannot be empty.")
        }, {
          type: 'text',
          id: 'rows',
          label: 'Rows',
          validate: CKEDITOR.dialog.validate.notEmpty("Rows field cannot be empty.")
        },

      ]
    }, ],
    onOk: function() {
      var dialog = this;
      var columns = dialog.getValueOf('tab-basic', 'columns');
      var rows = dialog.getValueOf('tab-basic', 'rows');
      var flexRows = '<table class="silk-table">';

      function createFlexs(rows, columns) {
        flexRows += '<thead>';
        for (var e = 0; e < columns; e++) {
          flexRows += '<th>Heading</th>';
        }
        flexRows += '</thead>';

        for (var i = 0; i < rows; i++) {
          flexRows += '<tr>';

          for (var e = 0; e < columns; e++) {
            flexRows += '<td>Text</td>';
          }

          flexRows += '</tr>';
        }

      }
      createFlexs(rows, columns);
      flexRows += '</table>';
      editor.insertHtml(flexRows);
    }
  };
});
