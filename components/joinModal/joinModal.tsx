import Head from "next/head";
import styled from "../../typed-components";
import Card from "../card";
import Button from "../button";
import { lighten } from "../../node_modules/polished";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Title = styled.h3`
  font-size: 28px;
  margin-bottom: 40px;
`;

const LoginButton = styled(Button)`
  background-color: rgb(69, 104, 178);
  color: white;
  display: block;
  width: 80%;
  &:hover {
    background-color: ${lighten(0.1, "rgb(69, 104, 178)")};
  }
`;

const Text = styled.span`
  display: flex;
  align-items: center;
  svg {
    margin-right: 10px;
  }
`;

const Subtitle = styled.h4`
  font-size: 22px;
  margin-bottom: 15px;
`;

const Copy = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
  &:last-child {
    margin: 0;
  }
`;

const ModalColumn = styled.div`
  width: 100%;
  &:first-child {
    border-right: 1px solid ${props => props.theme.greyColor};
    padding-right: 25px;
    margin-right: 25px;
  }
`;

const JoinModal: React.SFC = () => (
  <Card padding={"40px"}>
    <Container>
      <Head>
        <title>Join Indie Makers</title>
      </Head>
      <ModalColumn>
        <Subtitle>
          Enter a community of makers building products together.
        </Subtitle>
        <Copy>
          Finish and ship your side projects along with a passionate community
          of makers and entrepreneurs!
        </Copy>
        <Copy>
          Publish your goals and track your progress publicly along with
          everybody else!
        </Copy>
      </ModalColumn>
      <ModalColumn>
        <Title>Join Indie Makers</Title>
        <LoginButton
          shadowColor={"rgb(69, 104, 178, 0.5)"}
          accent={false}
          text={
            <Text>
              <svg
                viewBox="0 0 32 32"
                role="presentation"
                aria-hidden="true"
                focusable="false"
                style={{
                  height: "18px",
                  width: "18px",
                  display: "block",
                  fill: "currentcolor"
                }}
              >
                <path
                  d="m8 14.41v-4.17c0-.42.35-.81.77-.81h2.52v-2.08c0-4.84 2.48-7.31 7.42-7.35 1.65 0 3.22.21 4.69.64.46.14.63.42.6.88l-.56 4.06c-.04.18-.14.35-.32.53-.21.11-.42.18-.63.14-.88-.25-1.78-.35-2.8-.35-1.4 0-1.61.28-1.61 1.73v1.8h4.52c.42 0 .81.42.81.88l-.35 4.17c0 .42-.35.71-.77.71h-4.21v16c0 .42-.35.81-.77.81h-5.21c-.42 0-.8-.39-.8-.81v-16h-2.52a.78.78 0 0 1 -.78-.78"
                  fillRule="evenodd"
                />
              </svg>
              Continue with Facebook
            </Text>
          }
        />
      </ModalColumn>
    </Container>
  </Card>
);

export default JoinModal;
