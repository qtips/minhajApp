Ext.define('MinhajApp.view.MainMenu', {
    extend: 'Ext.NavigationView',
    alias: 'widget.mainNavigator',

    requires: [
        'MinhajApp.view.SquareButton'
    ],

    config: {

        navigationBar: {
            backButton: {
                align: 'left',
                ui: 'action'
            }
        },
        items: [
            {
                id: "mainMenu",
                xtype: 'panel',
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
                                text: 'Eventkalender',
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
                            width: "50%"
                        },
                        items: [
                            {
                                action: 'brochure',
                                text: 'Brosjyrer',
                                iconCls: 'home'

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
        ]
    },
    show: function () {
        this.callParent(arguments)
        this.showChildren()
    },

    showChildren: function () {
        var slideRight = {
            type: 'slide',
            direction: 'right',
            duration: 500
        }
        var slideLeft = {
            type: 'slide',
            direction: 'left',
            duration: 500
        }
        this.down('button[action=event]').show(slideRight);
        this.down('button[action=brochure]').show(slideRight);
        this.down('button[action=about]').show(slideLeft);
        this.down('button[action=eventCalendar]').show(slideLeft);
    }
  /*  hideChildren: function () {
        var slideRight = {
            type: 'slide',
            direction: 'right',
            duration: 500
        }
        var slideLeft = {
            type: 'slide',
            direction: 'left',
            duration: 500
        }
        this.down('button[action=event]').hide(slideRight);
        this.down('button[action=brochure]').hide(slideRight);
        this.down('button[action=about]').hide(slideLeft);
        this.down('button[action=eventCalendar]').hide(slideLeft);
    }*/

});
