import React from "react";
import Head from "next/head";
import routes from "../routes";
import styled from "../typed-components";
import Wrapper from "../components/wrapper";
import Tabs from "../components/tabs";
import Tab from "../components/tab";
import Goal from "../components/goal";
import GoalText from "../components/goalText";
import Card from "../components/card";

const Goals = styled.div`
  width: 100%;
`;

interface IProps {
  tab?: "pending";
}

class ToDos extends React.Component<IProps> {
  static getInitialProps(props) {
    const { query } = props;
    const { tab } = query;
    return { tab };
  }
  render() {
    const { tab } = this.props;
    return (
      <Wrapper>
        <Head>
          <title>Todo's | Indie Makers</title>
        </Head>
        <Tabs>
          <Tab
            link={routes.todos}
            selected={tab === undefined}
            text={"Completed"}
          />
          <Tab
            link={routes.pendindToDo}
            linkAs={routes.asPendindToDo}
            selected={tab === "pending"}
            text={"Pending"}
          />
        </Tabs>
        <Goals>
          <Card>
            <Goal>
              <GoalText
                lineThrough={false}
                isCompleted={true}
                text={"Go to bebek"}
                productName={"Indie Makers"}
              />
            </Goal>
          </Card>
        </Goals>
      </Wrapper>
    );
  }
}

export default ToDos;
