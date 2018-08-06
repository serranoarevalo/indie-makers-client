import Head from "next/head";
import styled from "../typed-components";
import Wrapper from "../components/wrapper";
import Tabs from "../components/tabs";
import Tab from "../components/tab";
import Goal from "../components/goal";
import Card from "../components/card";

const Goals = styled.div`
  width: 100%;
`;

const ToDos = () => (
  <Wrapper>
    <Head>
      <title>Todo's | Indie Makers</title>
    </Head>
    <Tabs>
      <Tab selected={true} text={"Completed"} />
      <Tab text={"Pending"} />
    </Tabs>
    <Goals>
      <Card>
        <Goal />
      </Card>
    </Goals>
  </Wrapper>
);

export default ToDos;
