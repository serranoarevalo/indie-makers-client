import React from "react";
import Link from "next/link";
import styled from "../../typed-components";
import GoalText from "../goalText";
import routes from "../../routes";
import ImagePlaceholder from "../../components/imagePlaceholder";

const Goal = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:last-child {
    margin-bottom: 0;
  }
`;

const PhotoContainers = styled.div`
  display: flex;
  align-items: center;
`;

const ProductContainer = styled.div`
  margin-left: 10px;
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
  goal: any;
}

const GoalFeed: React.SFC<IProps> = ({ goal }) => (
  <Goal key={goal.id}>
    <GoalText
      goalId={goal.id}
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
        prefetch
        href={routes.userDetail(goal.maker!.username || "")}
        as={routes.asUserDetail(goal.maker!.username || "")}
      >
        <a style={{ height: "35px" }}>
          <Photo src={(goal.maker && goal.maker.profilePhoto) || ""} />
        </a>
      </Link>
      👉🏻
      <Link
        prefetch
        href={routes.productDetail(goal.product!.slug || "")}
        as={routes.asProductDetail(goal.product!.slug || "")}
      >
        <a>
          {goal && goal.product && goal.product.logo ? (
            <Photo src={(goal.product && goal.product.logo) || ""} />
          ) : (
            <ProductContainer>
              <ImagePlaceholder letter={goal.product.name[0]} size={35} />
            </ProductContainer>
          )}
        </a>
      </Link>
    </PhotoContainers>
  </Goal>
);
export default GoalFeed;
