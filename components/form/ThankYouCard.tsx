"use client";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const ThankYouCard = () => {
  return (
    <Card className="text-center">
      <CardHeader className="mt-12 space-y-3">
        <CardTitle>
          <div className="flex flex-col items-center justify-center gap-8">
            <Image
              src="/icon-thank-you.svg"
              alt="Thank you"
              height={50}
              width={50}
            />
            <h1 className="text-[#022959] ">Thank you!</h1>
          </div>
        </CardTitle>
        <CardDescription>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default ThankYouCard;
