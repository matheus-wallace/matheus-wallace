import React from "react";
import { SectionMenuList, ListMenuItem } from "./style";

interface LinkListProps {
  items: string[];
}

const LinkList: React.FC<LinkListProps> = ({ items }) => {
  return (
    <SectionMenuList>
      {items.map((item, index) => (
        <ListMenuItem key={index}>{item}</ListMenuItem>
      ))}
    </SectionMenuList>
  );
};

export default LinkList;
