import { Menu } from "antd";
import { Text } from "@components/atoms/Text";
import { palette } from "@styles/palette";
export const menu = (handleDataFetching, dropdownCategories, selectedItem) => {
  return (
    <Menu>
      {dropdownCategories.map((item) => {
        return (
          /**
           * Dont include the selected item in the list
           */
          selectedItem.key != item.key && (
            <Menu.Item
              onClick={(e) => handleDataFetching(e.key, item.value)}
              key={item.key}
            >
              <Text size={15} color={palette.color_mainText} weight={700}>
                {item.content}
              </Text>
            </Menu.Item>
          )
        );
      })}
    </Menu>
  );
};
