import { jsPDF } from 'jspdf';
import { playClickSound } from './audio';

export const downloadResumePdf = () => {
  playClickSound();

  // Primary method: Direct anchor trigger to the pre-generated PDF asset in /public
  const link = document.createElement('a');
  link.href = '/Shem_Andre_Gadot_Resume.pdf';
  link.download = 'Shem_Andre_Gadot_Resume.pdf';
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
