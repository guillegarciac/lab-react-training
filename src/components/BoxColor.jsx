import React from "react";

const BoxColor = (props) => {
const {r,g,b} = props;
const boxStyle = {
  backgroundColor: `rgb(${r},${g},${b})`
}
return (
  <div style={boxStyle}>
			<p>rgb ({r},{g},{b})</p>
	</div>
)
}

export default BoxColor;