Node.js provides a built-in interactive environment called REPL (Read-Eval-Print-Loop) which allows you to execute JavaScript code and see the results immediately.

To start a Node.js REPL, simply open your terminal or command prompt and type node followed by pressing enter. You will then see the Node.js command prompt > indicating that the REPL is active.

Here's an example:

shell
Copy code
$ node

> 1 + 1
> 2
> let name = 'John'
> undefined
> name
> 'John'
> console.log('Hello World!')
> Hello World!
> undefined
> In this example, we first perform a simple arithmetic operation 1 + 1 and see the result 2. Then we define a variable name and check its value by typing name. Finally, we use the console.log() method to print "Hello World!" to the console.

You can exit the REPL by typing .exit or pressing Ctrl + C twice.

## Node.js REPL Commands

| Commands       | Description                                                     |
| -------------- | --------------------------------------------------------------- |
| ctrl + c       | It is used to terminate the current command.                    |
| ctrl + c twice | It terminates the node repl.                                    |
| ctrl + d       | It terminates the node repl.                                    |
| up/down keys   | It is used to see command history and modify previous commands. |
| tab keys       | It specifies the list of current command.                       |
| .help          | It specifies the list of all commands.                          |
| .break         | It is used to exit from multi-line expressions.                 |
| .clear         | It is used to exit from multi-line expressions.                 |
| .save filename | It saves current node repl session to a file.                   |
| .load filename | It is used to load file content in current node repl session.   |
