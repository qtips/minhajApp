Ext.define('MinhajApp.view.MainMenu', {
    extend: 'Ext.Container',
    alias: 'widget.mainMenu',

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
                    ui: 'action',
                    flex: 1
                },
                items: [
                    {

                        action: 'event',
                        text: 'Eventer',
                        iconCls: 'star'

                    },
                    {
                        action: 'eventCalendar',
                        text: 'Event Kalender',
                        iconCls: 'arrow_right'

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
                    ui: 'action',
                    width   : "50%"
                },
                items: [
                    {
                        action: 'brochure',
                        text: 'Brosjyrer',
                        iconCls:'home'

                    },
                    {
                        action: 'about',
                        text: "Om oss",
                        iconCls: "maps"

                    }
                ]
            }
        ]
    }


});
