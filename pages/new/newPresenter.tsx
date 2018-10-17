import React from "react";
import Head from "next/head";
import styled from "../../typed-components";
import Wrapper from "../../components/wrapper";
import Card from "../../components/card";
import Input from "../../components/input";
import Title from "../../components/title";
import Form from "../../components/form/from";
import Button from "../../components/button";
import { lighten } from "polished";

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
    margin-bottom: 30px;
  }
`;

const Description = styled.textarea`
  width: 100%;
  resize: none;
  border: none;
  border-bottom: 1px solid ${props => lighten(0.1, props.theme.greyColor)};
  font-size: 14px;
  margin-bottom: 30px;
  &::placeholder {
    font-weight: 300;
  }
  &:focus,
  &:active {
    outline: none;
  }
  &:focus {
    outline: none;
    border-bottom-color: ${props => props.theme.blackColor};
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

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 25px;
  & ${UploadedImage} {
    margin-bottom: 10px;
  }
  color: ${props => props.theme.greyColor};
`;

const FileInput = styled.input`
  display: none;
`;

interface IProps {
  name: string;
  description: string;
  needsHelp: boolean;
  website: string;
  logo: string;
  handleInputChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  uploadImage: (event: React.ChangeEvent<HTMLInputElement>) => void;
  canUpload: boolean;
  status: string | null;
  handleSubmit: () => void;
}

const NewPresenter: React.SFC<IProps> = ({
  handleInputChange,
  name,
  description,
  needsHelp,
  website,
  logo,
  uploadImage,
  status,
  handleSubmit
}) => (
  <Wrapper>
    <Head>
      <title>Add Product | Indie Maker</title>
    </Head>
    <Container>
      <ETitle>Add a new product</ETitle>
      <Card>
        <EForm onSubmit={handleSubmit}>
          <Label htmlFor="file">
            <UploadedImage src={logo || "/static/photoPlaceholder.jpg"} />
            (not required)
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
            <Description
              required={true}
              name={"description"}
              placeholder={"What is it about? * (140 max)"}
              value={description}
              onChange={handleInputChange}
              maxLength={140}
            />
            <EInput
              required={true}
              type={"url"}
              name={"website"}
              placeholder={"Website"}
              value={website}
              onChange={handleInputChange}
            />
            <input
              onChange={handleInputChange}
              id={"help"}
              type={"checkbox"}
              name={"needsHelp"}
              checked={needsHelp}
            />
            <label htmlFor="help">I need help to finish this</label>
          </FormInputs>
          {status && status}
          <Button text={"Add Product"} onClick={handleSubmit} accent={true} />
        </EForm>
      </Card>
    </Container>
  </Wrapper>
);

export default NewPresenter;
