var textarea, codemirror;

function runCode() {
    console.log(textarea.value);
    eval(textarea.value);
}

function onload() {
    textarea = document.getElementById("codeeditor");
    codemirror = CodeMirror.fromTextArea(textarea);
    codemirror.setSize("100%");
    runCode();
}

onload();
