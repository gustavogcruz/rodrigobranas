const todos = [];
const commands = `
    list
    new <description>
    done <index>
    help
    exit
`;

process.stdout.write(commands);
process.stdin.on("data", function(chunk) { //stdin - deixa o processo em execução
    //console.log(chunk);
    const command = chunk.toString();
    //console.log(command);
    if (command.startsWith("list")) {
        todos.forEach((todo, index) => {
            console.log(`#${index} ${todo.description} ${todo.done}`);
        })
        return;
    };
    if(command.startsWith("new")) {
        const description = command.replace("new ", "").replace("\n", "").replace("\r", "");
        todos.push({description, done: false});
    };
    if(command.startsWith("done")) {
        const index = parseInt(command.replace("done ", "").replace("\n", "").replace("\r", ""));
        const todo = todos[index];
        if (todo) {
            todo.done = true;
        }
    };
    if (command.startsWith("help")) {
        console.log(commands);
    };
    if (command.startsWith("exit")) {
        process.exit();
    }
});