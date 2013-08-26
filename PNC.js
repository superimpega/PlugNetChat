//Beta Private Messaging System

$('#privateChat_ui').remove();
$('#audience').append('<div id="privateChat_ui" style="width:348px;height:295px;position:absolute;top:4px;left:0px;background-color:#0A0A0A;opacity: .91;z-number:10000"></div>');
$('#privateChat_ui').append('<div id="privateChat_header" style="width:348px;height:42px;position:absolute;top:0px;left:0px;"><span style="color:white;font-family: CalgaryScript,Helvetica,Arial,sans-serif;font-size:28px;position:absolute;left:15px;top:0">Private Chat<img style="float:right;margin-top:2px;margin-left: 8px;" src="http://plug.dj/_/static/images/chat_bubble.0707cbd.png"/></span></div>');
$('#privateChat_ui').append('<div id="privateChat_messages" style="width:333px;height:253px;position:absolute;bottom:0px;right:0px;overflow-x: hidden;overflow-y: auto;"></div>');

$('.privateChat_update').css({"color":"#d1d1d1"});
$('.privateChat_message:nth-child(2n)').css({"background-color": "#1A1A1A"});
$('.privateChat_message').css({"font-family":"Helvetica","font-size":"12px"});
$('.privateChat_feed').css({"padding":"5px","padding-left":"1px","word-wrap":"break-word","width":"308px","position":"relative"});
$('.priavateChat_moderation').css({"color":"#e90e82"});

$('#privateChat_messages').append('<div class="privateChat_feed" class="privateChat_update"><span class="privateChat_text">Welcome to Plugnet private chat. Version BETA 0.0.1</span></div>');
$('#privateChat_ui').append('<div style="left:0;width:348px;position:absolute;border-bottom:1px dotted #292929;bottom:30px;"></div>');
$('#privateChat_ui').append('<form onsubmit="return false" style="position:absolute;bottom:5px;left:15px;height:20px;width:295px;"><input type="text" value="" placeholder="click here to send a private message" maxlength="256" style="font-family: Helvetica,Arial,sans-serif;font-size: 12px;color: #F9F9F9;background-color:transparent;height:100%;width:294px;position:absolute;outline:0 none;border:0 none;"></form>');
