import emailjs from '@emailjs/browser';

// EmailJS configuration
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const RECEIVER_EMAIL = import.meta.env.VITE_CONTACT_RECEIVER;

// Validate environment variables
const validateConfig = () => {
  if (!SERVICE_ID) {
    throw new Error('VITE_EMAILJS_SERVICE_ID is not defined in environment variables');
  }
  if (!TEMPLATE_ID) {
    throw new Error('VITE_EMAILJS_TEMPLATE_ID is not defined in environment variables');
  }
  if (!PUBLIC_KEY) {
    throw new Error('VITE_EMAILJS_PUBLIC_KEY is not defined in environment variables');
  }
  if (!RECEIVER_EMAIL) {
    throw new Error('VITE_CONTACT_RECEIVER is not defined in environment variables');
  }
};

// Initialize EmailJS
export const initializeEmailJS = () => {
  try {
    validateConfig();
    emailjs.init(PUBLIC_KEY);
    return true;
  } catch (error) {
    console.error('EmailJS initialization failed:', error);
    return false;
  }
};

// Send email using EmailJS
export const sendEmail = async (formData: {
  name: string;
  email: string;
  message: string;
}) => {
  try {
    validateConfig();
    
    console.log('Sending email with data:', {
      name: formData.name,
      email: formData.email,
      message: formData.message.substring(0, 50) + '...'
    });
    
    const templateParams = {
      from_name: formData.name.trim(),
      from_email: formData.email.trim(),
      message: formData.message.trim(),
      to_email: RECEIVER_EMAIL,
      reply_to: formData.email.trim(),
      subject: `Portfolio Contact: ${formData.name.trim()}`,
    };

    console.log('Template params:', templateParams);

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams
    );

    console.log('EmailJS response:', response);

    return {
      success: true,
      data: response,
      message: 'Email sent successfully!'
    };
  } catch (error) {
    console.error('Email sending failed:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to send email',
      message: 'Failed to send email. Please try again later.'
    };
  }
};

// Get configuration status
export const getEmailConfigStatus = () => {
  return {
    hasServiceId: !!SERVICE_ID,
    hasTemplateId: !!TEMPLATE_ID,
    hasPublicKey: !!PUBLIC_KEY,
    hasReceiverEmail: !!RECEIVER_EMAIL,
    isConfigured: !!(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY && RECEIVER_EMAIL)
  };
};
