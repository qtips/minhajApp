Ext.define("MinhajApp.view.MainContainer", {
    extend: 'Ext.NavigationView',
    id: 'mainNav',
    xtype: 'main',
    config: {
        navigationBar: {
            backButton: {
                align: 'left',
                hidden: true,
                ui: 'action'
            }
        },
        items: [
            {
                xtype: 'mainMenu'
            }
        ]
    }

})