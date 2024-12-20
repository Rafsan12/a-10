import { GitFork, Shrink, WandSparkles } from "lucide-react";
import ContainerBox from "../../material/Containerbox";
import SystemCard from "../../material/Systemcard";

// bestSystem data
const bestSystem = [
  {
    id: 1,
    icon: <WandSparkles size={64} className="text-primary" />,
    title: "You’re in Control",
    des: "aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work.",
  },
  {
    id: 2,
    icon: <GitFork size={64} className="text-primary" />,
    title: "Infinitely Scalable",
    des: "Train an aiDR on a patch. When you are happy with the results, scale it effortlessly.",
  },
  {
    id: 3,
    icon: <Shrink size={64} className="text-primary" />,
    title: "Incredibly Flexible",
    des: "Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time.",
  },
];

const System = () => {
  return (
    <>
      <section className="py-28 ">
        <ContainerBox>
          <div className="grid gap-x-6 grid-cols-1 md:grid-cols-2 gap-y-5 lg:grid-cols-3">
            {bestSystem.map((res) => (
              <SystemCard className={"border"} key={res.id} {...res} />
            ))}
          </div>
        </ContainerBox>
      </section>
    </>
  );
};

export default System;
