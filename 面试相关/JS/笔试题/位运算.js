console.log(10 << 1);
// 左移就是将二进制全部往左移动，可以看成以下公式 a * (2 ^ b)

console.log(10 >> 1);
// 可以看成 a / (2 ^ b)

console.log(8 & 7);
// 每一位都为 1，结果才为 1
// 1000 & 0111 -> 0000 -> 0

console.log(8 ^ 7);
console.log(8 ^ 8);
// 每一位都不同，结果才为 1
// 1000 ^ 0111 -> 1111 -> 15
// 1000 ^ 1000 -> 0000 -> 0
// 从以上代码中可以发现按位异或就是不进位加法