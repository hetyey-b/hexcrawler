import React from 'react'
import { HexGrid, Layout, Hexagon, Text, Pattern, Path, Hex } from 'react-hexgrid';

const Hexmap = ({}) => {
	return(
		<HexGrid width={1200} height={800} viewBox="-50 -50 100 100">
			{/* Grid with manually inserted hexagons */}
			<Layout size={{ x: 10, y: 10 }} flat={true} spacing={1.1} origin={{ x: 0, y: 0 }}>
				<Hexagon q={0} r={0} s={0} />
				<Hexagon q={0} r={-1} s={1} />
				<Hexagon q={0} r={1} s={-1} />
				<Hexagon q={1} r={-1} s={0} />
				<Hexagon q={1} r={0} s={-1} />
				<Hexagon q={-1} r={1} s={0} />
				<Hexagon q={-1} r={0} s={1} />
				<Hexagon q={-2} r={0} s={1} />
			</Layout>
		</HexGrid>
	)
}

export default Hexmap;