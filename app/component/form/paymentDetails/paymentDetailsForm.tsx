import CustomTextInput from "@/app/component/ui/customTextInput";
import CustomNumberInput from "@/app/component/ui/customNumberInput";

export const PaymentDetailsForm = () => (
  <div className="pt-24">
    <p className="text-2xl font-semibold pb-3">Payment Details</p>
    <CustomTextInput
      label="Bank name"
      placeholder=""
      variableName="bankName"
    />
    <CustomTextInput
      label="Account number"
      placeholder=""
      variableName="accountNumber"
    />
    <CustomTextInput
      label="Account Name"
      placeholder=""
      variableName="accountName"
    />
    <CustomTextInput
      label="IFSC code"
      placeholder=""
      variableName="ifscCode"
    />
    <CustomTextInput
      label="Routing number"
      placeholder=""
      variableName="routingCode"
    />
    <CustomNumberInput
      label="Swift code"
      placeholder=""
      variableName="swiftCode"
    />
  </div>
);
