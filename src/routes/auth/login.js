import * as api from '$lib/api.js';
import { respond } from './_respond';

export async function post({ request }) {
	const json = await request.json();
	const body = await api.post('login', {
		username: json.username,
		password: json.password
	});

	return respond(body);
}
