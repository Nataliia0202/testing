import {
  HeroSection,
  HeroTitel,
  HeroText,
  HeroButton,
  HeroWraper,
} from './Hero.styled';

export const Hero = () => {
    return (
      <>
        <HeroSection>
          <HeroWraper>
            <HeroTitel>Test assignment for front-end developer</HeroTitel>
            <HeroText>
              What defines a good front-end developer is one that has skilled
              knowledge of HTML, CSS, JS with a vast understanding of User
              design thinking as they'll be building web interfaces with
              accessibility in mind. They should also be excited to learn, as
              the world of Front-End Development keeps evolving.
            </HeroText>
            <HeroButton>Sign up</HeroButton>
          </HeroWraper>
        </HeroSection>
      </>
    );
}