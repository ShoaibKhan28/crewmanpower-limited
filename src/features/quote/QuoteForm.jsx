import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';
import { validateQuoteForm } from '../../utils/validation';
import { submitQuoteRequest } from '../../services/api';
import Button from '../../components/common/Button';

export default function QuoteForm({ initialService = '', compact = false }) {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    serviceRequired: initialService || '',
    workersRequired: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState(null);

  const serviceOptions = [
    'Healthcare Staffing',
    'Security Services',
    'Housekeeping Staffing',
    'Corporate Staffing',
    'Facility Management',
    'Construction Workforce',
    'Manufacturing & Industrial Labor',
    'Logistics & Warehousing Crew',
    'Other Custom Requirement',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error on edit if field was touched
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const validation = validateQuoteForm(formData);
    if (validation.errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: validation.errors[name] }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mark all as touched
    const allTouched = Object.keys(formData).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setTouched(allTouched);

    const validation = validateQuoteForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await submitQuoteRequest(formData);
      setSubmitResult({
        success: true,
        referenceId: response.referenceId,
        message: response.message,
      });
    } catch (err) {
      setSubmitResult({
        success: false,
        message: err.message || 'Submission failed. Please verify your connection.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      serviceRequired: '',
      workersRequired: '',
      message: '',
    });
    setErrors({});
    setTouched({});
    setSubmitResult(null);
  };

  if (submitResult?.success) {
    return (
      <div className="bg-white rounded-2xl p-8 sm:p-10 border border-emerald-100 shadow-lg text-center space-y-5 animate-in fade-in duration-300">
        <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-brand-navy">Quote Request Received!</h3>
          <p className="text-sm text-brand-muted max-w-md mx-auto">
            Reference Number: <span className="font-mono font-bold text-brand-primary">{submitResult.referenceId}</span>
          </p>
          <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl text-xs text-brand-navy text-left max-w-md mx-auto space-y-1 mt-4">
            <p className="font-semibold text-brand-primary">Frontend Verification Confirmation:</p>
            <p>{submitResult.message}</p>
            <p className="text-[11px] text-slate-500 italic pt-1">
              {/* * Note: Simulated locally for demonstration. No email was sent to live external servers. */}
            </p>
          </div>
        </div>

        <div className="pt-2">
          <Button
            onClick={handleReset}
            variant="navy"
            size="md"
            customIcon={RefreshCw}
          >
            Submit Another Request
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-100 shadow-[0_4px_30px_-5px_rgba(7,27,54,0.08)] space-y-6"
    >
      <div className="border-b border-slate-100 pb-4">
        <h3 className="text-xl sm:text-2xl font-bold text-brand-navy">
          Request Workforce Deployment
        </h3>
        <p className="text-xs sm:text-sm text-brand-muted mt-1">
          Tell us about your headcount needs, timelines, and specialized job criteria.
        </p>
      </div>

      {submitResult && !submitResult.success && (
        <div
          role="alert"
          className="p-3.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-center gap-2"
        >
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{submitResult.message}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
            Full Name <span className="text-brand-orange">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            value={formData.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="e.g. Ramesh Kumar"
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-brand-body placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
              errors.fullName && touched.fullName
                ? 'border-red-400 focus:ring-red-200 bg-red-50/20'
                : 'border-slate-200 focus:border-brand-primary focus:ring-blue-100 bg-slate-50/50'
            }`}
          />
          {errors.fullName && touched.fullName && (
            <p role="alert" className="mt-1 text-xs text-red-600">
              {errors.fullName}
            </p>
          )}
        </div>

        {/* Company Name */}
        <div>
          <label htmlFor="companyName" className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
            Company Name <span className="text-brand-orange">*</span>
          </label>
          <input
            id="companyName"
            name="companyName"
            type="text"
            required
            value={formData.companyName}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="e.g. InfraTech Constructions Ltd"
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-brand-body placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
              errors.companyName && touched.companyName
                ? 'border-red-400 focus:ring-red-200 bg-red-50/20'
                : 'border-slate-200 focus:border-brand-primary focus:ring-blue-100 bg-slate-50/50'
            }`}
          />
          {errors.companyName && touched.companyName && (
            <p role="alert" className="mt-1 text-xs text-red-600">
              {errors.companyName}
            </p>
          )}
        </div>

        {/* Email Address */}
        <div>
          <label htmlFor="email" className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
            Email Address <span className="text-brand-orange">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="ramesh@company.com"
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-brand-body placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
              errors.email && touched.email
                ? 'border-red-400 focus:ring-red-200 bg-red-50/20'
                : 'border-slate-200 focus:border-brand-primary focus:ring-blue-100 bg-slate-50/50'
            }`}
          />
          {errors.email && touched.email && (
            <p role="alert" className="mt-1 text-xs text-red-600">
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phone" className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
            Phone Number <span className="text-brand-orange">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="+91 98765 43210"
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-brand-body placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
              errors.phone && touched.phone
                ? 'border-red-400 focus:ring-red-200 bg-red-50/20'
                : 'border-slate-200 focus:border-brand-primary focus:ring-blue-100 bg-slate-50/50'
            }`}
          />
          {errors.phone && touched.phone && (
            <p role="alert" className="mt-1 text-xs text-red-600">
              {errors.phone}
            </p>
          )}
        </div>

        {/* Service Required */}
        <div>
          <label htmlFor="serviceRequired" className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
            Service Required <span className="text-brand-orange">*</span>
          </label>
          <select
            id="serviceRequired"
            name="serviceRequired"
            required
            value={formData.serviceRequired}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-brand-body focus:outline-none focus:ring-2 transition-all ${
              errors.serviceRequired && touched.serviceRequired
                ? 'border-red-400 focus:ring-red-200 bg-red-50/20'
                : 'border-slate-200 focus:border-brand-primary focus:ring-blue-100 bg-slate-50/50'
            }`}
          >
            <option value="">Select workforce solution...</option>
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.serviceRequired && touched.serviceRequired && (
            <p role="alert" className="mt-1 text-xs text-red-600">
              {errors.serviceRequired}
            </p>
          )}
        </div>

        {/* Number of Workers Required */}
        <div>
          <label htmlFor="workersRequired" className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
            Number of Workers Required <span className="text-brand-orange">*</span>
          </label>
          <input
            id="workersRequired"
            name="workersRequired"
            type="number"
            min="1"
            required
            value={formData.workersRequired}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="e.g. 25"
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-brand-body placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
              errors.workersRequired && touched.workersRequired
                ? 'border-red-400 focus:ring-red-200 bg-red-50/20'
                : 'border-slate-200 focus:border-brand-primary focus:ring-blue-100 bg-slate-50/50'
            }`}
          />
          {errors.workersRequired && touched.workersRequired && (
            <p role="alert" className="mt-1 text-xs text-red-600">
              {errors.workersRequired}
            </p>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
          Project Details & Shift Requirements <span className="text-brand-orange">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={compact ? 3 : 4}
          required
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Briefly describe job duties, site location, target start date, and special certifications required..."
          className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-brand-body placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
            errors.message && touched.message
              ? 'border-red-400 focus:ring-red-200 bg-red-50/20'
              : 'border-slate-200 focus:border-brand-primary focus:ring-blue-100 bg-slate-50/50'
          }`}
        />
        {errors.message && touched.message && (
          <p role="alert" className="mt-1 text-xs text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          loading={isSubmitting}
          icon={!isSubmitting}
          className="w-full sm:w-auto px-8"
        >
          {isSubmitting ? 'Verifying & Submitting...' : 'Submit Quote Request'}
        </Button>
        <p className="text-[11px] text-slate-400 mt-3">
          By submitting this request, you agree to our standard manpower deployment terms. Information is handled confidentially.
        </p>
      </div>
    </form>
  );
}
