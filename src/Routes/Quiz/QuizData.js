const Quizes = [
    {
        id:1,
        question: "An infinity iterator is one that never expresses true through what property?",
        answers: [
            { value: "complete", isCorrect: false },
            { value: "done", isCorrect: true },
            { value: "end", isCorrect: false },
            { value: "finished", isCorrect: false },
        ],
    },
    {
        id:2,
        question: "You managed a web page that allows external customers to register for a logon to your company's intranet. The webpage has a vulnerability where users can access variables that have sensitive data. What could you implement to prevent this from happening?",
        answers: [
            { value: "Client-side Node.js", isCorrect: false },
            { value: "Input/Output (I/O) standardization", isCorrect: false },
            { value: "Getters and setters", isCorrect: true },
            { value: "Multi-threading", isCorrect: false },
        ],
    },

    {
        id:3,
        question: "What is a consequence of setting exported modules to strict mode by default?",
        answers: [
            { value: "Export statements cannot be imported without being renamed.", isCorrect: false },
            { value: "Export statements cannot be used in most non-JavaScript web frameworks.", isCorrect: false },
            { value: "Export statement cannot use variables such as const or let", isCorrect: false },
            { value: "Export statements cannot be used in embedded scripts", isCorrect: true },
        ],
    },
    {
        id:4,
        question: "What object is returned when you call map.prototype.entries()?",
        answers: [
            { value: "An iterator", isCorrect: true },
            { value: "An array", isCorrect: false },
            { value: "A generators", isCorrect: false },
            { value: "A WeakMap", isCorrect: false },
        ],
    },
    {
        id:5,
        question: "After the following code is executed, what is the printed to the console? console.log(eval('2 + 2'));",
        answers: [
            { value: "4", isCorrect: true },
            { value: "NaN", isCorrect: false },
            { value: "22", isCorrect: false },
            { value: "true", isCorrect: false },
        ],
    },
    {
        id:6,
        question: "What method determined if two values are the same?",
        answers: [
            { value: "data.cal()", isCorrect: false },
            { value: "object.is()", isCorrect: true },
            { value: "var.compare()", isCorrect: false },
            { value: "data.isEqual()", isCorrect: false },
        ],
    },
    {
        id:7,
        question: "What type of loop iterates over the properties of an object?",
        answers: [
            { value: "for", isCorrect: false },
            { value: "for...of", isCorrect: false },
            { value: "forEach", isCorrect: false },
            { value: "for...in", isCorrect: true },
        ],
    },
    {
        id:8,
        question: "What is one way to create an object without a prototype to prevent Prototype Pollution?",
        answers: [
            { value: "Object.create()", isCorrect: true },
            { value: "Object.constructor()", isCorrect: false },
            { value: "Object.proto()", isCorrect: false },
            { value: "Object.type()", isCorrect: false },
        ],
    },
    {
        id:9,
        question: "Why was JavaScript's browser security model designed?",
        answers: [
            { value: "To protect the server from receiving denial-of-service (DoS) attacks", isCorrect: false },
            { value: "To protect website owners from receiving amlicious attacks", isCorrect: false },
            { value: "To protect the internet browser from being corrupted", isCorrect: false },
            { value: "To protect users from malicious websites", isCorrect: true },
        ],
    },
    {
        id:10,
        question: "How would you make a new key flavor equal to sweet in a Map called food?",
        answers: [
            { value: "food.create('flavor', 'sweet');", isCorrect: false },
            { value: "food.add('flavor', 'sweet');", isCorrect: false },
            { value: "food.set('flavor','sweet');", isCorrect: true },
            { value: "food['flavor'] = 'sweet';", isCorrect: false },
        ],
    },
];

export default Quizes