//console.log(process);
//console.log(process.argv);

console.log(process.pid);
console.log(process.release.name);
console.log(process.release.lts);
console.log(process.arch);
console.log(process.platform);

process.stdout.write("Stdout\n");
process.stderr.write("Error\n");

process.on("exit", function() {
console.log("exit");
})