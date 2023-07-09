/**
 * default position - capital of Ukraine (Kyiv)
 */
const defaultGeoPosition: google.maps.MapOptions = {
  center: {
    lat: 50.45466,
    lng: 30.5238,
  },
  zoom: 4,
};

export const geoPosition = (): Promise<google.maps.MapOptions> =>
  new Promise((res, rej) => {
    if (!window.navigator.geolocation) {
      rej(defaultGeoPosition);
    }

    const success = (opt: GeolocationPosition) => {
      const { latitude: lat, longitude: lng } = opt.coords;
      const userCoords: google.maps.MapOptions = {
        center: {
          lat,
          lng,
        },
        zoom: 17,
      };
      res(userCoords);
    };

    const error = () => {
      rej(defaultGeoPosition);
    };

    window.navigator.geolocation.getCurrentPosition(success, error);
  });
