setInterval(() => {
    // process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`${new Date()}`);
}, 100);