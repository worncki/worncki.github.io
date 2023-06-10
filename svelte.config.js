import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {

		dapter: adapter(),

                paths: {
                    base: process.env.NODE_ENV === 'production' ? '/worncki.github.io' : '',
                  }
	}
};

export default config;
