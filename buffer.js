/**
* buffer属于堆外内存
* 非性能部分（分配内存)   ->JavaScript
* 性能部分（申请内存）    ->C++
* Node采用了动态内存管理机制slab
* slab以8kb为界限分为大对象和小对象
* */
var str='haha';
var buf=new Buffer(str,'utf-8');// new Buffer(str,[encoding])
console.log(buf);
