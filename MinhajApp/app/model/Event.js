/**
 * Created by qadeer on 19.01.14.
 */
Ext.define('MinhajApp.model.Event', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'id', type: 'int' },
            { name: 'name', type: 'string' },
            { name: 'details', type: 'string' },
            { name: 'time', type: 'date' }
        ]
    }
});


