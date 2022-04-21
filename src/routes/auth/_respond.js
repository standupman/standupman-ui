import { Buffer } from 'buffer';

export function respond(body) {
	if (body.errors) {
		return { status: 401, body };
	}
	const json = JSON.stringify(body.token);
	const cookie = Buffer.from(json).toString('base64');
	return {
		headers: {
			'set-cookie': `jwt=${cookie}; Path=/; HttpOnly`
		},
		body
	};
}
