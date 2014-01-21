/**
 * Created by qadeer on 19.01.14.
 */
Ext.define('MinhajApp.view.EventListView', {
    extend: 'Ext.dataview.List',
    alias: "widget.eventListView",
    config: {
        itemTpl: '<div>{name}</div>',
        emptyText: '<pre><div> Ingen event<div></pre>',
        onItemDisclosure: true

    }
})
