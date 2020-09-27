import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Input = styled.input`
  padding: 12px 20px;
  font-size: 16px;
  border: 1px solid grey;
  border-radius: 5px;
  font-weight: 900;
`;

export const Textarea = styled.textarea`
  padding: 12px 20px;
  font-size: 16px;
  border: 1px solid grey;
  border-radius: 5px;
  font-weight: 900;
`;

export const Button = styled.button`
  padding: 12px 20px;
  font-size: 16px;
  cursor: pointer;
  background: #68ef68;
  border: none;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: 900;
  margin: 5px;
  &:hover {
    transition: 0.5s;
    background: #1be61b;
  }
  &.updating {
    transition: 0s;
    background: #eeeeee;
    color: #dddddd;
  }
`;

export const Name = styled.span`
  min-width: 100px;
  min-width: 115px;
  display: inline-flex;
  font-size: 20px;
`;

export const Label = styled.label`
  display: flex;
  margin: 5px 0;
`;

export const Ul = styled.ul`
  list-style: none;
`;
export const Page = styled.div`
  padding: 10px;
  min-height: 200px;
  flex: 1;
  &.uploading {
    animation: uploading 1s infinite;
  }
  @keyframes uploading {
    from {
      background: #ffffff;
    }
    to {
      background: #eeeeee;
    }
  }
`;

export const Menu = styled.div`
  width: 300px;
  background: #eee;
`;

export const MainPage = styled.div`
  display: flex;
`;
export const ListLink = styled(Link)`
  color: black;
  text-decoration: none;
`;
