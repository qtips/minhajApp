/**
 * Created by qadeer on 18.01.14.
 */
Ext.define('MinhajApp.controller.MainMenuController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            mainNavigator: "#mainNav",
            eventListView: {
                selector: "#eventListView",
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
            this.getMainNavigator().push(this.getEventListView())
        }
        else if (buttonAction=='eventCalendar') {

        }
        else if (buttonAction=='about') {

        }
        else if (buttonAction=='brochure') {

        }

    }



});