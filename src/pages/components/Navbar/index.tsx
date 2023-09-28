import {
  BuyMeaCoffee,
  CoffeeImage,
  LogoContainer,
  MenuList,
  MenuListWrapper,
  NavbarContainer,
} from "./index.styles";
import mainLogo from "../../../assets/geek-icon.svg";
import buymeacofe from "../../../assets/buymeacofe.png";

export const Navbar = () => {
  return (
    <NavbarContainer>
      <LogoContainer>
        <img src={mainLogo} alt="" />
      </LogoContainer>

      <MenuListWrapper>
        <MenuList isActive={true}>
          <div
            style={{
              color: "#404040",
              fontSize: 17,
              fontFamily: "Montserrat",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            Home
          </div>
        </MenuList>
        <MenuList isActive={false}>
          <div
            style={{
              color: "#404040",
              fontSize: 17,
              fontFamily: "Montserrat",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            Lista de comics
          </div>
        </MenuList>
        <MenuList isActive={false}>
          <div
            style={{
              color: "#404040",
              fontSize: 17,
              fontFamily: "Montserrat",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            LinkedIn owner
          </div>
        </MenuList>
      </MenuListWrapper>
      <BuyMeaCoffee>
        <CoffeeImage src={buymeacofe} alt="" />
        Buy me a coffee
      </BuyMeaCoffee>
    </NavbarContainer>
  );
};
