const fullcodeEl = document.querySelector("#fullcode");

const minifiedcodeEl = document.querySelector("#minified");

let patterns = ["\n", " ;", "; ", " =", "= ", ": ", " :", " ,", ", ", " {", "{ ", " }", "} "];
let tbu = ["", ";", ";", "=", "=", ":", ":", ",", ",", "{", "{", "}", "}"];

function convert() {
    opencode = fullcodeEl.value;
    patterns.forEach((pattern, index) => {
        while (opencode.includes(pattern)) {
            opencode = opencode.replace(pattern, tbu[index]);
        }
    });
    minifiedcodeEl.value = opencode;
}