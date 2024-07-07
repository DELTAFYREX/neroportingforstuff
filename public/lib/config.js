import { global } from "./global.js";
import { util } from "./util.js";

// You add stuff in here!

// functions.

function createMessage(con, dur = 10_000) {
    global.messages.push({
        text: con,
        status: 2,
        alpha: 0,
        time: Date.now() + dur,
    });
};

// globals.

// general tips
// options tips
// rules n stuff
// gameplay tips
// facts
// goofy shit

global.tips = [[ // You can edit this!
        "Tip: You can make your own nero.io with the source code linked at the top right of the title screen.",
        "Tip: You can play nero on mobile by opening the game on your phone!",
        "Tip: Join the nero.io discord with the link in the title screen for the latest updates and news!",
        "Tip: Subscribe to deltafyrex on youtube for shitposts, streams and more!",
        "Tip: Follow deltafyrex on twitter for more information and news on the game.",
        "Tip: Feeling lonely and sad? Join the nero.io discord server to talk to people just like you!",
        "Tip: Want to play nero.io 1? click the button at the top right of the title screen.",
        "Tip: You can change songs in game with F1 or whatever you set the change song keybind to.",
        "Tip: Want to enable music? click the checkbox at the top of the title screen!",
        "Tip: Unlock in game cosmetics and player skins by completing the achivements found in the \n"
        +"achievements menu located at the top of the title screen",
        "Tip: Change and equip your unlocked skins in the skins menu located at the top of the title screen",
        "Tip: View the game credits with its respected button underneath the changelog <3",
        "Tip: Is there an empty or unfinished entity wiki entry? send in your own descriptions and \n"
        +"info on the entry through discord and it could end up in the game!",
        "Tip: Do you have a suggestion for the game? if so, send it to us on our discord!",
        "Tip: Like the game? share it with your friends, the more the merrier!"
    ], [
        "Tip: You can change ui stuff like seperate health wnd shield bars and curvy traps in the options menu.",
        "Tip: If nero is running like gta 5 on windows xp, you can either go to the optomization section \n"
        +"in the options menu or get a pc that didnt come from a macdonalds happy meal 💀.",
        "Tip: Dont like death sounds? wanna get rid of them? disable them in the options menu!",
        "Tip: You can change what soundtracks play ingame when music is turned on by going to the options menu",
        "Tip: You can view and change your keybinds in the options menu.",
        "Tip: You can create your own theme with the custom theme maker using the link in the options menu."
    ], [
        "Teaming in FFA is stupid, dont do it, i mean then again theres nothing really stopping you.",
        "Exploits arent cool, it breaks the balance and unfairness of the game, if you find one. tell me",
        "Multiboxing is stupid, your literally cheating with more tanks instead of just one, dont be a jerk."
    ], [
        "Tip: Theres a wide variety of tanks in nero.io, be open to different tanks! you might like them.",
        "Tip: Nests are different color tiles on the map that can spawn things like bosses and stronger shapes!",
        "Tip: Not all tanks work as intended, expect some bugs while using some of them.",
        "Tip: Many nero.io tanks have special gimmicks, try experimenting with them to see how they work!",
        "Tip: Want to know information about an entity or tank? press F7 on pc to view the in game entity wiki!",
        "Tip: This game is very unpredictable! be prepared for anything that could happen.",
        "Tip: Want to view the title screen in game? just type /menu in the chat bar!",
        "Tip: There are many different classes and weapons in this game, and its important to know what they do.",
    ], [
        "Did you know that nero has been worked on for more than 5 years! look at the notes section in the \n"
        +"title screen for a live counter since release!",
        "The first ever custom nero tank was named revix, i wonder why.....",
        "Nero is actually a spinoff of a another 2d tank game called arras.io which is a spinoff of diep.io",
        "Nero was meant to be a combination of arras and woomy arras (there lore on that)"
    ], [
        "IM JUST GOODER",
        "MAYONNAISE ON AN ESCALATA",
        "Nero better than arras, cry about it",
        "Want testbed? nuh uh!",
        "Im bored of making these tip messages",
        "im retarded",
        "WOAH ITS WULZY",
        "1v1 me noob",
        "listen to my music on Soundcloud or perish",
        "N U H.  U H.",
        "Y U H.  U H.",
        "Your built like the nerd emoji 🤓",
        "IM GONNA FLY A PLAAANE INTO A-",
        "Nero once a day keeps the social interactions away!",
        "Bingle bongle dingle dangle yickety doo yickety da ping pong lippy tappy too taa",
        "This tip is sponsored by RAID SHADOW LEGENDS!",
        "Don't you have something else better to do?",
        "Stop procrastinating, finish what you need to do",
        "i hope you die over and over again",
        "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
    ]
];
global.createMessage = (content, duration) => createMessage(content, duration);