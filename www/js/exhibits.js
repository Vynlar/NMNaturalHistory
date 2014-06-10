var timetracks = [["Origins", "../img/exhibits/Timetracks01_OriginsCell_th.jpg", "12 billion to 251 million years ago: From the beginning of the universe through the Paleozoic Era",
                   "origins.html"],
                  ["Dawn of the Dinosaurs", "../img/exhibits/triassic_thumb.jpg", "The Triassic Period, 251 million to 202 million years ago", "triassic.html"],
                  ["Age of Super Giants", "../img/exhibits/jurassic_thumb.jpg", "Jurassic, 202 million to 144 million years ago", "jurassic.html"],
                  ["New Mexico's Seacoast", "../img/exhibits/cretaceous_thumb.jpg", "Cretaceous Period, 144 million to 66 million years ago", "cretaceous.html"],
                  ["Age of Volcanoes", "../img/exhibits/Timetracks5_V.jpg", "Paleogene and Neogene Periods, 65 million to 1.8 million years ago", "volcanoes.html"],
                  ["Evolving Grasslands", "../img/exhibits/Timetracks_06EG2.jpg", "Paleogene and Neogene Periods, 65 million to 1.8 million years ago",
                   "grasslands.html"],
                  ["The Cave", "../img/exhibits/Timetracks_07C_th.jpg", "Pliocene and Pleistocene Epochs, 4 million to 10,000 years ago", "cave.html"],
                  ["New Mexico's Ice Age", "../img/exhibits/pleistocene_thumb.jpg", "Pleistocene, 1.6 million to 10,000 years ago", "pleistocene.html"]];

var other = [
    ["Entrance Dinosaurs", "../img/exhibits/entrancedino_thumb.jpg", "Visitors to the Museum are welcomed by two life-size New Mexico dinosaurs that were cast in bronze by Albuquerque sculptor Dave Thomas.", "entdinos.html"],
    ["Naturalist Center", "../img/exhibits/naturalist_center_thumb.jpg", "The Naturalist Center is the hands-on educational room in the museum for \"children\" of all ages.", "natcenter.html"],
    ["FossilWorks", "../img/exhibits/fossilworks_thumb.jpg", "FossilWorks is a public display area in which trained volunteers demonstrate the painstaking process of paleontological preparation.", "fossilworks.html"],
    ["The Hall of the Stars", "../img/exhibits/hots_thumb.jpg", "Explore your night sky!", "the-hall-of-the-stars.html"],
    ["T-Rex Attack", "../img/exhibits/stan_thumb.jpg", "Visitors to the Museum find themselves face to face with Tyrannosaurus rex in full attack mode, as they round the corner into the Museum Atrium.", "t-rex-attack.html"],
    ["The Bisti Beast", "../img/exhibits/bistibeast_thumb.jpg", "New Mexico's newest tyrannosaur is on exhibit in our New Mexico's Seacoast Hall.", "the-bisti-beast1.html"],
    ["STARTUP", "../img/exhibits/startup.jpg", "STARTUP is the first museum exhibition dedicated to the microcomputer - the little machine that revolutionized the way we live, work and play.", "startup-albuquerque-and-the-personal-computer-revolution.html"],
    ["Emergence: A New View of Life's Origins", "../img/exhibits/thumb_Emergence.png", "How and why did life on Earth emerge? New research taking place around the globe-including here in New Mexico-suggests we are close to answering this question.", "emergence-a-new-view-of-lifes-origins.html"]];

$('#timetracks').on('pageshow', function(event) {
    generateExhibitList(timetracks, "#timetrack-list", false);
});

$('#other').on('pageshow', function(event) {
    generateExhibitList(other, "#other-list", false);
});
