const artistsJumpStop = []
const artistsChatten = []
const artistsPolar = []

const createFunkOrRapArtist = (artist, genre, age) => {
    return {
        "artist": artist,
        "genre": genre,
        "age": age,
}
};
const createCountryOrBluegrassArtist = (artist, genre, age) => {
    return {
        "artist": artist,
        "genre": genre,
        "age": age,
}
};
const createPopArtist = (artist, genre, age) => {
    return {
        "artist": artist,
        "genre": genre,
        "age": age,
}
};

const DreFunz = createFunkOrRapArtist("dreFunz", "Funk", 25);
const DustaGrimes = createFunkOrRapArtist("dustaGrimes", "Rap", 21);
const LoyonceBranis = createFunkOrRapArtist("loyonceBranis", "Rap", 27);

const BruceAtkins = createCountryOrBluegrassArtist("bruceAtkins", "Country", 23);
const BartDanielson = createCountryOrBluegrassArtist("bartholomewDanielson", "Bluegrass", 23);

const JensenBrown = createPopArtist("jensenBrown", "Pop", 20);
const AustinKinkaid = createPopArtist("austinKinkaid", "Pop", 22);

artistsJumpStop.push(DreFunz,DustaGrimes,LoyonceBranis);
artistsChatten.push(BruceAtkins,BartDanielson);
artistsPolar.push(JensenBrown,AustinKinkaid);

console.log(artistsJumpStop)
console.log(artistsChatten)
console.log(artistsPolar)
