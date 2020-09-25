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
	"1.jpg",
	"2.jpg",
	"3.jpg",
	"4.jpg",
	"5.jpg",
	"6.jpg",
	"7.jpg",
	"8.jpg",
	"9.jpg",
	"10.jpeg",
	"11.jpg",
	"12.jpg",
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
	{ogg: "2.ogg", name: "Aogiri theme Tokyo Ghoul"},
	{ogg: "3.ogg", name: "Das erste Kapitel Tokyo Ghoul"},
	{ogg: "1.ogg", name: "SWARM Savior"},
	{ogg: "4.ogg", name: "Death Mask Devilman Crybaby"},
	{ogg: "5.ogg", name: "Auferstehung 0 Tokyo Ghoul"},
];

// Random music order?
// 'true' or 'false'
var l_musicRandom = true;

// Music volume
// Choose a value between 0 (quietest) and 100 (loudest)
var l_musicVolume = 12;

// Enable custom messages?
// 'true' or 'false'
var l_messagesEnabled = true;

// Enter your custom messages below
var l_messages = [
	"Le Réveil D'Osaka est un serveur Serious Roleplay où l'univers de Tokyo Ghoul est mis en avant.",
	"Jouez en tant que Goule, Humain ou encore membre du Centre du Contrôle des Goules!",
	"Vous pouvez disposer d'un double Roleplay, c'est-à-dire d'un RP Goule et CCG.",
	"Si on écrivait une histoire avec moi comme personnage principal... Cette histoire serait à coup sûr... Une tragédie.",
	"La tristesse n'est pas dans l'absence de vengeance...La vrai tristesse...C'est d'être prisonnier de son désir de vengeance au point d'oublier de vivre sa vie.",
	"J'en ai la chair de poule quand elle caresse ma douleur. Son amour me fait mal à m'en mordre le coeur.",
	"Faire ce que l'on aime est le droit des puissants.",
	"Je ne suis jamais seule parce que la solitude est toujours avec moi.",
	"Oui... Nec possum... tecum vivere... nec sine te.Je ne peux ni vivre avec toi... ni vivre sans toi. Comme chacun a sa façon de penser, c'est parfois... difficile de se comprendre.",
	"Selon moi... Si le monde est injuste, c'est parce qu'il est sali... Par chacune des créatures qui le hantent.",
	"On doit savoir fuir! Que cela nous plaise ou non! Rester en vie, c'est garder la possibilité de gagner.",
	"Tranchée en plein vol. Elle tombe l'aile du papillon. Blanche et anonyme.",
	"Je voudrais être un poignard pour faire couler ton sang comme tu as fais couler mes larmes.",
	"Pour un esprit équilibré, la mort n’est qu’une grande aventure de plus.",
	"Ce n'est pas moi qui suis erroné. Ce qui est erroné c'est ce monde.",
	"Vous riez de moi car je suis différent. Mais moi je ris car vous êtes tous les mêmes.",
	"Quand tu réalises que ton propre avenir est en merde, il ne te reste plus qu'à vivre pour quelqu'un d'autre.",
	"Nous n'avons que deux choix dans la vie, vivre en incarnant la beauté ou vivre pour ceux qui l'incarne."
];

// Random message order?
// 'true' or 'false'
var l_messagesRandom = false;

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