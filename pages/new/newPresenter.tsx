import React from "react";
import Head from "next/head";
import styled from "../../typed-components";
import Wrapper from "../../components/wrapper";
import Card from "../../components/card";
import Input from "../../components/input";
import Title from "../../components/title";
import Form from "../../components/form/from";

const Container = styled.div`
  max-width: 500px;
  margin: 80px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ETitle = styled(Title)`
  margin-bottom: 20px;
`;

const EForm = styled(Form)`
  margin: 0 auto;
`;

const EInput = styled(Input)`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

interface IProps {
  name: string;
  description: string;
  needHelp: boolean;
  homepage: string;
  logo: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const NewPresenter: React.SFC<IProps> = ({
  handleInputChange,
  name,
  description,
  needHelp,
  homepage,
  logo
}) => (
  <Wrapper>
    <Head>
      <title>Add Product | Indie Maker</title>
    </Head>
    <Container>
      <ETitle>Add a new product</ETitle>
      <Card>
        <EForm>
          <EInput
            type={"text"}
            name={"name"}
            placeholder={"Name"}
            value={name}
            onChange={handleInputChange}
          />
          <EInput
            type={"text"}
            name={"description"}
            placeholder={"What is it about?"}
            value={description}
            onChange={handleInputChange}
          />
          <EInput
            type={"url"}
            name={"homepage"}
            placeholder={"Website"}
            value={homepage}
            onChange={handleInputChange}
          />
        </EForm>
      </Card>
    </Container>
  </Wrapper>
);

export default NewPresenter;
