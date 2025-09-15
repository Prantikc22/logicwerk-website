"use client";
import React, { useState, useEffect } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { X, Zap, Calendar, CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";

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

export default function StartSprintDialog({ 
  packName, 
  packPricing, 
  packKey, 
  packServices, 
  allowPackSelection = false, 
  triggerButtonClassName 
}: StartSprintDialogProps) {
  const [isMounted, setIsMounted] = useState(false);
  // Determine if we should ask user to choose a pack first (tile grid)
  const needsPackSelection = allowPackSelection && !packKey;
  const [selectedPackKey, setSelectedPackKey] = useState<string>(
    needsPackSelection ? '' : packKey || (packs.length > 0 ? packs[0].key : '')
  );
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(needsPackSelection ? 0 : 1);
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

  // Ensure component is hydrated before showing interactive elements
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Safely get selected pack
  const selectedPack = isMounted && packs.length > 0 
    ? (packs.find(p => p.key === selectedPackKey) || (needsPackSelection ? { key: '', title: 'Select a Pack', services: [] } : packs[0]))
    : { key: '', title: 'Loading...', services: [] };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, needsPackSelection ? 0 : 1));

  const resetForm = () => {
    // When pack isn't preselected, always restart at tile selection
    setCurrentStep(needsPackSelection ? 0 : 1);
    if (needsPackSelection) {
      setSelectedPackKey('');
    }
    setFormData({
      projectType: '', 
      currentStatus: '', 
      urgency: '', 
      budget: '', 
      name: '', 
      email: '', 
      company: '', 
      role: '', 
      phone: '', 
      schedule: '', 
      describeWork: '', 
      city: '', 
      country: ''
    });
  };

  const handleSubmit = async (flowType: 'final_price' | 'schedule_call') => {
    if (!isMounted) return;
    
    setIsLoading(true);
    
    try {
      const payload = {
        pack_name: packName || selectedPack.title,
        pack_key: packKey || selectedPackKey,
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
        flow_type: flowType,
        schedule_slot: flowType === 'schedule_call' ? 'cal.com' : '',
        submission_time: new Date().toISOString(),
      };

      await fetch('https://sheetdb.io/api/v1/t3vrj3qflp7pb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: [payload] })
      });

      if (flowType === 'schedule_call') {
        // Use a safer way to open external links
        const calLink = 'https://cal.com/logicwerk/30min';
        if (typeof window !== 'undefined') {
          window.open(calLink, '_blank', 'noopener,noreferrer');
        }
        setCurrentStep(100); // Schedule confirmation
      } else {
        setCurrentStep(99); // Final price confirmation
      }
    } catch (error) {
      console.error('Submission error:', error);
      // Handle error appropriately
    } finally {
      setIsLoading(false);
    }
  };

  const handleDialogClose = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      // Reset form when closing
      setTimeout(() => resetForm(), 200);
    }
  };

  const isStepValid = (step: number) => {
    switch(step) {
      case 0: return !!selectedPackKey; // Pack selection step
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

  // Show static button during hydration
  // Slim progress width (0-100) for 4 steps
  const progressWidth = Math.min(100, Math.max(0, ((currentStep - 1) / 3) * 100));

  if (!isMounted) {
    return (
      <button 
        className={triggerButtonClassName || "px-6 py-3 border-2 border-white text-white text-base font-semibold rounded-none bg-transparent hover:bg-white hover:text-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 shadow-lg"}
        style={{ minWidth: 120 }}
        disabled
      >
        Start Sprint
      </button>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleDialogClose}>
      <DialogTrigger asChild>
        <button 
          className={triggerButtonClassName || "px-6 py-3 border-2 border-white text-white text-base font-semibold rounded-none bg-transparent hover:bg-white hover:text-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 shadow-lg"} 
          style={{ minWidth: 120 }}
        >
          Start Sprint
        </button>
      </DialogTrigger>
      
      {isOpen && (
        <DialogContent className="max-w-2xl w-full sm:max-h-[calc(100vh-40px)] max-h-[calc(100dvh-24px)] flex flex-col overflow-visible rounded-2xl p-0 shadow-2xl">
          {/* Pack Selection Dropdown (Step 1 only) */}
          {!needsPackSelection && allowPackSelection && currentStep === 1 && packs.length > 0 && (
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
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 text-xl font-bold flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-2">
                <Zap size={22} className="inline-block text-yellow-300" />
                <span>Start Your {selectedPack.title} Sprint Challenge</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-[11px]">
                <span className="inline-flex items-center gap-1 bg-white/15 border border-white/30 rounded px-2 py-0.5">
                  <CheckCircle size={12} className="text-green-300" /> Pack: {selectedPack.title}
                </span>
                <span className="inline-flex items-center gap-1 bg-white/15 border border-white/30 rounded px-2 py-0.5">
                  <CheckCircle size={12} className="text-green-300" /> 50% Off • 7-Day Guarantee
                </span>
              </div>
            </div>
          </DialogTitle>
          
          <DialogDescription asChild>
            <span className="sr-only">Multi-step form to start your {selectedPack.title} sprint. Complete project, urgency, contact, and schedule steps to submit.</span>
          </DialogDescription>
          
          {/* Info strip moved into header to save space */}

          {/* Slim Progress Indicator */}
          <div className="px-4 pt-1 pb-2 bg-gray-50">
            <div className="h-1.5 w-full bg-gray-200 rounded">
              <div
                className="h-full bg-blue-600 rounded"
                style={{ width: `${progressWidth}%` }}
              />
            </div>
            <div className="hidden sm:flex justify-between text-[10px] mt-1 text-gray-600">
              <span>Project</span>
              <span>Details</span>
              <span>Contact</span>
              <span>Schedule</span>
            </div>
          </div>

          {/* Form Content */}
          <div className="p-4 flex-1 min-h-0 overflow-y-auto">
            {/* Step 0: Pack selection tiles (only when a pack isn't preselected) */}
            {currentStep === 0 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Choose a Pack to Begin</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {packs.map(p => (
                    <button
                      key={p.key}
                      type="button"
                      onClick={() => { setSelectedPackKey(p.key); setCurrentStep(1); }}
                      className={`text-left border rounded-lg p-4 hover:border-blue-500 transition-colors ${selectedPackKey === p.key ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
                    >
                      <div className="font-medium text-gray-900">{p.title}</div>
                      <div className="text-sm text-gray-600 mt-1 line-clamp-2">{p.summary}</div>
                      <div className="text-xs text-gray-500 mt-2">{p.pricing}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}
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
                    {packName || selectedPack.title} Investment Level:
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
                      className="px-8 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                      onClick={() => handleSubmit('final_price')}
                      disabled={isLoading}
                    >
                      {isLoading ? 'Processing...' : 'Get Final Price'}
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
                      className="px-8 py-3 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700 transition text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                      onClick={() => handleSubmit('schedule_call')}
                      disabled={isLoading}
                    >
                      {isLoading ? 'Processing...' : 'Schedule Sprint Call'}
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
                <p className="text-gray-700 text-center max-w-md">We'll send your final price and full project details to your email soon. Our team will reach out if we have any questions.</p>
              </div>
            )}
            
            {/* Step 100: Schedule Confirmation */}
            {currentStep === 100 && (
              <div className="flex flex-col items-center justify-center min-h-[300px]">
                <CheckCircle size={48} className="text-green-500 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Call Scheduled!</h3>
                <p className="text-gray-700 text-center max-w-md">Your sprint planning call is booked. You'll receive a confirmation and prep guide by email. We look forward to meeting you!</p>
              </div>
            )}
          </div>

          {/* Footer */}
          {currentStep < 4 && currentStep !== 99 && currentStep !== 100 && (
            <div className="px-4 py-3 bg-gray-50 border-t flex justify-between items-center">
              <div className="flex items-center gap-1.5 text-sm text-gray-600">
                <Zap size={14} className="text-yellow-500" />
                <span>Emergency projects: 24-hour response guarantee</span>
              </div>
              <div className="flex gap-3">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex items-center gap-2 px-3 py-1.5 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors text-sm"
                    disabled={isLoading}
                  >
                    <ArrowLeft size={14} />
                    Back
                  </button>
                )}
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!isStepValid(currentStep) || isLoading}
                  className="flex items-center gap-2 px-5 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors text-sm"
                >
                  {currentStep === 3 ? 'Start Sprint Challenge' : 'Next'}
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          )}
        </DialogContent>
      )}
    </Dialog>
  );
}