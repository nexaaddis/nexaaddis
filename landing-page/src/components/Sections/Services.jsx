import React from "react";
import styled from "styled-components";
// Components
import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../Buttons/FullButton";
// Assets
import AddImage1 from "../../assets/img/add/1.png";
import AddImage2 from "../../assets/img/add/2.png";
import AddImage3 from "../../assets/img/add/3.png";

export default function Services() {
  return (
    <Wrapper id="services">
      <Section className="darkBg">
        <Container>
          <ClientSlider />
        </Container>
      </Section>
      <Section>
        <Container>
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Awesome Services</h1>
            <p className="font13">
              At Expert Handyman Services, we offer a diverse range of services tailored to meet your needs. Whether you're looking for creative designs, web solutions, or top-quality printing, we've got you covered.
            </p>
          </HeaderInfo>
          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper>
              <ServiceBox
                icon="roller"
                title="Graphic Design"
                subtitle="We turn your ideas into stunning visual designs that capture attention and resonate with your audience."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="monitor"
                title="Web Design"
                subtitle="Creating responsive and engaging websites that showcase your brand and keep your visitors coming back."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="browser"
                title="Development"
                subtitle="Building custom development solutions to bring your vision to life with cutting-edge technology."
              />
            </ServiceBoxWrapper>
          </ServiceBoxRow>
        </Container>
      </Section>
      <Section>
        <Container>
          <Advertising className="flexSpaceCenter">
            <AddLeft>
              <h4 className="font15 semiBold">About Us</h4>
              <h2 className="font40 extraBold">Expert Handyman Services</h2>
              <p className="font12">
                Expert Handyman Services is your go-to solution for all creative and technical needs. Our team is dedicated to providing exceptional service, ensuring your projects are handled with care and expertise.
              </p>
              <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0" }}>
                <div style={{ width: "190px" }}>
                  <FullButton title="Get Started" action={() => alert("Get Started clicked")} />
                </div>
                <div style={{ width: "190px", marginLeft: "15px" }}>
                  <FullButton title="Contact Us" action={() => alert("Contact Us clicked")} border />
                </div>
              </ButtonsRow>
            </AddLeft>
            <AddRight>
              <AddRightInner>
                <div className="flexNullCenter">
                  <AddImgWrapp1 className="flexCenter">
                    <img src={AddImage1} alt="office" />
                  </AddImgWrapp1>
                  <AddImgWrapp2>
                    <img src={AddImage2} alt="office" />
                  </AddImgWrapp2>
                </div>
                <div className="flexNullCenter">
                  <AddImgWrapp3>
                    <img src={AddImage3} alt="office" />
                  </AddImgWrapp3>
                </div>
              </AddRightInner>
            </AddRight>
          </Advertising>
        </Container>
      </Section>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  background: linear-gradient(180deg, #f0f0f0, #e0e0e0);
  color: white;
`;

const Section = styled.div`
  padding: 60px 0;
  background: #f5f5f5;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);

  &:nth-child(odd) {
    background: #e0e0e0;
  }
`;

const Container = styled.div`
  width: 85%;
  margin: 0 auto;
  text-align: center;
`;

const HeaderInfo = styled.div`
  margin-bottom: 40px;

  h1 {
    color: #333;
  }

  p {
    color: #555;
  }
`;

const ServiceBoxRow = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 860px) {
    flex-direction: column;
  }
`;

const ServiceBoxWrapper = styled.div`
  width: 30%;
  padding: 40px 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 860px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
`;

const ButtonsRow = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 860px) {
    flex-direction: column;
    align-items: center;
  }
`;

const AddLeft = styled.div`
  width: 50%;
  padding-right: 20px;
  color: #333;

  h2 {
    color: #222;
  }

  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding-right: 0;
    margin-bottom: 40px;
  }
`;

const AddRight = styled.div`
  width: 50%;
  position: relative;

  @media (max-width: 860px) {
    width: 100%;
  }
`;

const AddRightInner = styled.div`
  display: flex;
  justify-content: space-around;
`;

const AddImgWrapp1 = styled.div`
  width: 48%;
  img {
    width: 100%;
    height: auto;
  }
`;

const AddImgWrapp2 = styled.div`
  width: 48%;
  img {
    width: 100%;
    height: auto;
  }
`;

const AddImgWrapp3 = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: auto;
  }
`;
