/**
 * Created by qadeer on 18.01.14.
 */
Ext.define('MinhajApp.controller.MainMenuController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            mainNavigator: "#mainNav",
            eventListView: {
                selector: "eventListView",
                xtype: "eventListView",
                autoCreate: true
            }
        },
        control: {
            'mainMenu sButton': {
                tap: 'onMenuButtonTap'
            }
        }


    },

    onMenuButtonTap: function(button) {
        var buttonAction = button.action;

        if (buttonAction=='event') {
            var eventView = this.getEventListView();
            if (eventView.getStore()==null)
                eventView.setStore(Ext.getStore('EventStore'))
            this.getMainNavigator().push(eventView);
        }
        else if (buttonAction=='eventCalendar') {

        }
        else if (buttonAction=='about') {

        }
        else if (buttonAction=='brochure') {

        }

    }



});