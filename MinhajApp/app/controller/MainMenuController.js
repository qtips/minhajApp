/**
 * Created by qadeer on 18.01.14.
 */
Ext.define('MinhajApp.controller.MainMenuController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            mainNavigator: "mainNavigator",
            mainMenu: "#mainMenu",
            eventListView: {
                selector: "eventListView",
                xtype: "eventListView",
                autoCreate: true
            }
        },
        control: {
            'mainNavigator': {
                back: 'onBackButtonTap'
            },
            'mainNavigator sButton': {
                tap: 'onMenuButtonTap'
            },
            'eventListView': {
                pushViewEvent: 'onPushViewEvent'
            }
        }


    },

    onPushViewEvent: function (srcView, pushView) {
        this.getMainNavigator().push(pushView);
    },
    onMenuButtonTap: function (button) {
        var buttonAction = button.action;

        if (buttonAction == 'event') {

            var eventView = this.getEventListView();
            if (eventView.getStore() == null)
                eventView.setStore(Ext.getStore('EventStore'))
            this.getMainNavigator().push(eventView)
        }
        else if (buttonAction == 'eventCalendar') {

        }
        else if (buttonAction == 'about') {

        }
        else if (buttonAction == 'brochure') {

        }

    },
    onBackButtonTap: function (navigationView, options) {
        if (navigationView.getActiveItem().id == this.getMainMenu().id)
        {
            navigationView.showChildren()
        }
    }




});