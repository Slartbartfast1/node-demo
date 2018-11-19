/**
 * Buffer属于堆外内存
 * 非性能部分（分配内存)   ->JavaScript
 * 性能部分（申请内存）    ->C++
 * Node采用了动态内存管理机制slab
 * slab以8kb为界限分为大对象和小对象B
 * ------------------------------------------------
 * 支持的字符编码：
 * ASCⅡ
 * UFT-8
 * UTF-16LE/UCS-2
 * Base64
 * Binary
 * Hex
 * ------------------------------------------------
 *
 * */
var str = 'haha';
var buf = new Buffer(str, 'utf-8');// new Buffer(str,[encoding])
console.log(buf);
