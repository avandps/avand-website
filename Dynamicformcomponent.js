import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    loanType: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="bg-[#123836] p-8 rounded-2xl shadow-xl border border-[#c9b07a]/20">
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: -20 }}
          >
            <h3 className="text-[#f3e3b0] text-2xl font-bold mb-6">How can we help you today?</h3>
            <div className="grid grid-cols-1 gap-4">
              {['First Home Buyer', 'Refinancing', 'Investment Loan', 'Construction'].map((type) => (
                <button
                  key={type}
                  onClick={() => { setFormData({...formData, loanType: type}); nextStep(); }}
                  className="p-4 rounded-xl border border-[#c9b07a]/30 text-[#f4ecd8] hover:bg-[#c9b07a] hover:text-[#082524] transition-all text-left font-semibold"
                >
                  {type}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }}
          >
            <h3 className="text-[#f3e3b0] text-2xl font-bold mb-6">Contact Details</h3>
            <div className="space-y-4">
              <input 
                type="text" 
                placeholder="Full Name" 
                className="w-full p-4 rounded-lg bg-[#0b2625] text-white border border-[#c9b07a]/20 focus:outline-none focus:border-[#c9b07a]"
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full p-4 rounded-lg bg-[#0b2625] text-white border border-[#c9b07a]/20 focus:outline-none focus:border-[#c9b07a]"
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              <div className="flex gap-4 mt-6">
                <button onClick={prevStep} className="text-[#c9b07a] underline">Back</button>
                <button 
                  onClick={nextStep}
                  className="bg-gradient-to-r from-[#c9b07a] to-[#f0e1b3] text-[#082524] px-8 py-3 rounded-full font-bold"
                >
                  Final Step
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
            <h3 className="text-[#f3e3b0] text-2xl font-bold mb-4">Almost Done!</h3>
            <p className="text-[#f4ecd8]/80 mb-6">Waruna will review your {formData.loanType} inquiry and call you back.</p>
            <textarea 
              placeholder="Any specific details?" 
              className="w-full p-4 rounded-lg bg-[#0b2625] text-white border border-[#c9b07a]/20 mb-4"
              rows="4"
            />
            <button className="w-full bg-[#c9b07a] text-[#082524] py-4 rounded-xl font-bold text-lg uppercase tracking-wider">
              Request Call Back
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};