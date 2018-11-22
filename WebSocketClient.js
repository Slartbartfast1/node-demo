/**
 * WebSocket
 * 单TCP实现双向通信
 * 相比HTTP更接近于传输层协议，高效、简洁
 * WebSocket分为握手和数据传输两个过程
 * 客户端发送HTTP请求升级协议->服务端响应更换协议
 * */
var soket=new WebSocket('ws://127.0.0.1:12010/updates');
socket.onopen=function(){
  setInterval(function(){
      if(soket.bufferedAmount===0){
          socket.send(getUpdataData())
      }
  },50)
};

socket.onmessage=function(event){
  console.log(event);
};