//       _           _    _                     _ 
//      | |         | |  | |                   | |
//   ___| | ___  ___| | _| |     ___   __ _  __| |
//  / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
//  \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
//  |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
//     version 2.16

// URL for the server logo
// Leave it blank to use text instead
// (Put the files in the images folder)
// (You can also use external URL)
var l_serverImage = "logo.png";

// Center logo?
// 'true' or 'false'
var l_centerLogo = true;

// Display current map and gamemode?
// 'true' or 'false'
var l_displayMapGamemode = true;

// Custom server name configuration
// Leave it blank for automatic server name
var l_serverName = "";

// Use a video for the background?
// Otherwise it will use images
// 'true' or 'false'
var l_bgVideo = false;

// Default available videos:
// "aurora.webm"
// "bluefall.webm"
// "bluetilefloor.webm"
// "bluewhitecircles.webm"
// "bokehlens.webm"
// "cleanbokeh.webm"
// "coldnight.webm"
// "colorfulburst.webm"
// "dancingstars.webm"
// "dropsflares.webm"
// "focusorangebokeh.webm"
// "glimmering.webm"
// "glowingrings.webm"
// "greencircles.webm"
// "hues.webm"
// "inthedeep.webm"
// "modernflourish.webm"
// "orangeaura.webm"
// "warminside.webm"
// "yellowgreen.webm"
//
// You can add your own video backgrounds
// Just make sure they are using webm VP8 format 
// (Place the videos in the backgrounds/videos folder)
// (You can also use external URL)
var l_background = "bluefall.webm";

// (Image-background only)
// Enable map-based background image?
// If enabled, the background will be an image based on the server current map
// You need to have a background image with the same name as the map
// Also, the image needs to be in .jpg format
// E.g: gm_flatgrass.jpg, gm_construct.jpg, rp_downtown_v4c_v2.jpg
// 'true' or 'false'
var l_bgImageMapBased = false;

// (Image-background only)
// Place one or more images
// Multiple images will automatically shuffle between them
// (Place the files in the backgrounds/images folder)
// (You can also use external URL)
var l_bgImages = [
	"314126.jpg",
	"1082019-hp6_trailer_9_inferi.jpg",
	"albus-dumbledore-wallpaper-hogwarts-professors-32797129-1024-768.jpg",
	"big_1479611048_image.jpg",
	"C89cQjI.jpg",
	"DH2_Kingsley_Shacklebolt_Protego.gif",
	"Dumbledore-Wallpaper-Download.jpg",
	"Fiendfyre.jpg",
	"griffindor-garri-potter-garry.jpg",
	"hogwarts_house_wallpaper___slytherin_by_theladyavatar-d5h48oq.jpg",
	"image.jpg",
	"JlIEmMN.jpg",
	"Running-Through-The-Woods.jpg",
	"Severus-Snape.jpg",
	"Severus-Snape-Wallpaper-severus-snape-7998898-1440-900.jpg",
	"shPPhft.jpg",
	"w_thumb-1920-556484.jpg"
];

// (Image-background only)
// Random background images order?
// 'true' or 'false'
var l_bgImagesRandom = true;

// (Image-background only)
// Delay between background images changes
// in milliseconds
var l_bgImageDuration = 5000;

// (Image-background only)
// Image background fade velocity
// in milliseconds
var l_bgImageFadeVelocity = 2000;

// Enable background overlay?
// 'true' or 'false'
var l_bgOverlay = true;

// Background darkening amount
// 0 for none (0%), 100 for pitch black (100%)
var l_bgDarkening = 50;

// Play music during the loading screen?
// 'true' or 'false'
var l_music = true;

// Display current music name?
// 'true' or 'false'
var l_musicDisplay = true;

// Music playlist
// Add as many youtube ids/urls or ogg files you want
// (Place the ogg files in the music folder)
// (You can also use external URL for the ogg files)
var l_musicPlaylist = [
	{ogg: "Courtyard Apocalypse.ogg", name: "Courtyard Apocalypse"},
	{ogg: "hidden citizen.ogg", name: "Hidden Citizen"},
	{ogg: "ashamaluevmusic.ogg", name: "AShamaluevMusic"},
	{ogg: "dragon-castle.ogg", name: "Dragon Castle"},
	{ogg: "jacob.ogg", name: "Jacob's Bakery"}
];

// Random music order?
// 'true' or 'false'
var l_musicRandom = true;

// Music volume
// Choose a value between 0 (quietest) and 100 (loudest)
var l_musicVolume = 10;

// Enable custom messages?
// 'true' or 'false'
var l_messagesEnabled = true;

// Enter your custom messages below
var l_messages = [
	"N’aie pas pitié des morts Harry, aie pitié des vivants et en particulier de tous ceux qui vivent sans amour.",
	"Dans le monde il n’y a pas d’un côté le bien et le mal, il y a une part de lumière et d’ombre en chacun de nous. Ce qui compte c’est celle que l’on choisit de montrer dans nos actes, ça c’est ce que l’on est vraiment.",
	"- Est-ce que ça fait mal de mourir ? - C’est plus rapide que de s’endormir.",
	"Il faut du courage pour affronter ses ennemis mais il en faut encore plus pour affronter ses amis…",
	"Je jure solennellement que mes intentions sont mauvaises.",
	"Mais vous savez, on peut trouver du bonheur même dans les endroits les plus sombres. Il suffit de se souvenir d’allumer la lumière.",
	"J’ai toujours été fier du talent que je possède pour tourner des phrases. Et les mots sont à mon avis, qui n’est pas si humble, notre plus inépuisable source de magie. Ils peuvent à la fois infliger des blessures et y porter remède.",
	"Quand nous rêvons, nous entrons dans un monde qui n’appartient qu’à nous. ",
	"Pour un esprit équilibré, la mort n’est qu’une grande aventure de plus. ",
	"Tu as les yeux de ta mère.",
	"Les choses finissent toujours pas revenir, mais pas toujours de la manière qu’on croit.",
	"Tu n’es pas quelqu’un de mauvais. Tu es quelqu’un de bon à qui il est arrivé de mauvaises choses. ",
	"J’ai lu dans ton cœur, et ton cœur est mien.",
	"La parole d’un enfant aussi sincère soit-elle n’a pas de sens pour qui ne sait pas écouter.",
	"C’est vous le faible et vous ne connaîtrez jamais l’amour ni l’amitié. Et je vous plains.",
	"Tout homme s’enrichit quand abonde l’esprit."
];

// Random message order?
// 'true' or 'false'
var l_messagesRandom = true;

// Delay between message changes
// in milliseconds
var l_messagesDelay = 5000;

// Messages fade time
// in milliseconds
var l_messagesFade = 1000;

// Show errors inside Garry's Mod?
// Can be useful for finding errors
// 'true' or 'false'
var l_showErrorsIngame = true;

//==============================================================
//========================== WARNING ===========================
//==============================================================
//============ Do not edit anything below this line ============
//==============================================================
var checkConfigFile = function() {
	return true;
};