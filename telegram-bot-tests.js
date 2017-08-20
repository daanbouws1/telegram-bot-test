/**
 * Created by daanbouws on 8/20/17.
 */
var telegram = require('telegram-bot-api');
var assert = require('assert');
var util = require('util');

testTelegram();

function testTelegram () {

    var api = new telegram({
        token: '373890572:AAG5_y-nSgVM9EDM67ZqzGy_6c3l47Zf9kk',
        updates: {
            enabled: false
        }
    });

    api.getMe().then(function (data) {
        console.log(data);
        assert.equal(data.id, "373890572");
        assert.equal(data.first_name, 'asv_testbot');
        assert.equal(data.username, 'asv_testbot');
    }).catch(function (err) {
        console.log(err);
    });

    var chat_id = '1206425';
    //var message_to_forward_id = "";

    api.sendMessage({chat_id: '1206425', text: "testmessage"}).then(function (data) {
        //message_to_forward_id = data.message_id;
        assert.equal(data.text, "testmessage");
        assert.equal(data.chat.id, chat_id);
        assert.equal(data.chat.type, "private");
        assert.equal(data.chat.first_name, 'Daan');
        assert.equal(data.chat.last_name, 'Bouws');
    }).catch(function (err) {
        console.log(err);
    });

    api.sendPhoto({
        chat_id: '1206425',
        caption: 'This is my test image',
        photo: 'croppedimage94.jpg'
    }).then(function (data) {
        assert.equal(data.photo.length, 4);
        assert.equal(data.caption, 'This is my test image');
    }).catch(function (err) {
        console.log(err);
    });
//
//api.forwardMessage({chat_id: '1206425', from_chat_id: '1206425',
//				  message_id: message_to_forward_id}).
//				  then(function(message) {
//    assert.equal(message.forward_from.first_name,"Daan");
//    assert.equal(message.forward_from.last_name, "Bouws");
//}).catch(function(err) {
//    console.log(err);
//});

    api.getUserProfilePhotos({user_id: "1206425", limit: 1}).then(function (data) {
        assert.equal(data.total_count, 2);
        assert.equal(data.photos[0].length, 3);
    }).catch(function (err) {
        console.log(err);
    });

    api.sendSticker({chat_id: '1206425', sticker: 'sticker.webp'}).then(function (data) {
        assert.equal(data.sticker.thumb.width, 64);
    }).catch(function (err) {
        console.log(err);
    });

    api.sendAudio({
        chat_id: '1206425',
        audio: 'bell-ringing-01.mp3'
    }).then(function (data) {
        assert.equal(data.audio.duration, 17);
        assert.equal(data.audio.mime_type, "audio/mpeg");
        assert.equal(data.audio.file_size, 686758);
    }).catch(function (err) {
        console.log(err);
    });

    api.sendLocation({
        chat_id: '1206425',
        latitude: 50.101,
        longitude: 52.101
    }).then(function (data) {
        assert.equal(data.location.longitude, 52.100998);
        assert.equal(data.location.latitude, 50.100992);
    }).catch(function (err) {
        console.log(err);
    });
}


