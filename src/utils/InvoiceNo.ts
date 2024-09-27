interface InvoiceData {
    financialYear: string;
    invoiceCount: number;
  }
  
  function getFinancialYear(): string {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1; 
  
    if (currentMonth >= 4) {
      return `${currentYear}-${(currentYear + 1) % 100}`;
    } else {
      return `${currentYear - 1}-${currentYear % 100}`;
    }
  }
  
  function generateInvoiceNumber(invoiceData: InvoiceData): string {
    const currentFinancialYear = getFinancialYear();
  
    if (invoiceData.financialYear !== currentFinancialYear) {
      invoiceData.financialYear = currentFinancialYear;
      invoiceData.invoiceCount = 0;
    }
  
    invoiceData.invoiceCount += 1;
  
    const formattedInvoiceCount = invoiceData.invoiceCount.toString().padStart(3, '0');
  
    return `${formattedInvoiceCount}/${currentFinancialYear}`;
  }
  
  function createNewInvoice(invoiceData: InvoiceData): string {
    const newInvoiceNumber = generateInvoiceNumber(invoiceData);
  
    return newInvoiceNumber;
  }
  
  // Simulated data from the database
  let invoiceData: InvoiceData = {
    financialYear: '2023-24', // Assume this is stored in the database
    invoiceCount: 55,         // Current count of invoices for this financial year
  };
  
  // Example usage
  const newInvoiceNumber = createNewInvoice(invoiceData);
  console.log('Generated Invoice Number:', newInvoiceNumber);
  
  