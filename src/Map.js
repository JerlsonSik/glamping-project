

const MapStyle = {
    width: "100%",
    height: 500
  };

const Map = () => {
    return ( 
        <div id="map-container-google-2">
        <iframe
        src="https://maps.google.com/maps?&amp;q=1096%20S.%20Otis%20Road,%20Westville,%20IN%2046391+(Cooper%20Lake)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        width={MapStyle.width}
        height={MapStyle.height}
        style={{ border: 0 }}
        allowFullScreen
        aria-hidden="false"
        tabIndex="0"
        title="Cooper Lake Glamping"
      />
        </div>
     );
}
export default Map;