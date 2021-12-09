<script>
    import Komad from './Komad.svelte'
    import { db } from './firebase'
    import { collectionData } from 'rxfire/firestore';
    import { startWith } from 'rxjs/operators';

    const query = db.collection('komadi').orderBy('created');

    const muzke = collectionData(query).pipe(startWith([]));
    function add() {
        db.collection('komadi').add(komad);
        text = '';
    }
    function removeKomad(event) {
        const { id } = event.detail;
        db.collection('komadi').doc(id).delete();
    }
</script>

{#each $muzke as komad}
    <Komad bind:komad on:removeKomad={removeKomad}></Komad>
{/each}