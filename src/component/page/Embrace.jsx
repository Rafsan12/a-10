import React from "react";
import ContainerBox from "../../material/Containerbox";
import SignupButton from "../../material/Signupbutton";
class Embrace extends React.PureComponent {
  render() {
    return (
      <>
        <section className="px-3 py-20 lg:py-24">
          <ContainerBox>
            <div className="space-y-[23px] text-center grid place-items-center ">
              <p className="text-lg font-normal text-[#0FF1F6] font-montserrot uppercase">
                get started
              </p>
              <h2 className="font-montserrot  text-4xl font-bold text-white">
                <span className="font-medium italic">Embrace</span>
                the new era of
                <span className="font-medium italic">outbound.</span>
              </h2>
              <p className="text-center text-white/75 font-[300] text-lg font-worksans ">
                Wizia lets you train, activate, and optimize aiDRs.
                <br /> Take your outbound to new levels of performance and
                efficiency.
              </p>
              <SignupButton className={"md:w-[30%] lg:w-[22%] px-0"}>
                Sign up for the demo
              </SignupButton>
            </div>
          </ContainerBox>
        </section>
      </>
    );
  }
}
export default Embrace;
