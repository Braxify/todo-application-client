import { useCallback } from 'react';

// Toastify
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useToast = () => {
  return useCallback((text, type) => {
    if (text && type) {
      toast[type](text);
    }
  }, []);
};

export default useToast;
