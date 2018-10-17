import React from "react";
import Head from "next/head";
import routes from "../../routes";
import styled from "../../typed-components";
import Wrapper from "../../components/wrapper";
import Tabs from "../../components/tabs";
import Tab from "../../components/tab";
import Card from "../../components/card";
import { filterToDos } from "types/api";
import Pagination from "../../components/pagination";
import GoalFeed from "../../components/goalFeed";

const Goals = styled.div`
  width: 100%;
  margin-bottom: 60px;
`;

interface IProps {
  tab: "PENDING" | "COMPLETED";
  page: number;
  data?: filterToDos;
}

const ToDosPresenter: React.SFC<IProps> = ({
  tab,
  page,
  data: { FilterGoals: { goals = [], totalPages = 0 } = {} } = {}
}) => (
  <Wrapper>
    <Head>
      <title>Todo's | Indie Makers</title>
    </Head>
    <Tabs>
      <Tab
        link={routes.todos}
        selected={tab === "COMPLETED"}
        text={"Completed"}
      />
      <Tab
        link={routes.toDosFn(page, "PENDING")}
        linkAs={routes.asToDosFn(page, "PENDING")}
        selected={tab === "PENDING"}
        text={"Pending"}
      />
    </Tabs>
    {goals &&
      goals.length !== 0 && (
        <Goals>
          <Card>
            {goals.map(goal => goal && <GoalFeed key={goal.id} goal={goal} />)}
          </Card>
        </Goals>
      )}
    {goals &&
      goals.length === 0 && (
        <h1 className={"thickText"}>There are no goals to show now.</h1>
      )}
    {goals &&
      goals.length !== 0 && (
        <Pagination
          hasNext={page > totalPages}
          currentPage={`${page + 1}`}
          totalPages={`${totalPages + 1}`}
          previousLink={routes.toDosFn(page - 1, tab)}
          nextLink={routes.toDosFn(page + 1, tab)}
          asPreviousLink={routes.asToDosFn(page - 1, tab)}
          asNextLink={routes.asToDosFn(page + 1, tab)}
          hasPrevious={page !== 0}
        />
      )}
  </Wrapper>
);

export default ToDosPresenter;
