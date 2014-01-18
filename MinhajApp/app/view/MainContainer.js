Ext.define("MinhajApp.view.MainContainer", {
    extend: 'Ext.NavigationView',
    id:'mainNav',
    xtype: 'main',
    config: {
        items: [
            {
                xtype: 'mainMenu'
            }
        ]
    }

})