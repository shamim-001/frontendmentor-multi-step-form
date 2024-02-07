"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const FinishingUpCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Finishing up</CardTitle>
        <CardDescription>
          Double-check everything looks OK before confirming.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <h1>Finish</h1>
      </CardContent>
    </Card>
  );
};

export default FinishingUpCard;
