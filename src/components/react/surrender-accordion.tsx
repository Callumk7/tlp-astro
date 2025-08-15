import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export function SurrenderAccordion() {
  return (
    <Accordion type="multiple">
      <AccordionItem value="what-should-i-do">
        <AccordionTrigger>
          What should I do if I need to rehome my guinea pig
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4">
          <div>
            <span className="text-plum9 font-bold">Contact Us: </span>
            <a
              className="text-teal9 underline"
              href="https://docs.google.com/forms/d/e/1FAIpQLScHfnA_SFHCadB0uYQkRJCFzZU5uGPHlLGjD_B_pIv1Ob2Kig/viewform"
            >
              Initiate contact through our online form
            </a>{" "}
            to inform us of your intention to surrender your guinea pig.
          </div>
          <div>
            <span className="text-plum9 font-bold">
              Discuss your Situation:{" "}
            </span>
            Engage in a conversation with us to clarify your reasons for
            surrendering your guinea pig and gather information regarding their
            care and personality.
          </div>
          <div>
            <span className="text-plum9 font-bold">Waiting List: </span>
            Due to our frequently full capacity, we maintain a waiting list for
            incoming guinea pigs. Your guinea pig will be placed on this list
            until we can properly accommodate them at the rescue.
          </div>
          <div>
            <span className="text-plum9 font-bold">Finding a New Home: </span>
            Once your guinea pig is ready, we will actively pursue a loving and
            suitable new home. This process entails matching them with
            compatible companions, conducting thorough home visits, and ensuring
            they are welcomed into a nurturing environment.
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="options">
        <AccordionTrigger className="text-left">
          What are my options if I want to stop having guinea pigs but my last
          guinea pig needs a companion?
        </AccordionTrigger>
        <AccordionContent>
          If you no longer wish to have guinea pigs but your last guinea pig
          requires companionship, we encourage you to consider fostering with
          us. This option allows your guinea pig to remain with you while
          receiving the companionship they need. Upon their departure, we will
          be able to welcome our foster guinea pig back into the rescue and find
          them a new companion.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="medical">
        <AccordionTrigger>
          My guinea pig has medical needs - what should I do?
        </AccordionTrigger>
        <AccordionContent>
          In the event that your guinea pig has existing medical conditions,
          please provide us with comprehensive information about their health
          history and any ongoing treatment plans. This will enable us to ensure
          they receive appropriate care when they join our rescue and will not
          hinder our ability to take them into the rescue. We never euthanize a
          guinea pig unless their quality of life is severely compromised.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="emergency">
        <AccordionTrigger>
          It&apos;s an emergency - can you take my guinea pig today?
        </AccordionTrigger>
        <AccordionContent>
          In emergency situations requiring immediate assistance, please ensure
          you mention this on our contact form, and we will make every effort to
          accommodate your needs and provide a safe haven for your guinea pig.
          However, due to our status as a small, self-funded rescue operating
          alongside a full-time job, we cannot guarantee that we can accommodate
          all emergency situations.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="temporarily">
        <AccordionTrigger>
          Can you look after my guinea pig temporarily?
        </AccordionTrigger>
        <AccordionContent>
          Yes, we offer boarding services for guinea pigs. This option is
          available if you require temporary care while you are away on holiday
          or otherwise need alternative care for your guinea pigs. Please
          contact us to discuss your specific needs and availability.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
