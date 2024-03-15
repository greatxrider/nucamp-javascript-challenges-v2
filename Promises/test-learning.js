const checkAnswers = () => {
    let score = 0;
    let feedback = "";

    const q1 = document.querySelector('input[name="q1"]:checked').value;
    const q2 = document.querySelector('input[name="q2"]:checked').value;
    const q3 = document.getElementById('question3').value.trim().toLowerCase();

    if (q1 === "b") score ++;
    else feedback += "Question 1 is incorrect.<br>";

    if (q2 === "c") score ++;
    else feedback += "Question 2 is incorrect.<br>";

    if (q3 === "then") score ++;
    else feedback += "Question 3 is incorrect.<br>";

    feedback += `Your score is: ${score} out of 3`;
    document.getElementById('feedback').innerHTML = feedback;
}
