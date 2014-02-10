/**
 * Created by qadeer on 20.01.14.
 */
Ext.define('MinhajApp.controller.EventController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
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
    onEventTap: function(list, idx, el, record) {
        var eventDetailView = this.getEventDetailView();
        eventDetailView.down('panel').setRecord(record);
        eventDetailView.setTitle(record.get('name'));
        this.getEventListView().fireEvent('pushViewEvent', this, eventDetailView)
    }



});
