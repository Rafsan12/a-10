import { Copyright } from "lucide-react";
import ContainerBox from "../../material/Containerbox";

export const Logo = () => {
  return (
    <>
      <img
        src="./whiteLogo.svg"
        className="max-w-full object-contain"
        alt="svg-img"
      />
    </>
  );
};

const Footer = () => {
  return (
    <>
      <section className="px-3 py-4 bg-[#07292F]">
        <ContainerBox className={"lg:px-10 "}>
          <div className="flex items-center justify-between py-4 ">
            <Logo />
            <p className="flex text-base text-[#96ACAF]  font-worksans font-[300] items-center gap-x-1">
              Copyright <Copyright size={13} />{" "}
              {new Date().getFullYear().toLocaleString()} Wizia. All rights
              reserved.
            </p>
          </div>
        </ContainerBox>
      </section>
    </>
  );
};

export default Footer;
