import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const BuyMeACoffeeModal = ({ isOpen, onClose, paymentOptions }) => {
  const { toast } = useToast();
  const [copiedStates, setCopiedStates] = React.useState({});

  const handleCopy = (textToCopy, fieldId) => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopiedStates(prev => ({ ...prev, [fieldId]: true }));
      toast({
        title: "Copied to clipboard!",
        description: `${textToCopy} copied.`,
        duration: 2000,
        className: "bg-green-600 border-none text-white",
      });
      setTimeout(() => setCopiedStates(prev => ({ ...prev, [fieldId]: false })), 2000);
    }).catch(err => {
      console.error("Failed to copy: ", err);
      toast({
        title: "Copy Failed",
        description: "Could not copy to clipboard.",
        variant: "destructive",
        duration: 2000,
      });
    });
  };

  const paymentItems = [
    { id: "esewa", label: "eSewa ID", value: paymentOptions.esewa, icon: "src/assets/img/esewa-logo.png" },
    { id: "khalti", label: "Khalti ID", value: paymentOptions.khalti, icon: "src/assets/img/khalti-logo.png" },
    { id: "bank", label: `Bank (${paymentOptions.bank.name})`, value: paymentOptions.bank.acc, icon: "src/assets/img/bank-logo.png" },
  ];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 rdc-dialog-overlay"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="glass-card p-6 md:p-8 rounded-xl shadow-2xl w-full max-w-md relative rdc-dialog-content"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-3 right-3 text-gray-400 hover:text-white hover:bg-white/10"
              onClick={onClose}
            >
              <X size={20} />
            </Button>

            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-unbounded font-bold text-gradient mb-2">
                Buy Me a Coffee!
              </h2>
              <p className="text-gray-300 text-sm">
                If you like my work, consider supporting me. Thank you! 🙏
              </p>
            </div>

            <div className="space-y-4">
              {paymentItems.map((item) => (
                <div key={item.id} className="bg-slate-800/70 p-4 rounded-lg border border-slate-700/50">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <img src={item.icon} alt={`${item.label} logo`} className="h-5 w-auto" />
                        <p className="text-sm font-medium text-gray-300">{item.label}:</p>
                      </div>
                      <p className="text-lg font-semibold text-purple-300 break-all">{item.value}</p>
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      className="bg-slate-700 hover:bg-slate-600 border-slate-600 text-gray-300 hover:text-white w-9 h-9"
                      onClick={() => handleCopy(item.value, item.id)}
                      aria-label={`Copy ${item.label}`}
                    >
                      {copiedStates[item.id] ? <Check size={18} className="text-green-400" /> : <Copy size={16} />}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <p className="text-xs text-gray-500 mt-6 text-center">
              Your support helps me dedicate more time to creating and sharing projects.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BuyMeACoffeeModal;