import * as api from '$lib/api.js';
import { respond } from './_respond';

export async function post({ request }) {
    const json = await request.json();
	const body = await api.post('users/register', {
		user: {
			email: json.email,
			password: json.password,
			full_name: json.full_name,
			username: json.userName
		}
	});

	return respond(body);
}
