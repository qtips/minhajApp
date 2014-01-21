/**
 * Created by qadeer on 20.01.14.
 */
Ext.define('MinhajApp.controller.EventController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            mainNavigator: "#mainNav",
            eventListView: "eventListView",
            eventDetailView: {
                selector: "eventDetailView",
                xtype: "eventDetailView",
                autoCreate: true
            }
        },
        control: {
            'eventListView': {
                itemtap: 'onEventTap'
            }
        }


    },
    initialize: function() {
        console.log("hei")
    },
    onEventTap: function(list, idx, el, record) {
        var eventDetailView = this.getEventDetailView();
        eventDetailView.setRecord(record);
        eventDetailView.setTitle(record.get('name'));
        this.getMainNavigator().push(eventDetailView);
    }



});
