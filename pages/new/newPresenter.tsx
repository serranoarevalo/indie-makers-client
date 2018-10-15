import React from "react";
import Head from "next/head";
import styled from "../../typed-components";
import Wrapper from "../../components/wrapper";
import Card from "../../components/card";
import Input from "../../components/input";
import Title from "../../components/title";
import Form from "../../components/form/from";
import Button from "../../components/button";

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
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EInput = styled(Input)`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const FormInputs = styled.div`
  margin-bottom: 20px;
`;

const UploadedImage = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  border: 2px ${props => props.theme.blackColor} dashed;
`;

const Label = styled.label``;

const FileInput = styled.input`
  display: none;
`;

interface IProps {
  name: string;
  description: string;
  needHelp: boolean;
  homepage: string;
  logo: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  uploadImage: (event: React.ChangeEvent<HTMLInputElement>) => void;
  canUpload: boolean;
  status: string | null;
}

const NewPresenter: React.SFC<IProps> = ({
  handleInputChange,
  name,
  description,
  needHelp,
  homepage,
  logo,
  uploadImage,
  canUpload,
  status
}) => (
  <Wrapper>
    <Head>
      <title>Add Product | Indie Maker</title>
    </Head>
    <Container>
      <ETitle>Add a new product</ETitle>
      <Card>
        <EForm>
          <Label htmlFor="file">
            <UploadedImage src={logo || "/static/photoPlaceholder.jpg"} />
          </Label>
          <FileInput
            id={"file"}
            type={"file"}
            accept={"image/*"}
            onChange={uploadImage}
          />
          <FormInputs>
            <EInput
              required={true}
              type={"text"}
              name={"name"}
              placeholder={"Name *"}
              value={name}
              onChange={handleInputChange}
            />
            <EInput
              required={true}
              type={"text"}
              name={"description"}
              placeholder={"What is it about? *"}
              value={description}
              onChange={handleInputChange}
            />
            <EInput
              required={true}
              type={"url"}
              name={"homepage"}
              placeholder={"Website"}
              value={homepage}
              onChange={handleInputChange}
            />
          </FormInputs>
          {status && status}
          <Button text={"Create Product"} accent={true} disabled={canUpload} />
        </EForm>
      </Card>
    </Container>
  </Wrapper>
);

export default NewPresenter;
