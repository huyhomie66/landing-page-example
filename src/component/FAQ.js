import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { useTranslation } from "react-i18next";

import "react-accessible-accordion/dist/fancy-example.css";
import "./FAQ.css";
import Container from "./Container";

export default function FAQ() {
  const { t } = useTranslation();
  const faqContent = t("faqContent", { returnObjects: true });
  return (
    <Container>
      <Accordion allowZeroExpanded={true} className="accordion">
        {faqContent.map((e) => (
          <AccordionItem className="item">
            <AccordionItemHeading>
              <AccordionItemButton>{e.title}</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>{e.description}</AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
}
