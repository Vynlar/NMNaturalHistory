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
    ["Entrance Dinosaurs", 
        "../img/exhibits/entrancedino_thumb.jpg", 
        "Visitors to the Museum are welcomed by two life-size New Mexico dinosaurs that were cast in bronze by Albuquerque sculptor Dave Thomas.", 
        "Spike The first dinosaur installed at the Museum entrance was a Pentaceratops, affectionately nicknamed \“Spike.\” Pentaceratops was a horned dinosaur whose fossils were first discovered in the badlands of northwest New Mexico. About 75 million years ago, this dinosaur would have cropped vegetation from the subtropical swamps near the shore of the Cretaceous sea that covered much of New Mexico. The name Pentaceratops means \“five-horned face,\” and all five can be seen on Spike—one over each eye, one on each cheek and one on the nose. Casts of two Pentaceratops skulls are on display in the New Mexico's Seacoast exhibit."],
    ["Naturalist Center", 
        "../img/exhibits/naturalist_center_thumb.jpg", 
        "The Naturalist Center is the hands-on educational room in the museum for \"children\" of all ages.", 
        "The Naturalist Center is the hands-on educational room in the museum for \"children\" of all ages. It is a place to touch specimens and explore the natural world of New Mexico, and it includes a \"Kids as Curators\" area where children can display and trade specimens. "],
    ["FossilWorks", 
        "../img/exhibits/fossilworks_thumb.jpg", 
        "FossilWorks is a public display area in which trained volunteers demonstrate the painstaking process of paleontological preparation.", 
        "The process of extracting dinosaur fossils from the rock matrix that has encased them for millions of years is featured in the FossilWorks exhibit at the Museum. Volunteer preparators must complete a special training course to work in FossilWorks, which was funded through an appropriation from the New Mexico State Legislature. Presently Fossilworks focuses on another Jurassic site, the Peterson quarry, located on BLM land in central New Mexico. A father-son team, the Petersons first discovered the site in the 1960s. Since 1989, they have led dozens of excavations at the site, pouring in thousands of volunteer hours to excavate almost 70 jackets containing dinosaur bones and teeth. The most dramatic specimen from the Peterson quarry is a partial skeleton of the giant (40 ft/12 m long) theropod Saurophaganax. This partial skeleton was first prepared in Fossilworks and is now on display in the museum's Age of Supergiants (Jurassic) exhibit. Besides the actual fossil preparation work, the exhibition features text and illustrations about fossilization, Jurassic Period dinosaurs, and preparation."],
    ["The Hall of the Stars", 
        "../img/exhibits/hots_thumb.jpg", 
        "Explore your night sky!", 
        "The Hall of the Stars aims to explain how the night sky is organized. This exhibit encourages visitors to explore the sky at their own pace and learn many different astronomical concepts, from the changing of the seasons to types of deep sky objects that they can see from their own backyards. Rather than just showing the sky visible on any given night of the year, the Hall of the Stars allows visitors to see all of the year’s stars and constellations in the same way that a world map allows them to visualize the whole globe.  The most prominent 39 constellations are quilted onto the tapestry with UV-reactive thread.  By also including the celestial equator and the ecliptic, or the path that the sun takes through the sky, the map demonstrates the changing of the seasons. The 1,100 commonly-visible stars in the northern night sky are represented by individual LEDs.  358 of these represent the brightest stars of the night sky and are controlled by a program running on the interactive touch screen. The LEDs come in various color temperatures in order to demonstrate the variability of colors and brightness among stars.  110 LEDs represent Messier Objects, which are a collection of famous deep sky objects, including the Pleiades and the Orion Nebula.  These LEDs are green in order to differentiate them from the stars. The user interface presents information about the tapestry in an intuitive, layered format.  Using it, people can either explore the constellations and stars of the night sky or Messier Objects. In order to see moveable objects such as the moon and planets that cannot be implemented with fixed-position LEDs, The Sky Tonight is included in the exhibit. The Sky Tonight, a member of the Space Update suite, was developed by Rice University and is available to all museums at a very low cost."],
    ["T-Rex Attack", 
        "../img/exhibits/stan_thumb.jpg", 
        "Visitors to the Museum find themselves face to face with Tyrannosaurus rex in full attack mode, as they round the corner into the Museum Atrium.", 
        "Visitors to the Museum will thrill to find themselves face to face with the gaping maw of the second largest T. rex ever found, in full attack mode, as they round the corner of the Museum Atrium. Stan is a Tyrannosaurus rex, one of the largest predatory dinosaurs of all time. He was a powerful, agile, bipedal killing machine. Forty feet long and 12 feet high at the hips, Stan weighed roughly 6 tons and hunted with an acute sense of smell, 3-D vision, and great speed powered by huge and muscular hind legs. A complete T. rex skeleton has yet to be found in New Mexico, however fossils of tyrannosaurid dinosaurs—Albertosaurus and Tyrannosaurus rex—have been discovered all over New Mexico from the San Juan Basin to Elephant Butte and Raton. T. REX ATTACK! is on permanent display in the Museum’s atrium and is free with regular Museum admission. T. REX ATTACK! is made possible by the generosity of the 2006 New Mexico State Legislature, the NMMNHS Volunteer Association, the NMMNH Foundation and numerous private donors."],
    ["The Bisti Beast", 
        "../img/exhibits/bistibeast_thumb.jpg", 
        "New Mexico's newest tyrannosaur is on exhibit in our New Mexico's Seacoast Hall.", 
        "Dr. Thomas Williamson, Curator of Paleontology, has led a productive campaign to collect Late Cretaceous dinosaurs from the badlands of the San Juan Basin since 1994. In 1997, a volunteer researcher, Paul Sealey, found an interesting site during a weekend fossil exploration fieldtrip to the Bisti/De-na-zin Wilderness Area. Paul Sealey has a long history of working with Museum curators to recover fossils. Dr. Williamson visited the new site and immediately realized that Paul Sealey had found a very rare and important fossil: the partial skeleton of a tyrannosaur, a member of the group of meat-eating dinosaurs that includes Tyrannosaurus rex. This was to be the first paleontological excavation to be allowed in a Federal Wilderness area. The permits were granted in 1998 and the dinosaur was excavated that summer. The completeness of the new tyrannosaur specimen was revealed only after careful preparation."],
    ["STARTUP", 
        "../img/exhibits/startup.jpg", 
        "STARTUP is the first museum exhibition dedicated to the microcomputer - the little machine that revolutionized the way we live, work and play.", 
        "STARTUP is the first museum exhibition dedicated to the history of the microcomputer - the little machine that revolutionized the way we live, work and play. The gallery features one-of-a-kind artifacts, video and interactive displays, including \“Rise of the Machines\” - an immersive multimedia theater experience."],
    ["Emergence: A New View of Life's Origins", 
        "../img/exhibits/thumb_Emergence.png", 
        "How and why did life on Earth emerge? New research taking place around the globe-including here in New Mexico-suggests we are close to answering this question.", 
        "RESEARCH Scientists at the Santa Fe Institute, and collaborating institutions have been working to find evidence of how and why life first emerged on earth. EXHIBIT The Emergence exhibit at the New Mexico Museum of Natural History and Science explores questions and scientific discoveries about the origins of life. RESOURCES Please view the resources section on our website for educational literature, activites, video, and interactives."]];

$('#timetracks').on('pageshow', function(event) {
    generateExhibitList(timetracks, "#timetrack-list", false);
});

$('#other').on('pageshow', function(event) {
    generateExhibitList(other, "#other-list", false);
});
