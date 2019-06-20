// user input from textarea
var user_input = ""


function start() {
    // TODO: fill first textarea with random lister quote, add button which cycles through them

    // translate whatever is in the textarea to begin with
    translate();
    // add listener so whenever the value within textarea is updated, translate is called
    document.getElementById("user_input").addEventListener("input", translate);
}

// Translates user input into crypthand format
function translate() {
    // get the new input text
    user_input = document.getElementById("user_input").value;

    // remove non alpha chars, display errors, split into words
    var words = remove(user_input).toLowerCase().split(" ");

    // translate each word
    var output = "";
    for (var i = 0; i < words.length; i++) {
        output += convert(words[i]) + " ";
    }

    // put translated text in the bottom textarea
    document.getElementById("out").innerHTML = output;
}

// Converts a single word into crypthand format
function convert(word) {
    // empty case
    if (word == "") {
        return ""
    } else {
        // replace words/titles wholesale
        if (word == "and") {
            return "&"
        } else if (word == "mr") {
            // wrong char for now
            return "="
        } else if (word == "mrs") {
            return "="
        } else if (word == "ms") {
            // wrong char for now; also dont include miss bc thats also like, a word lol
            return "="
        } else {
            // replace two character patterns
            word = word.replace("th", "!").replace("sh", "?").replace("ch", "@");

            // replace doubles
            for (var i = 1; i < word.length; i++) {
                if (word.charAt(i) == word.charAt(i - 1)) {
                    // replace both with a single cap
                    word = word.replace(word.charAt(i) + word.charAt(i), word.charAt(i).toString().toUpperCase());
                }
            }
            return word;
        }
    }
}

// removes all non alphabet / space characters
// handles error message
function remove(str) {
    var letter, code;
    var new_str = "";
    var msg = "";
    for (i = 0, len = str.length; i < len; i++) {
        code = str.charCodeAt(i);
        if ((code == 32) || // space
            (code > 64 && code < 91) || // upper alpha (A-Z)
            (code > 96 && code < 123)) { // lower alpha (a-z)
            new_str += str.charAt(i);
        } else if ((code == 44) || (code == 46) || (code == 63) || (code == 33)) { // dont display error over some punctuation
            new_str += " ";
        } else {
            msg = "❕only use alphabetic characters";
            new_str += " ";
        }
    }
    document.getElementById("error").innerHTML = msg;
    return new_str;
}

// initiate js
window.addEventListener("load", start, false);
