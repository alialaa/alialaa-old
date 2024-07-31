import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';

export const prerender = false;

export const actions = {
	default: async ({ request, fetch }) => {
		const data = await request.formData();
		const email = data.get('email');
		const name = data.get('name') || '';

		if (!email) {
			return fail(400, { newsletterError: 'Email must be provided.' });
			// redirect(
			// 	303,
			// 	redirectTo
			// 		? `${redirectTo}?error=Email must be provided.`
			// 		: `/?error=Email must be provided.`
			// );
		}

		const info: { [key: string]: string } = {
			name: name as string,
			email: email as string
		};

		const formBody = [];
		for (const property in info) {
			const encodedKey = encodeURIComponent(property);
			const encodedValue = encodeURIComponent(info[property]);
			formBody.push(encodedKey + '=' + encodedValue);
		}
		const formBodyString = formBody.join('&');

		const res = await fetch('https://alialaa.net/newsletter/signup.php', {
			method: 'POST',
			body: formBodyString,
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
			}
		});
		const resText = await res.text();

		if (res.status === 200) {
			return { newsletterSuccess: resText };
			// redirect(303, redirectTo ? `${redirectTo}?success=${resText}` : `/?success=${resText}`);
		} else {
			const message = resText || 'An error has occured! Please try again later.';
			return fail(res.status, { newsletterError: message });
			// redirect(303, redirectTo ? `${redirectTo}?error=${message}` : `/?success=${message}`);
		}
	}
} satisfies Actions;
