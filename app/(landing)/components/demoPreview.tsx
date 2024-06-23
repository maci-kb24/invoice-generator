import { PreviewDetails } from "@/app/component/form/previewDetails";

const DemoPreview = () => (
  <div className="mx-auto w-full flex justify-center items-center">
    <PreviewDetails
      companyDetails={defaultValue.companyDetails}
      invoiceDetails={defaultValue.invoiceDetails}
      invoiceTerms={defaultValue.invoiceTerms}
      paymentDetails={defaultValue.paymentDetails}
      yourDetails={defaultValue.yourDetails}
    />
  </div>
);

const defaultValue = {
  companyDetails: {
    companyName: "Amazon, Inc.",
    companyAddress: "410 Terry Ave N",
    companyCity: "Seattle",
    companyState: "WA",
    companyCountry: "USA",
    companyLogo: "/android-chrome-192x192.png",
    companyTaxId: "",
    companyZip: "94043",
    email: "support@amazon.com",
  },
  yourDetails: {
    yourName: "John Doe",
    yourAddress: "7917B Lyme Ave.",
    yourCity: "New York",
    yourState: "New York",
    yourCountry: "USA",
    yourLogo: "/pranav.png",
    yourEmail: "johndoe@gmail.com",
    yourTaxId: "",
    yourZip: "10464",
  },
  paymentDetails: {
    bankName: "BOA",
    accountNumber: "1234567890",
    accountName: "John Doe",
    routingCode: "123456",
    swiftCode: "AXISINBB1234",
    ifscCode: "UTIB0000000",
    currency: "USD",
  },
  invoiceTerms: {
    invoiceNumber: "Invoice #25",
    issueDate: "Fri Apr 19 2024 00:00:00 GMT+0530 (India Standard Time)",
    dueDate: "Mon Apr 22 2024 00:00:00 GMT+0530 (India Standard Time)",
  },
  invoiceDetails: {
    note: "Services Period  21/03/2024 to 20/04/2024",
    discount: "22000",
    taxRate: "18",
    items: [
      {
        itemDescription: "Software Development Services",
        amount: 25000,
        qty: 1,
      },
      {
        itemDescription: "Hosting Charge",
        amount: 100,
        qty: 1,
      },
    ],
    currency: "USD",
  },
};
export default DemoPreview;
