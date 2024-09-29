Hooks.once('init', () => { 
	if(typeof Babele !== 'undefined') { 
		Babele.get().register({
			module: 'blades-in-the-dark-fvtt-uk',
			lang: 'uk',
			dir: 'compendium'
		}); 
	}
});
