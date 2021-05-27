const initialMemoryUsage = process.memoryUsage().heapUsed;
const urName = process.argv[2];
const env = process.env.NODE_ENV;
 
for(let i = 0; i <= 10000; i++) {
    // Proses looping ini akan membuat penggunaan memori naik
}
 
const currentMemoryUsage = process.memoryUsage().heapUsed;
 
console.log(`Hai, ${urName}`);
console.log(`Mode environment: ${env}`);
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);