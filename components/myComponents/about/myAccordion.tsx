import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const MyAccordion = (props) => {
  return (
    <>
      <Accordion
        className="border border-[#ADB5BD] px-[20px] rounded-[20px]"
        type="single"
        collapsible
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>{props.trigger}</AccordionTrigger>
          <AccordionContent>
            {props.Content}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default MyAccordion;
