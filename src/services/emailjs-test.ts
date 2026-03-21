// Test EmailJS Configuration
// This script can be run in the browser console to test EmailJS setup

import { initializeEmailJS, sendEmail, getEmailConfigStatus } from './emailjs';

// Test configuration
export const testEmailJSConfig = () => {
  console.log('=== EmailJS Configuration Test ===');
  
  // Check environment variables
  const configStatus = getEmailConfigStatus();
  console.log('Configuration Status:', configStatus);
  
  if (!configStatus.isConfigured) {
    console.error('❌ EmailJS not properly configured');
    return false;
  }
  
  // Test initialization
  const initialized = initializeEmailJS();
  console.log('Initialization:', initialized ? '✅ Success' : '❌ Failed');
  
  return initialized;
};

// Test email sending with sample data
export const testEmailSending = async () => {
  console.log('=== EmailJS Sending Test ===');
  
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    message: 'This is a test message from the portfolio contact form.'
  };
  
  try {
    const result = await sendEmail(testData);
    console.log('Sending Result:', result);
    
    if (result.success) {
      console.log('✅ Email sent successfully!');
      console.log('Check your inbox at vishal7.tech@gmail.com');
    } else {
      console.error('❌ Email sending failed:', result.message);
    }
    
    return result.success;
  } catch (error) {
    console.error('❌ Test failed with error:', error);
    return false;
  }
};

// Run full test suite
export const runFullTest = async () => {
  console.log('🧪 Starting EmailJS Full Test Suite...');
  
  const configOk = testEmailJSConfig();
  if (!configOk) {
    console.error('❌ Configuration test failed. Stopping tests.');
    return false;
  }
  
  console.log('⏳ Testing email sending...');
  const sendOk = await testEmailSending();
  
  console.log('=== Test Results ===');
  console.log('Configuration:', configOk ? '✅' : '❌');
  console.log('Email Sending:', sendOk ? '✅' : '❌');
  console.log('Overall:', configOk && sendOk ? '✅ All tests passed!' : '❌ Some tests failed');
  
  return configOk && sendOk;
};

// Export for use in browser console
if (typeof window !== 'undefined') {
  (window as any).testEmailJS = {
    testConfig: testEmailJSConfig,
    testSending: testEmailSending,
    runFullTest: runFullTest
  };
}
