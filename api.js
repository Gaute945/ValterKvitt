async function getquote() {
    let quote;
    let author;
    const data = await fetch("https://api.breakingbadquotes.xyz/v1/quotes");
    const json = await data.json();
    quote = json[0].quote;
    author = json[0].author;

    document.getElementById("quote").innerText = quote;
    document.getElementById("author").innerText = author;

    if (author === "Walter White") { document.getElementById("person").src = "http://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg"; }
    if (author === "Mike Ehrmantraut") { document.getElementById("person").src = "http://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_mike-ehrmantraut-lg.jpg"; }
    if (author === "Jesse Pinkman") { document.getElementById("person").src = "https://vignette.wikia.nocookie.net/walkingdead/images/5/55/Jesse_Pinkman.jpg/revision/latest?cb=20150313041401"; }
    if (author === "Hank Schrader") { document.getElementById("person").src = "http://images3.wikia.nocookie.net/__cb20130717044212/breakingbad/images/7/7b/Hank_S5b.jpg"; }
    if (author === "Saul Goodman") { document.getElementById("person").src = "http://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_saul-goodman-lg.jpg"; }
    if (author === "Walter White Jr") { document.getElementById("person").src = "http://static3.wikia.nocookie.net/__cb20130717044346/breakingbad/images/4/41/WaltJr_S5b.jpg"; }
    if (author === "Gustavo Fring") { document.getElementById("person").src = "http://images.amcnetworks.com/amc.com/wp-content/uploads/2017/03/Singles_Giancarlo_Esposito-Gus-Fringe_012917_0048-700x1000.jpg"; }
    if (author === "Badger") { document.getElementById("person").src = "https://vignette.wikia.nocookie.net/breakingbad/images/5/5b/Cast_bb_800x600_badger.jpg/revision/latest?cb=20170613184551"; }
    if (author === "Skyler White") { document.getElementById("person").src = "https://i.redd.it/gjgkjm5hg3cz.jpg"; }
    if (author === "The fly") { document.getElementById("person").src = "https://m.media-amazon.com/images/M/MV5BZWFkNDIwMGItYzg0MS00NDc4LWI1MmItZTlmYWYzYjA5NWYyXkEyXkFqcGdeQXVyNTMyMDkwMTE@._V1_UY268_CR154,0,182,268_AL_.jpg"; }
}
getquote();