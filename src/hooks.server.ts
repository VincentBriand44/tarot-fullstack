import { dev } from '$app/environment';

export async function handleError({ error }) {
	const newError = error as Error;
	console.error('🚀 ~ file: hooks.server.ts:5 ~ handleError ~ newError:', newError);
	const customMessage = 'Error'; //TODO: Add custom message
	return dev ? { message: newError.message } : { message: customMessage };
}
