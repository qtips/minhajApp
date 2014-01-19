/**
 * Created by qadeer on 19.01.14.
 */
Ext.define('MinhajApp.view.EventListView', {
    extend: 'Ext.dataview.List',
    alias: "widget.eventListView",
    config: {
        itemTpl: '<div class="contact">{name}</div>',
        emptyText: '<pre><div class="notes-list-empty-text" > No notes found. <div></pre>',
        onItemDisclosure: true

    }
})
