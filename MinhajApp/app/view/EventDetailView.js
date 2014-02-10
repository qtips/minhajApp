/**
 * Created by qadeer on 20.01.14.
 */
Ext.define("MinhajApp.view.EventDetailView", {
    extend: "Ext.Container",
    alias: "widget.eventDetailView",
    requires: [
        'Ext.Img'
    ],
    config: {
        layout: {
            type: 'vbox',
            align: 'middle'
        },
        title: 'Event',


        items: [
            {
                xtype: 'panel',
                height: '100%',
                width: '100%',
                tpl: ["<div>Detaljer: {details}</div>",
                    "<br/>",
                    "<br'/>",
                    "<br'/>",
                    "<br'/>",
                    "<br'/>",
                    "<br'/>",
                    '<div>Tidspunkt: {time}</div>'],
                flex: 1

            },
            {
                docked:"top",
                style: "align:'center'",
                xtype: 'image',
                width:"120px",
                height:"112px",
                src: 'resources/images/minhaj_small.png'

            },
            {
                width: "90%",
                height: "20px",
                xtype: 'button',
                align: "end",
                ui: 'confirm',
                text: 'Jeg vil være med!',
            }
        ]

    }


})
