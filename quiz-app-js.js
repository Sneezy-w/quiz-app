// Quiz questions
const originalQuizQuestions = [
    {
        question: "What is the result of '5' + 3?",
        options: ["53", "8", "35", "Error"],
        correctAnswer: 0,
        type: "multiple",
        explanation: "In JavaScript, when you use the + operator with a string and a number, the number is converted to a string and concatenated. So '5' + 3 becomes '5' + '3', resulting in '53'."
    },
    {
        question: "Is null == undefined?",
        options: ["True", "False"],
        correctAnswer: 0,
        type: "boolean",
        explanation: "In JavaScript, null == undefined is true because of type coercion. However, null === undefined is false because the strict equality operator checks both value and type."
    },
    {
        question: "What is the output of console.log(typeof NaN)?",
        options: ["'number'", "'NaN'", "'undefined'", "'object'"],
        correctAnswer: 0,
        type: "multiple",
        explanation: "Despite NaN standing for 'Not a Number', its type is actually 'number' in JavaScript. This is one of the language's quirks and can be confusing for beginners."
    },
    {
        question: "What is the result of 3 + 2 + '7'?",
        options: ["12", "57", "327", "Error"],
        correctAnswer: 1,
        type: "multiple",
        explanation: "JavaScript evaluates expressions from left to right. First, 3 + 2 is calculated, resulting in 5. Then, 5 + '7' is evaluated, and since one operand is a string, the + operator performs string concatenation, resulting in '57'."
    },
    {
        question: "Is '2' === 2 true?",
        options: ["True", "False"],
        correctAnswer: 1,
        type: "boolean",
        explanation: "The strict equality operator (===) checks both value and type. While '2' and 2 have the same value, they are of different types (string and number respectively), so the expression evaluates to false."
    },
    {
        question: "What is the output of console.log(0.1 + 0.2 == 0.3)?",
        options: ["True", "False"],
        correctAnswer: 1,
        type: "boolean",
        explanation: "Due to how floating-point numbers are represented in binary, 0.1 + 0.2 actually equals 0.30000000000000004 in JavaScript. This tiny imprecision means that 0.1 + 0.2 is not exactly equal to 0.3, so the expression evaluates to false."
    },
    {
        question: "What is the result of 5 % 2?",
        options: ["2.5", "1", "0", "2"],
        correctAnswer: 1,
        type: "multiple",
        explanation: "The % operator in JavaScript is the modulo operator. It returns the remainder after division. 5 divided by 2 is 2 with a remainder of 1, so 5 % 2 equals 1."
    },
    {
        question: "What is the value of x after: let x = 5; x++;",
        options: ["5", "6", "7", "undefined"],
        correctAnswer: 1,
        type: "multiple",
        explanation: "The ++ operator is the increment operator. When used postfix (after the variable), it increments the value by 1 after the current expression. So x++ increases x from 5 to 6."
    },
    {
        question: "What is the output of console.log([] == 0)?",
        options: ["True", "False"],
        correctAnswer: 0,
        type: "boolean",
        explanation: "When comparing an array to a number using ==, JavaScript tries to convert the array to a number. An empty array is converted to 0, so [] == 0 evaluates to true. This is why it's often recommended to use === for comparisons."
    },
    {
        question: "What is the result of '5' - 3?",
        options: ["2", "'2'", "NaN", "Error"],
        correctAnswer: 0,
        type: "multiple",
        explanation: "Unlike the + operator, the - operator always attempts to convert its operands to numbers. So '5' is converted to 5, and 5 - 3 equals 2 (a number, not a string)."
    },
    {
        question: "Is undefined === null true?",
        options: ["True", "False"],
        correctAnswer: 1,
        type: "boolean",
        explanation: "While undefined and null are both falsy values, they are distinct. The strict equality operator (===) checks both value and type, and undefined and null are of different types, so undefined === null is false."
    },
    {
        question: "What is the output of console.log(typeof [])?",
        options: ["'array'", "'object'", "'undefined'", "'null'"],
        correctAnswer: 1,
        type: "multiple",
        explanation: "In JavaScript, arrays are actually objects. This is why typeof [] returns 'object'. To check if something is specifically an array, you can use Array.isArray() method."
    },
    {
        question: "What is the result of '10' * '2'?",
        options: ["20", "'20'", "'102'", "NaN"],
        correctAnswer: 0,
        type: "multiple",
        explanation: "When using the * operator, JavaScript attempts to convert both operands to numbers. So '10' becomes 10, '2' becomes 2, and 10 * 2 equals 20 (a number, not a string)."
    },
    {
        question: "Is !![] true?",
        options: ["True", "False"],
        correctAnswer: 0,
        type: "boolean",
        explanation: "The ! operator converts its operand to a boolean and negates it. An empty array is truthy in JavaScript, so ![] is false. Applying ! again (!false) results in true. Therefore, !![] is true."
    },
    {
        question: "What is the output of console.log(1 + - + + + - + 1)?",
        options: ["0", "2", "NaN", "Error"],
        correctAnswer: 1,
        type: "multiple",
        explanation: "This expression looks confusing, but it's valid JavaScript. The - and + operators alternate, effectively canceling each other out except for the first + and last -. So it's equivalent to 1 + (-1), which equals 2."
    },
    {
        question: "What is the value of x after: let x = 5; x -= 2;",
        options: ["3", "5", "7", "undefined"],
        correctAnswer: 0,
        type: "multiple",
        explanation: "The -= operator subtracts the right operand from the left operand and assigns the result to the left operand. So x -= 2 is equivalent to x = x - 2. Since x was 5, the result is 3."
    },
    {
        question: "Is '0' == false true?",
        options: ["True", "False"],
        correctAnswer: 0,
        type: "boolean",
        explanation: "When using ==, JavaScript performs type coercion. The string '0' is converted to a number (0) when compared to a boolean. false is also converted to 0. Therefore, '0' == false is true. This is why === is often preferred for its stricter comparisons."
    },
    {
        question: "What is the result of 4 + 5 + 'px'?",
        options: ["'9px'", "'45px'", "NaN", "Error"],
        correctAnswer: 0,
        type: "multiple",
        explanation: "JavaScript evaluates expressions from left to right. First, 4 + 5 is calculated, resulting in 9. Then, 9 + 'px' is evaluated, and since one operand is a string, the + operator performs string concatenation, resulting in '9px'."
    },
    {
        question: "What is the output of console.log(typeof typeof 1)?",
        options: ["'number'", "'string'", "'undefined'", "'object'"],
        correctAnswer: 1,
        type: "multiple",
        explanation: "typeof 1 returns 'number' (as a string). So the expression becomes typeof 'number'. The typeof operator always returns a string, so typeof typeof 1 always returns 'string'."
    },
    {
        question: "Is {} == {} true?",
        options: ["True", "False"],
        correctAnswer: 1,
        type: "boolean",
        explanation: "In JavaScript, two empty objects are not equal when compared with == or ===. Each object is a distinct reference in memory, so they are not considered equal even if they have the same properties."
    }
];

