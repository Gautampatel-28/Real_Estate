import React, { useState } from "react";
import "./Value.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "../../utils/accordion";

const Value = () => {
  const [expandedIndex, setExpandedIndex] = useState(0); // Track the currently expanded index

  return (
    <>
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* Left side */}
        <div className="v-left">
          <div className="image-container">
            <img src={`${import.meta.env.BASE_URL}assets/value.png`} alt="img" />
          </div>
        </div>
        {/* Right side */}
        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value We Give To You</span>
          <span className="secondaryText">
            We always ready to help by providing the best services for you.
            <br />
            We believe a good place to live can make your life better.
          </span>

          <Accordion className="accordion" allowMultipleExpanded={false} preExpanded={[0]}>
            {data.map((item, i) => (
              <AccordionItem
                className={`accordionItem ${expandedIndex === i ? "expanded" : "collapsed"}`}
                key={i}
                uuid={i}
                onClick={() => setExpandedIndex(expandedIndex === i ? null : i)} // Toggle expanded state
              >
                <AccordionItemHeading>
                  <AccordionItemButton className="flexCenter accordionButton">
                    <div className="flexCenter icon">{item.icon}</div>
                    <span className="primaryText">{item.heading}</span>
                    <div className="flexCenter icon">
                      <MdOutlineArrowDropDown size={20} />
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="secondaryText">{item.detail}</p>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
    </>
  );
};

export default Value;
