/**
 * Created by qadeer on 16.01.14.
 */
Ext.define('MinhajApp.view.SquareButton', {
        extend: "Ext.Button",
        alias: "widget.sButton",
        initialize: function () {
            this.callParent(arguments)
            this.setHeight(this.getWidth());
        }


    }
)