function shout(x) {
    return x.toUpperCase();
}

function whisper(x) {
    return x.toLowerCase();
}

function logShout(x) {
    console.log(x.toUpperCase());
}

function logWhisper(x) {
    console.log(x.toLowerCase());
}

function sayHiToHeadphonedRoommate(x) {
    if (x === x.toLowerCase()) {
        return "I can't hear you!"
    } else if  (x === x.toUpperCase()) {
        return "YES INDEED!";
    } else if (x === "Let's have dinner together!") {
        return "I would love to!";
    }
}

console.log(shout("hello"))
console.log(whisper("HELLO"))