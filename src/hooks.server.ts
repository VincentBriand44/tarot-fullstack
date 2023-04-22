import { dev } from '$app/environment';

export async function handleError({ error }) {
	const newError = error as Error;
	const customMessage = 'Error'; //TODO: Add custom message
	return dev ? { message: newError.message } : { message: customMessage };
}
