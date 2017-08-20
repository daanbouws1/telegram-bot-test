/**
 * Created by daanbouws on 8/20/17.
 */
var telegram = require('telegram-bot-api');
var assert = require('assert');
var util = require('util');

var api = new telegram({
    token: '373890572:AAG5_y-nSgVM9EDM67ZqzGy_6c3l47Zf9kk',
    updates: {
        enabled:true
    }
});

api.getMe().then(function(data) {

        console.log(data);
        assert.equal(data.id, "373890572");
        assert.equal(data.first_name, 'asv_testbot');
        assert.equal(data.username, 'asv_testbot');

    })
    .catch(function(err) {
        console.log(err);
    });

api.on('message', function(message) {
    console.log(message);
});
