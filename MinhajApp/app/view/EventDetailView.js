/**
 * Created by qadeer on 20.01.14.
 */
Ext.define("MinhajApp.view.EventDetailView", {
    extend:"Ext.Container",
    alias: "widget.eventDetailView",
    config:{
        layout: 'vbox',
        title:'',
        tpl: Ext.create('Ext.XTemplate',"<div>Detaljer: {details}</div>",
                '<div>Tidspunkt: {time}</div>')

    }


})
