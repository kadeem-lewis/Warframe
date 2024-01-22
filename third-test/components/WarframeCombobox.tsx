"use client";
import React from "react";
import Fuse from "fuse.js";
import {
  ComboBox,
  Input,
  Label,
  Popover,
  Button,
  ListBox,
  ListBoxItem,
} from "react-aria-components";
import { MyComboBox, MyItem } from "./ui/MyCombobox";

type WarframeComboboxProps = {
  warframes: any[];
};

export default function WarframeCombobox({ warframes }: WarframeComboboxProps) {
  console.log(warframes);
  return (
    <>
      <MyComboBox label="Warframe" items={warframes} defaultSelectedKey={1}>
        {(item) => <ListBoxItem id={item.name}>{item.name}</ListBoxItem>}
      </MyComboBox>
    </>
  );
}
