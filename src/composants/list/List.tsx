import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Collapse,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  List as MaterialList,
} from "@mui/material";
import { FC, Fragment, HTMLAttributes, ReactNode, useState } from "react";
import ListItem from "../listItem/ListItem";
import { MergeRequest } from "../../types";

type ListProps = {
  icon: ReactNode;
  label: string;
  mergeRequestsList: MergeRequest[];
} & HTMLAttributes<HTMLDivElement>;

const List: FC<ListProps> = ({ icon, label, mergeRequestsList }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Fragment>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={label} />
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <MaterialList component="div" disablePadding>
          {mergeRequestsList.map(
            ({ id, title, web_url, labels, draft, updated_at }) => (
              <ListItem
                key={id}
                title={title}
                web_url={web_url}
                labels={labels}
                isDraft={draft}
                updatedAt={updated_at}
                mrId={id}
              />
            )
          )}
        </MaterialList>
      </Collapse>
    </Fragment>
  );
};
export default List;