let currentQuestionIndex = 0;
let answeredQuestions = [];
let quizQuestions = originalQuizQuestions.slice();
let reverseQuizQuestions = quizQuestions.toReversed();
let currentQuestion = null;

// Function to start the quiz
function startQuiz() {
    currentQuestionIndex = 0;
    answeredQuestions = [];
    quizQuestions = JSON.parse(JSON.stringify(originalQuizQuestions))
        .sort(() => Math.random() - 0.5)
        .slice(0, 5)
        .map(q => {
            if (q.options.length > 2) {
                const originalOptions = q.options.slice();
                let removeIndex = Math.floor(Math.random() * q.options.length);
                if (removeIndex !== q.correctAnswer) {
                    q.options.splice(removeIndex, 1);
                }
                q.options.sort(() => Math.random() - 0.5);
                q.correctAnswer = q.options.findIndex(option => option === originalOptions[q.correctAnswer]);

            }
            return q;
        });
    reverseQuizQuestions = quizQuestions.toReversed();
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('question-container').style.display = 'block';
    showQuestion();

}

function showQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const progressElement = document.getElementById('progress');
    const nextButton = document.getElementById('next-button');
    const explanationElement = document.getElementById('explanation');

    if (currentQuestionIndex < quizQuestions.length) {
        currentQuestion = reverseQuizQuestions.pop();
        questionElement.textContent = currentQuestion.question;

        optionsElement.innerHTML = '';
        currentQuestion.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('option');
            button.addEventListener('click', () => selectAnswer(index));
            optionsElement.appendChild(button);
        });

        progressElement.textContent = `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`;
        nextButton.style.display = 'none';
        if (currentQuestionIndex === quizQuestions.length - 1) {
            nextButton.textContent = 'Complete Quiz';
        } else {
            nextButton.textContent = 'Next';
        }
        explanationElement.textContent = '';
        explanationElement.style.display = 'none';
    } else {
        showResults();
    }
}

