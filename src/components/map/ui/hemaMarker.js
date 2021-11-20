const HemaMarker = (props) => {
    <a
        target="_blank"
        href={props.url}>
        <img
            height={30}
            lat={props.lat}
            lng={props.lng}
            src={Pin}
        />
    </a>
}

export default HemaMarker;