Ext.define('MinhajApp.view.Main', {
    extend: 'Ext.Container',

    xtype: 'main',
    requires: [
        'MinhajApp.view.SquareButton'
    ],

    config: {
        layout: 'vbox',

        items: [
            {
                xtype: 'panel',
                flex: 1,
                layout: {
                    type: 'hbox',
                    align: "end"
                },
                defaults: {
                    xtype: 'sButton',
                    width: "50%",
                    align: "end",
                    flex: 1
                },
                items: [
                    {
                        text: '1',
                        style: 'background-color:red',
                        handler: function () {
                            console.log("pushed 1");
                        }
                    },
                    {
                        text: '2',
                        style: 'background-color:black',
                        handler: function () {
                            console.log("pushed 2");
                        }
                    }
                ]

            },

            {
                xtype: 'panel',
                layout: 'hbox',
                flex: 1,
                defaults: {
                    flex: 1,
                    xtype: 'sButton',
                    width: "50%"
                },
                items: [
                    {
                        text: "3",
                        style: 'background-color:black',
                        handler: function () {
                            console.log("pushed 3");
                        }
                    },
                    {
                        text: "4",
                        style: 'background-color:red',
                        handler: function () {
                            console.log("pushed 4");
                        }
                    }
                ]
            }
        ]
    }


});