function selectAnswer(answerIndex) {
    const isCorrect = answerIndex === currentQuestion.correctAnswer;

    answeredQuestions.push({
        question: currentQuestion.question,
        userAnswer: currentQuestion.options[answerIndex],
        correctAnswer: currentQuestion.options[currentQuestion.correctAnswer],
        isCorrect: isCorrect,
        explanation: currentQuestion.explanation
    });

    // Disable all option buttons
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.disabled = true);

    // Show correct/incorrect feedback
    options.values()
        .filter((option, index) => index === currentQuestion.correctAnswer)
        .forEach(option => option.classList.add('correct'));

    options.values()
        .filter((option, index) => index === answerIndex && !isCorrect)
        .forEach(option => option.classList.add('incorrect'));

    // Show explanation

    if (currentQuestion.explanation) {
        const explanationElement = document.getElementById('explanation');
        explanationElement.textContent = currentQuestion.explanation;
        explanationElement.style.display = 'block';
    }


    // Show next button
    const nextButton = document.getElementById('next-button');
    nextButton.style.display = 'block';
}


function showNextQuestion() {
    currentQuestionIndex++;
    showQuestion();
}

function showResults() {
    const quizContainer = document.getElementById('quiz-container');
    const questionContainer = document.getElementById('question-container');

    questionContainer.style.display = 'none';
    quizContainer.style.display = 'block';

    const score = answeredQuestions.reduce((total, question) => total + (question.isCorrect ? 1 : 0), 0);

    quizContainer.innerHTML = `
        <h2>Quiz Completed!</h2>
        <p>Your score: ${score} out of ${quizQuestions.length}</p>
        <button id="show-answers">Show Answers</button>
    `;

    document.getElementById('show-answers').addEventListener('click', showAnswers);
}

// Function to show answers
function showAnswers() {
    const quizContainer = document.getElementById('quiz-container');
    const answersHtml = answeredQuestions.map((item, index) => `
        <div class="answer-item ${item.isCorrect ? 'correct' : 'incorrect'}">
            <p><strong>Question ${index + 1}:</strong> ${item.question}</p>
            <p>Your answer: ${item.userAnswer}</p>
            <p>Correct answer: ${item.correctAnswer}</p>
            <p>Explanation: ${item.explanation}</p>
        </div>
    `).join('');

    quizContainer.innerHTML = `
        <h2>Quiz Answers</h2>
        ${answersHtml}
        <button id="restart-quiz">Restart Quiz</button>
    `;

    document.getElementById('restart-quiz').addEventListener('click', startQuiz);
}

// Event listener for starting the quiz
document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-quiz');
    startButton.addEventListener('click', startQuiz);

    const nextButton = document.getElementById('next-button');
    nextButton.addEventListener('click', showNextQuestion);
});

