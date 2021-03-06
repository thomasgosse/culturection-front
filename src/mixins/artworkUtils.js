export default {
  methods: {
    buildAlbum(album) {
      return {
        name: album.name,
        releaseDate: album.release_date,
        type: album.type,
        id: album.id,
        artists: this.buildArtists(album.artists),
        images: album.images,
      };
    },
    buildArtists(artists) {
      return artists.map(artist => ({
        name: artist.name,
        id: artist.id,
      }));
    },
    buildTVShow(tvshow) {
      return {
        name: tvshow.name,
        releaseDate: tvshow.releaseDate,
        type: tvshow.type,
        id: tvshow.id,
        images: tvshow.images,
      };
    },
  },
};
