export default function validateEmail(email: string) {
	try {
		const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	
		return regex.test(String(email).toLowerCase());
	} catch(err) {
		throw new Error('Error in validate email');
	}
}
//https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
//thanks