import { useState } from 'react'

// Olika sätt att använda CSS:
// 1. className
// 2. inline style
// 3. styled components
const oddBg: string = '#7FB575'
const evenBg: string = '#4D8A55'
const selectedBg: string = '#9BD8A3'

// När ska man ha CSS:en i samma fil, och när ska man flytta ut den till *.css?
// Saker att ta hänsyn till:
// - mycket eller lite?
// - kommer komponenten att växa?
// - behöver flera komponenter använda CSS:en?

// Styled components:
// const Styled = styled.div`
// 	color: hotpink;
// `
//
// return (
// 	<Styled>
// 		<div> .... </div>
// 	</Styled>
// )


const Spring = () => {
	const [springSigns, setSpringSigns] = useState([
		'Pollen', 'Tulpaner', 'Värme och sol', 'Uteserveringar', 'Öl', 'Grillning', 'Fåglarna kvittrar'
	])
	const [selectedSign, setSelectedSign] = useState<null | string>(null)
	const [newSign, setNewSign] = useState('')

	const itemStyle = {
		padding: '0.2em 1em'
	}

	const handleAddSign = () => {
		// Obs! set-funktioner är asynkrona - men man kan inte göra AWAIT
		setSpringSigns([ ...springSigns, newSign ])
		setNewSign('')
	}

	return (
		<section>
			<h2>Vårtecken</h2>
			{springSigns.map((sign, index) => (
				<div key={sign}
					style={ { ...itemStyle, backgroundColor: sign === selectedSign ? selectedBg : (index % 2 === 1 ? oddBg : evenBg) } }
					onClick={() => setSelectedSign(sign)}
				> {sign} </div>
			))}

			{selectedSign === null
				? <p> Välj vilket som är det viktigaste vårtecknet! </p>
				: <p> Men det viktigaste är <strong>{selectedSign}</strong>! </p> }

			<p>
				Vi har ju glömt ett vårtecken:
				<input type="text" placeholder="Ett vårtecken"
					onChange={event => {setNewSign(event.target.value)}}
					value={newSign} />
				<button onClick={handleAddSign}> Lägg till </button>
			</p>
		</section>
	)
}

export default Spring
