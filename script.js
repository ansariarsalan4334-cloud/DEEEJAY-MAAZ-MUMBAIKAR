// WhatsApp Booking Functionality Script

// Function to create a WhatsApp booking link
function createWhatsAppBookingLink(phoneNumber, message) {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

// Example usage
const phoneNumber = '1234567890'; // Replace with actual phone number
const message = 'I would like to book an appointment.';
const bookingLink = createWhatsAppBookingLink(phoneNumber, message);
console.log(bookingLink);