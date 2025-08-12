"use client";
import React, { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { X, Zap, Calendar, CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";
import Cal, { getCalApi } from "@calcom/embed-react";

import { packs } from "@/data/packs";

interface StartSprintDialogProps {
  packName?: string;
  packPricing?: string;
  packKey?: string;
  packServices?: string[];
  allowPackSelection?: boolean;
  triggerButtonClassName?: string;
}

const defaultBudgetOptions = [
  { value: 'starter', label: 'Starter Pack', price: '₹82,000 ($999)', desc: 'Perfect for MVP' },
  { value: 'pro', label: 'Pro Pack', price: '₹1,50,000 ($1,799)', desc: 'Full-featured solution' },
  { value: 'enterprise', label: 'Enterprise Pack', price: '₹2,50,000 ($2,999)', desc: 'Enterprise-grade' },
  { value: 'custom', label: 'Custom Scope', price: "Let's discuss", desc: 'Tailored to your needs' }
];


export default function StartSprintDialog({ packName, packPricing, packKey, packServices, allowPackSelection = false, triggerButtonClassName }: StartSprintDialogProps) {
  // If pack selection is allowed, manage selected pack state
  const [selectedPackKey, setSelectedPackKey] = useState<string>(packKey || packs[0].key);
  const selectedPack = packs.find(p => p.key === selectedPackKey) || packs[0];
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    projectType: '',
    currentStatus: '',
    urgency: '',
    budget: '',
    name: '',
    email: '',
    company: '',
    role: '',
    phone: '',
    city: '',
    country: '',
    schedule: '',
    describeWork: ''
  });

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = () => {
    // TODO: Replace with real submission logic
    alert('Sprint Challenge submitted! Check your email for next steps.');
    setIsOpen(false);
    setCurrentStep(1);
    setFormData({
      projectType: '', currentStatus: '', urgency: '', budget: '', name: '', email: '', company: '', role: '', phone: '', schedule: '', describeWork: '', city: '', country: ''
    });
  };

  const isStepValid = (step: number) => {
    switch(step) {
      case 1: return formData.projectType && formData.currentStatus;
      case 2: return formData.urgency && formData.budget;
      case 3: return formData.name && formData.email && formData.company && formData.role && formData.phone;
      default: return true;
    }
  };

  // Use packServices or fallback
  const projectTypes = selectedPack.services && selectedPack.services.length > 0 ? selectedPack.services : [
    'Web Application', 'Mobile App (iOS/Android)', 'API Development', 'Full-Stack Platform', 'Legacy Modernization', 'Other'
  ];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className={triggerButtonClassName || "px-6 py-3 border-2 border-white text-white text-base font-semibold rounded-none bg-transparent hover:bg-white hover:text-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 shadow-lg"} style={{ minWidth: 120 }}>
          Start Sprint
        </button>
      </DialogTrigger>
      {isOpen && (
        <DialogContent className="max-w-2xl w-full sm:max-h-[calc(100vh-40px)] max-h-[calc(100dvh-24px)] flex flex-col overflow-visible rounded-2xl p-0 shadow-2xl">
          {/* Pack Selection Dropdown (Step 1 only) */}
          {allowPackSelection && currentStep === 1 && (
            <div className="px-6 pt-6">
              <label htmlFor="pack-select" className="block text-sm font-medium text-gray-700 mb-1">Choose a Pack:</label>
              <select
                id="pack-select"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                value={selectedPackKey}
                onChange={e => setSelectedPackKey(e.target.value)}
              >
                {packs.map(pack => (
                  <option key={pack.key} value={pack.key}>{pack.title}</option>
                ))}
              </select>
            </div>
          )}
          {isLoading && (
            <div className="absolute top-0 left-0 w-full h-1 z-50">
              <div className="h-1 w-full bg-gradient-to-r from-blue-400 via-blue-600 to-purple-500 animate-pulse rounded-t-2xl" style={{ animationDuration: '1s' }} />
            </div>
          )}
          <DialogTitle asChild>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 relative text-2xl font-bold flex items-center gap-3">
              <Zap size={28} className="inline-block mr-2 text-yellow-300" />
              Start Your {selectedPack.title} Sprint Challenge
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
                aria-label="Close"
              >
                <X size={24} />
              </button>
            </div>
          </DialogTitle>
          <DialogDescription asChild>
            <span className="sr-only">Multi-step form to start your {selectedPack.title} sprint. Complete project, urgency, contact, and schedule steps to submit.</span>
          </DialogDescription>
          <div className="flex gap-4 bg-gray-50 px-6 py-2 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-300" />
              <span>Pack: {selectedPack.title} Selected</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-300" />
              <span>First Sprint: 50% Off</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-300" />
              <span>7-Day Guarantee</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="px-6 py-4 bg-gray-50">
            <div className="flex items-center justify-between">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    currentStep >= step 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {step}
                  </div>
                  {step < 4 && (
                    <div className={`w-16 h-1 mx-2 ${
                      currentStep > step ? 'bg-blue-600' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-xs mt-2 text-gray-600">
              <span>Project</span>
              <span>Urgency</span>
              <span>Contact</span>
              <span>Schedule</span>
            </div>
          </div>

          {/* Form Content */}
          <div className="p-6 flex-1 min-h-0 overflow-y-auto">
            {/* Step 1: Project Details */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900">What needs building?</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Type of software project:
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {projectTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => updateFormData('projectType', type)}
                        className={`p-3 text-left border rounded-lg transition-all ${
                          formData.projectType === type
                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Current development status:
                  </label>
                  <div className="space-y-2">
                    {[
                      'Starting from scratch',
                      'Have designs/wireframes',
                      'Partially built (needs completion)',
                      'Existing app needs features',
                      'Legacy system modernization'
                    ].map((status) => (
                      <label key={status} className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="currentStatus"
                          value={status}
                          checked={formData.currentStatus === status}
                          onChange={(e) => updateFormData('currentStatus', e.target.value)}
                          className="mr-3 text-blue-600"
                        />
                        <span className="text-sm">{status}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {/* Step 2: Urgency & Budget */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900">Timeline & Investment</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    How urgent is this project?
                  </label>
                  <div className="space-y-3">
                    {[
                      { value: 'emergency', label: 'Emergency (need demo in 7 days)', color: 'red' },
                      { value: 'high', label: 'High Priority (2-4 weeks to launch)', color: 'orange' },
                      { value: 'planned', label: 'Planned Development (1-3 months)', color: 'blue' }
                    ].map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => updateFormData('urgency', option.value)}
                        className={`w-full p-4 text-left border rounded-lg transition-all ${
                          formData.urgency === option.value
                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        <div className="font-medium">
                          {option.label}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    {packName} Investment Level:
                  </label>
                  <div className="grid grid-cols-1 gap-3">
                    {defaultBudgetOptions.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => updateFormData('budget', option.value)}
                        className={`p-4 text-left border rounded-lg transition-all ${
                          formData.budget === option.value
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="font-medium text-gray-900">{option.label}</div>
                            <div className="text-sm text-gray-500">{option.desc}</div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-blue-600">{option.price}</div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                  {/* Describe your requirement field */}
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-3" htmlFor="describeWork">
                      Describe your requirement
                    </label>
                    <textarea
                      id="describeWork"
                      name="describeWork"
                      rows={4}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Briefly describe what you want to build, key features, goals, etc."
                      value={formData.describeWork || ''}
                      onChange={e => updateFormData('describeWork', e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}
            {/* Step 3: Contact Info */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900">Let's connect</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => updateFormData('name', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Role *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.role}
                      onChange={(e) => updateFormData('role', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="CTO, Founder, etc."
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      value={formData.city || ''}
                      onChange={(e) => updateFormData('city', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="City"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Country
                    </label>
                    <input
                      type="text"
                      value={formData.country || ''}
                      onChange={(e) => updateFormData('country', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Country"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => updateFormData('company', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => updateFormData('phone', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

              </div>
            )}
            {/* Step 4: Schedule (Date & Time Picker) */}
            {currentStep === 4 && (
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">How would you like to proceed?</h3>
                <div className="flex flex-col gap-8">
                  {/* Get Final Price Card */}
                  <div className="rounded-2xl border border-blue-200 bg-white p-8 flex flex-col items-center shadow-md">
                    <div className="bg-blue-50 rounded-full p-4 mb-4">
                      <Zap className="w-10 h-10 text-blue-500" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Get Final Price</h4>
                    <p className="text-gray-600 mb-6 text-center">Receive a detailed quote with exact pricing and project timeline via email.</p>
                    <button
                      className="px-8 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition text-lg"
                      onClick={async () => {
                        setIsLoading(true);
                        const payload = {
                          pack_name: packName,
                          pack_key: packKey,
                          project_type: formData.projectType,
                          current_status: formData.currentStatus,
                          urgency: formData.urgency,
                          budget: formData.budget,
                          describeWork: formData.describeWork || '',
                          name: formData.name,
                          email: formData.email,
                          company: formData.company,
                          role: formData.role,
                          phone: formData.phone,
                          city: formData.city || '',
                          country: formData.country || '',
                          flow_type: 'final_price',
                          schedule_slot: '',
                          submission_time: new Date().toISOString(),
                        };
                        await fetch('https://sheetdb.io/api/v1/t3vrj3qflp7pb', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({ data: [payload] })
                        });
                        setCurrentStep(99); // Show confirmation
                        setIsLoading(false);
                      }}
                    >
                      Get Final Price
                    </button>
                  </div>
                  {/* Schedule Sprint Call Card */}
                  <div className="rounded-2xl border border-purple-200 bg-white p-8 flex flex-col items-center shadow-md">
                    <div className="bg-purple-50 rounded-full p-4 mb-4">
                      <Calendar className="w-10 h-10 text-purple-500" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Schedule Sprint Call</h4>
                    <p className="text-gray-600 mb-6 text-center">Book a 30-minute call to discuss your project in detail with our team.</p>
                    <button
                      className="px-8 py-3 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700 transition text-lg"
                      onClick={async () => {
                        setIsLoading(true);
                        const payload = {
                          pack_name: packName,
                          pack_key: packKey,
                          project_type: formData.projectType,
                          current_status: formData.currentStatus,
                          urgency: formData.urgency,
                          budget: formData.budget,
                          describeWork: formData.describeWork || '',
                          name: formData.name,
                          email: formData.email,
                          company: formData.company,
                          role: formData.role,
                          phone: formData.phone,
                          city: formData.city || '',
                          country: formData.country || '',
                          flow_type: 'schedule_call',
                          schedule_slot: 'cal.com',
                          submission_time: new Date().toISOString(),
                        };
                        await fetch('https://sheetdb.io/api/v1/t3vrj3qflp7pb', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({ data: [payload] })
                        });
                        window.open('https://cal.com/logicwerk/30min', '_blank', 'noopener,noreferrer');
                        setCurrentStep(99); // Show confirmation
                        setIsLoading(false);
                      }}
                    >
                      Schedule Sprint Call
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Step 99: Final Price Confirmation */}
            {currentStep === 99 && (
              <div className="flex flex-col items-center justify-center min-h-[300px]">
                <CheckCircle size={48} className="text-green-500 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank you!</h3>
                <p className="text-gray-700 text-center max-w-md">We’ll send your final price and full project details to your email soon. Our team will reach out if we have any questions.</p>
              </div>
            )}
            {/* Step 100: Schedule Confirmation */}
            {currentStep === 100 && (
              <div className="flex flex-col items-center justify-center min-h-[300px]">
                <CheckCircle size={48} className="text-green-500 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Call Scheduled!</h3>
                <p className="text-gray-700 text-center max-w-md">Your sprint planning call is booked. You’ll receive a confirmation and prep guide by email. We look forward to meeting you!</p>
              </div>
            )}

          </div>

          {/* Footer */}
          {currentStep < 4 && (
            <div className="p-6 bg-gray-50 border-t flex justify-between items-center">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Zap size={16} className="text-yellow-500" />
                <span>Emergency projects: 24-hour response guarantee</span>
              </div>
              <div className="flex gap-3">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex items-center gap-2 px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <ArrowLeft size={16} />
                    Back
                  </button>
                )}
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!isStepValid(currentStep)}
                  className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                >
                  {currentStep === 3 ? 'Start Sprint Challenge' : 'Next'}
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}
        </DialogContent>
      )}
    </Dialog>
  );
}
