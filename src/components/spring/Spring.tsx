import { useState } from 'react'

// Olika sätt att använda CSS:
// 1. className
// 2. inline style
// 3. styled components
const oddBg: string = '#7FB575'
const evenBg: string = '#4D8A55'

const Spring = () => {
	const [springSigns, ] = useState([
		'Pollen', 'Tulpaner', 'Värme och sol', 'Uteserveringar', 'Öl', 'Grillning', 'Fåglarna kvittrar'
	])
	const [selectedSign, setSelectedSign] = useState<null | string>(null)

	return (
		<section>
			<h2>Vårtecken</h2>
			{springSigns.map((sign, index) => (
				<div key={sign}
					style={ { backgroundColor: index % 2 === 1 ? oddBg : evenBg } }
					onClick={() => setSelectedSign(sign)}
				> {sign} </div>
			))}

			{selectedSign === null
				? <p> Välj vilket som är det viktigaste vårtecknet! </p>
				: <p> Men det viktigaste är <strong>{selectedSign}</strong>! </p> }

		</section>
	)
}

export default Spring
