export default function Loading() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            style={{
                margin: "auto",
                background: "rgb(255, 255, 255)",
                display: "block",
                shapeRendering: "auto",
                width: "200px",
                height: "200px",
                viewBox: "0 0 100 100",
                preserveAspectRatio: "xMidYMid"
            }}>
<g>
  <path d="M50 15A35 35 0 1 0 74.74873734152916 25.251262658470843" fill="none" stroke="#ff424e" stroke-width="7"></path>
  <path d="M49 3L49 27L61 15L49 3" fill="#ff424e"></path>
  <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
            </g>
        </svg>
    )
}