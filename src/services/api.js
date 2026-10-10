/**
 * API Service abstraction layer.
 * Ready for future integration with Node.js, Express, and PostgreSQL.
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || '';

/**
 * Submit Quote Request or General Contact Inquiry
 * @param {Object} data 
 * @returns {Promise<{success: boolean, message: string, data?: any}>}
 */
export async function submitQuoteRequest(data) {
  // If a live backend endpoint is configured:
  if (API_BASE_URL) {
    try {
      const response = await fetch(`${API_BASE_URL}/quotes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Server returned error: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API submission failed:', error);
      throw error;
    }
  }

  // Frontend-only stage: simulate realistic network latency and response
  await new Promise((resolve) => setTimeout(resolve, 800));

  return {
    success: true,
    message: 'Your quote request has been recorded in local test mode. When connected to the production server, our staffing desk will be notified instantly.',
    referenceId: `CM-${Math.floor(100000 + Math.random() * 900000)}`,
    submittedAt: new Date().toISOString(),
    payload: data,
  };
}
