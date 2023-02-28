function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
);

// -- -- -- -- -- -- -- -- -- -- -- -- --
const ask2 = (question, yes, no) => {
    if (confirm(question)) yes()
    else no();
}
