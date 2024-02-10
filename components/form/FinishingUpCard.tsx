"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useFinalValue } from "@/context/FinalValueContextProvider";
import { useIsYearly } from "@/context/IsYearlyContextProvider";
import { capitalizeFirstLetter } from "@/lib/utils";
import { Button } from "../ui/button";
import { addOns, plans } from "@/constants";
import { useStep } from "@/context/StepContextProvider";

const FinishingUpCard = () => {
  const { setStep } = useStep();
  const { values } = useFinalValue();
  const { isYearly } = useIsYearly();
  const YrOrMo = isYearly ? "yr" : "mo";

  // Selected plan
  const selectedPlan = plans.find(
    (plan) => plan.label.toLowerCase() === values.plan.toLocaleLowerCase()
  );
  const planPrice = isYearly
    ? selectedPlan?.priceYearly
    : selectedPlan?.priceMonthly;

  // Selected addons
  const selectedAddOns = addOns.filter(
    (addOn) => values.addOns?.includes(addOn.id) ?? false
  );
  const selectedAddOnsPriceList = selectedAddOns.map((addOn) =>
    isYearly ? addOn.priceYearly : addOn.priceMonthly
  );

  // Total price
  let totalPriceList: number[] = [];

  if (planPrice) {
    totalPriceList = [planPrice, ...selectedAddOnsPriceList];
  }

  const totalPrice = totalPriceList.reduce((a, b) => a + b, 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-[#022959] ">Finishing up</CardTitle>
        <CardDescription>
          Double-check everything looks OK before confirming.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="rounded-md bg-[#F8F9FF] p-5">
          <div className="flex justify-between border-b-[1px] border-[#E4E5EE] pb-2 ">
            <div className="text-xl font-semibold text-[#022959]">
              <span> {capitalizeFirstLetter(values.plan)} </span>
              {isYearly ? <span> (Yearly) </span> : <span> (Monthly) </span>}
              <div>
                <Button
                  onClick={() => setStep(2)}
                  type="button"
                  variant="link"
                  className="p-0 text-sm text-[#9699AA] "
                >
                  Change
                </Button>
              </div>
            </div>

            <div className="font-semibold text-[#022959]">
              ${planPrice}/{YrOrMo}
            </div>
          </div>

          <div className="mt-3 space-y-3">
            {selectedAddOns?.map((selectedAddOn) => (
              <div
                key={selectedAddOn.id}
                className="flex items-center justify-between"
              >
                <span className="text-[#9699AA]"> {selectedAddOn.label} </span>
                {isYearly ? (
                  <span className="text-[#022959]">
                    +${selectedAddOn.priceYearly}/yr
                  </span>
                ) : (
                  <span className="text-[#022959]">
                    +${selectedAddOn.priceMonthly}/mo
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between p-5">
          <div className="text-[#9699AA]">
            Total
            {isYearly ? <span> (per year)</span> : <span> (per month)</span>}
          </div>

          <div className="font-semibold text-[#022959]">
            +${totalPrice}/{YrOrMo}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FinishingUpCard;
