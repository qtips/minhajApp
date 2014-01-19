/**
 * Created by qadeer on 19.01.14.
 */
Ext.define('MinhajApp.store.EventStore', {
    extend: 'Ext.data.Store',

    config: {
        model: 'MinhajApp.model.Event',
        data: [
            {id:1, name: 'Koranlesing', details:'Studie av koranen', time:new Date('2013', '01', '23', '10', '30')},
            {id:2, name: 'Skitur', details:'Tur til Hemsedal', time:new Date('2013', '01', '23', '10', '30')},
            {id:3, name: 'Temakveld', details:'Den idelle fasten', time:new Date('2013', '01', '23', '10', '30')},
            {id:4, name: 'Milad', details:'Feiring', time:new Date('2013', '01', '23', '10', '30')}
        ]
    }

});

