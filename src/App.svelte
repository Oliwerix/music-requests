<script>
	import {admin} from "./store";
	import DodajKomad from './DodajKomad.svelte';
	import Komadi from './Komadi.svelte';
		let muzke = [
		{"naslov": "fazlja","votes": 0},
		{"naslov": "dusan","votes": 0},
		{"naslov": "to je mikic","votes": 0},
		]
	function novKomad(event) {
		console.log(event.detail)
		muzke = [event.detail,...muzke ]
		
	}
	function removeKomad(event) {
		console.log(event.detail)
		muzke = muzke.filter(item => item !== event.detail)
	}
	

</script>
<main>
	<!-- <input type="checkbox" bind:checked={$admin}> -->
	<DodajKomad on:novKomad={novKomad}></DodajKomad>
	
	<div class="komadi">
		<Komadi></Komadi>
	</div>
	
	
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
			}
	div.komadi {
		align-self: center;
		width: 80%;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>