/**
 * v8的内存限制为64位系统1.4g，32位系统0.7g
 * 对象分配都是以堆的形式
 * ------------------------------------------------
 * 分代式垃圾回收：新生代，老生代
 * 新生代：Scavenge算法 分为From，To，移动存活对象，晋升机制：是否经历过回收，内存是否超出；空间效率-- 时间效率++
 * 老生代：Mark-Sweep和Mark-Compact；
 * Mark-Sweep：标记清除，有碎片空间,空间效率- 时间效率+；
 * Mark-Compact移动存活对象，空间效率++ 时间效率--；
 * ------------------------------------------------
 * 增量标记：垃圾回收是与应用逻辑交替执行的
 * 延迟清理，增量式管理
 * 无法立即回收的内存：全局变量；闭包；
 * 内存泄漏：缓存；队列消费不及时；作用域未释放；
 * process.memoryUsage
 * ------------------------------------------------
 * 技巧：Buffer和Stream
 * Buffer对象是堆外内存，不经过V8垃圾回收机制，不会有堆内存的大小限制
 * Stream用流式编程操作大文件
 */
var showMem = function () {
    var mem = process.memoryUsage();
    var format = function (bytes) {
        return (bytes / 1024 / 1024).toFixed(2) + 'MB';
    };
    console.log('Process:heapTotal ' + format(mem.heapTotal) + ' heapUsed ' + format(mem.heapUsed) + ' rss ' + format(mem.rss));
    console.log('--------------------------------------------------------')
};

var useMem = function () {
    var size = 20 * 1024 * 1024;
    var arr = new Array(size);
    for (var i = 0; i < size; i++) {
        arr[i] = 0;
    }
    return arr;
};

var total = [];
for (var j = 0; j < 15; j++) {
    showMem();
    total.push(useMem())
}

showMem();
