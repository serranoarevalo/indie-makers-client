import React from "react";
import Head from "next/head";
import Link from "next/link";
import routes from "../../routes";
import styled from "../../typed-components";
import Wrapper from "../../components/wrapper";
import Tabs from "../../components/tabs";
import Tab from "../../components/tab";
import GoalText from "../../components/goalText";
import Card from "../../components/card";
import { filterToDos } from "types/api";
import Pagination from "../../components/pagination";

const Goals = styled.div`
  width: 100%;
  margin-bottom: 60px;
`;

const Goal = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  &:last-child {
    margin-bottom: 0;
  }
`;

const PhotoContainers = styled.div`
  display: flex;
  align-items: center;
`;

const Photo = styled.img`
  width: 35px;
  border-radius: 50%;
  &:first-child {
    margin-right: 10px;
  }
  &:last-child {
    margin-left: 10px;
  }
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
            {goals.map(
              goal =>
                goal && (
                  <Goal key={goal.id}>
                    <GoalText
                      key={goal.id}
                      lineThrough={false}
                      isCompleted={goal.isCompleted}
                      text={goal.text}
                      productName={goal.product!.name}
                      productSlug={goal.product!.slug}
                      timeStamp={goal.createdAt || ""}
                    />
                    <PhotoContainers>
                      <Link
                        href={routes.userDetail(goal.maker!.username || "")}
                        as={routes.asUserDetail(goal.maker!.username || "")}
                      >
                        <a>
                          <Photo
                            src={(goal.maker && goal.maker.profilePhoto) || ""}
                          />
                        </a>
                      </Link>
                      👉🏻
                      <Link
                        href={routes.productDetail(goal.product!.slug || "")}
                        as={routes.asProductDetail(goal.product!.slug || "")}
                      >
                        <a>
                          <Photo
                            src={(goal.product && goal.product.logo) || ""}
                          />
                        </a>
                      </Link>
                    </PhotoContainers>
                  </Goal>
                )
            )}
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
