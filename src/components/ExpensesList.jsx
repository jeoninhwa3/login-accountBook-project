import { Link } from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { getExpenses } from "../lib/api/expense";

// styled component
const StUl = styled.ul`
  display: grid;
  row-gap: 10px;
  padding: 20px;
  margin: 30px 30px 0;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 8px 8px 10px rgba(0, 0, 0, 0.2);
`;
const StLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  border-radius: 10px;
  background-color: #eee;
  text-decoration: none;
  color: inherit;
  box-sizing: border-box;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.01);
  }
`;
const StDesc = styled.p`
  width: 930px;
  margin-top: 3px;
  word-break: keep-all;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const ExpensesList = ({ selectedMonth }) => {
  const {
    data: expenses = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["expense"],
    queryFn: getExpenses,
  });
  if (isLoading) {
    return <div>로딩중입니다.</div>;
  }

  const filterExpenses = expenses.data.filter(
    (expense) => parseInt(expense.date.split("-")[1]) === selectedMonth
  );

  return (
    <StUl>
      {filterExpenses.map((el) => {
        return (
          <li key={el.id}>
            <StLink to={`/detail/${el.id}`}>
              <div>
                <p>
                  {el.date} / {el.createdBy}
                </p>
                <StDesc>
                  {el.item} - {el.description}
                </StDesc>
              </div>
              <p>
                <strong>{el.amount}</strong> 원
              </p>
            </StLink>
          </li>
        );
      })}
    </StUl>
  );
};

export default ExpensesList;
