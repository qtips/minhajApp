Ext.define('MinhajApp.view.Main', {
    extend: 'Ext.Container',

    xtype: 'main',
    requires: [
        'Ext.Menu'
    ],

    config: {
        sideMenu: {},
        layout: 'vbox',
        items: [
            {
                xtype: 'panel',
                html: "Velkommen til Minhaj App",
                style: 'background-color:red',
                flex: 1,
                items: [
                    {
                        align: 'left',
                        //pack: 'center',
                        iconCls: 'action',
                        xtype: 'spacer',
                        margin: '0 0',
                        handler: function () {
                            Ext.Viewport.toggleMenu('left');
                        }
                    }
                ]

            },
            {
                xtype: 'panel',
                html: ' Dette er kroppen',
                style: 'background-color:green',
                flex: 2
            }
        ]
    },

    initialize: function () {
        this.setSideMenu(Ext.create('Ext.Menu',
            { items: {
                xtype: 'button',
                text: 'New Item',
                iconCls: 'settings',
                scope: this,
                handler: function () {
                    Ext.Viewport.hideMenu('left');
                }
            }
            }
        ))

        Ext.Viewport.setMenu(this.getSideMenu(),
            {
                side: 'left',
                reveal: true
            });
    }

    /*doSetHidden: function(hidden) {
     this.callParent(arguments);

     if (hidden) {
     Ext.Viewport.removeMenu('left');
     Ext.Viewport.removeMenu('right');
     Ext.Viewport.removeMenu('bottom');
     Ext.Viewport.removeMenu('top');
     } else {
     Ext.Viewport.setMenu(this.menuForSide('top'), {
     side: 'top'
     });

     Ext.Viewport.setMenu(this.menuForSide('bottom'), {
     side: 'bottom',
     cover: false
     });

     Ext.Viewport.setMenu(this.menuForSide('left'), {
     side: 'left',
     reveal: true
     });

     Ext.Viewport.setMenu(this.menuForSide('right'), {
     side: 'right',
     reveal: true
     });
     }
     },
     */

//    menuForSide: function (side) {
//        var items = [
//            {
//                text: 'Settings',
//                iconCls: 'settings',
//                scope: this,
//                handler: function () {
//                    Ext.Viewport.hideMenu(side);
//                }
//            },
//            {
//                text: 'New Item',
//                iconCls: 'compose',
//                scope: this,
//                handler: function () {
//                    Ext.Viewport.hideMenu(side);
//                }
//            },
//            {
//                xtype: 'button',
//                text: 'Star',
//                iconCls: 'star',
//                scope: this,
//                handler: function () {
//                    Ext.Viewport.hideMenu(side);
//                }
//            }
//        ];
//
//        var className = 'Ext.Menu';
//        if (Ext.theme.name == "Blackberry") {
//            if (['top', 'bottom'].indexOf(side) != -1) {
//                className = 'Ext.ux.ApplicationMenu';
//            } else {
//                className = 'Ext.ux.ContextMenu';
//            }
//        }
//
//        return Ext.create(className, {
//            items: items
//        });
//    }


});
