/**
 * Form validation helper for Quote and Contact inquiries
 */

export function validateQuoteForm(formData) {
  const errors = {};

  // Full Name
  if (!formData.fullName || !formData.fullName.trim()) {
    errors.fullName = 'Full Name is required.';
  } else if (formData.fullName.trim().length < 2) {
    errors.fullName = 'Full Name must be at least 2 characters.';
  }

  // Company Name
  if (!formData.companyName || !formData.companyName.trim()) {
    errors.companyName = 'Company / Enterprise name is required.';
  }

  // Email Address
  if (!formData.email || !formData.email.trim()) {
    errors.email = 'Email address is required.';
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address (e.g. name@company.com).';
    }
  }

  // Phone Number
  if (!formData.phone || !formData.phone.trim()) {
    errors.phone = 'Phone / Contact number is required.';
  } else {
    // Basic phone validation: digits, spaces, plus, hyphens, min 8 digits
    const cleaned = formData.phone.replace(/[\s\-\(\)\+]/g, '');
    if (!/^\d{8,15}$/.test(cleaned)) {
      errors.phone = 'Please enter a valid phone number (8-15 digits).';
    }
  }

  // Service Required
  if (!formData.serviceRequired) {
    errors.serviceRequired = 'Please select a workforce service category.';
  }

  // Number of Workers Required
  if (!formData.workersRequired) {
    errors.workersRequired = 'Please specify the estimated number of workers.';
  } else {
    const num = Number(formData.workersRequired);
    if (isNaN(num) || num < 1) {
      errors.workersRequired = 'Number of workers must be at least 1.';
    }
  }

  // Message / Project Specifications
  if (!formData.message || !formData.message.trim()) {
    errors.message = 'Please provide details about project requirements and shift timelines.';
  } else if (formData.message.trim().length < 10) {
    errors.message = 'Message should provide at least 10 characters of detail.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
