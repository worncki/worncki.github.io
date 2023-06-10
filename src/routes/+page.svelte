<script>
    import { _, locale } from 'svelte-i18n'
    import { addMessages } from 'svelte-i18n';
    import en from '../lang/en.json';
    import de from '../lang/de.json';

    addMessages('en', en);
    addMessages('de', de);
    locale.set('en');

    let languages = [
        {id: 1, text:"de"},
        {id: 2, text:"en"}
    ];
    let selected = languages[1];
    

    function changed() {
        locale.set(selected.text);
    }
</script>
    <div id="header">
        <h1>{$_('app.title')}</h1>
        <select bind:value={selected} on:change={changed}>
            {#each languages as language}
			<option value={language}>
				{language.text}
			</option>
		{/each}
        </select>
    </div>

    <div id="container">
        <div id="internal">
            <h3>{@html $_('app.top')}</h3>
        </div>
        <div id="internal">
            <h3>{$_('app.bottom')}</h3>
        </div>
    </div>
<style>
    #container {
        height: 100vh;
        width: 100vw;
        overflow: scroll;
        scroll-snap-type: y mandatory;
    }
    #internal {
        height: 100vh;
        display: flex;
        scroll-snap-align: start;
    }
</style>