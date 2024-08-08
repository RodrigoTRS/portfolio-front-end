import { config } from "@/config";

export async function handleDownload() {
    try {
        const response = await fetch(config.pdfUrl);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = "resume.pdf";
        link.click();
        
        window.URL.revokeObjectURL(url);
      } catch (error) {
        console.error('Error downloading the PDF:', error);
      }
}