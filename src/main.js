
let app = {};

app.value = 5;

app.firstFunction = function () {
    console.log(app.value);
};

app.secondFunction = function () {
    console.log("hellow universe");
}

app.firstFunction();
app.secondFunction();