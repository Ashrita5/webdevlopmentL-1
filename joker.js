const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "What do you call fake spaghetti? An impasta!",
    "Why don't skeletons fight each other? They don't have the guts.",
    "What do you get when you cross a snowman with a vampire? Frostbite.",
    "How does a penguin build its house? Igloos it together!",
    "What do you call cheese that isn't yours? Nacho cheese!",
    "I would tell you a construction joke, but I'm still working on it.",
    "Did you hear about the mathematician who’s afraid of negative numbers? He will stop at nothing to avoid them."
];

function generateJoke(){
    const randomindex= Math.floor(Math.random()*jokes.length)
    document.getElementById("joke").innerHTML=jokes[randomindex]
}
