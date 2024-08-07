const user = 'prince_tar';
const apiKey = '5895e406d0d292905d25a1993f94ad0e';
const url = 'http://ws.audioscrobbler.com/2.0/';
const resultDiv = document.getElementById('result');

const timestamp30DaysAgo = Math.floor(Date.now() / 1000) - (30 * 24 * 60 * 60);

async function fetchRecentTracks() {
    try {
        const response = await fetch(`${url}?method=user.getrecenttracks&user=${user}&api_key=${apiKey}&format=json&from=${timestamp30DaysAgo}&limit=200`);
        const data = await response.json();
        return data.recenttracks.track;
    } catch (error) {
        console.error('Error fetching recent tracks:', error);
    }
}

function countAlbums(tracks) {
    const albumCounts = {};
    const albumArtists = {};

    tracks.forEach(track => {
        const album = track.album['#text'];
        const artist = track.artist['#text'];
        if (album) {
            if (!albumCounts[album]) {
                albumCounts[album] = 0;
                albumArtists[album] = artist;
            }
            albumCounts[album]++;
        }
    });

    return { albumCounts, albumArtists };
}

function getMostListenedAlbum(albumCounts, albumArtists) {
    let mostListenedAlbum = null;
    let maxCount = 0;
    let artist = null;
    for (const [album, count] of Object.entries(albumCounts)) {
        if (count > maxCount) {
            mostListenedAlbum = album;
            maxCount = count;
            artist = albumArtists[album];
        }
    }
    return { album: mostListenedAlbum, artist, count: maxCount };
}

async function displayMostListenedAlbum() {
    const tracks = await fetchRecentTracks();
    const { albumCounts, albumArtists } = countAlbums(tracks);
    const mostListenedAlbum = getMostListenedAlbum(albumCounts, albumArtists);

    if (mostListenedAlbum.album) {
        resultDiv.textContent = `My most listened album in the last 30 days is '${mostListenedAlbum.album}' by '${mostListenedAlbum.artist}' with ${mostListenedAlbum.count} plays.`;
    } else {
        resultDiv.textContent = 'No albums found in the last 30 days.';
    }
}

displayMostListenedAlbum();
