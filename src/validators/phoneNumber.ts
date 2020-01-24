export default function validatePhoneNumber(number: string): any {
	try {
		const string = number.replace(/\D/g, '');

		return string.length >= 11 && string.length <= 16;
	} catch(err) {
		throw new Error('Error in validate phonenumber');
	}
}