"use client";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import Fuse from "fuse.js";
import { Button, ListBoxItem, Form } from "react-aria-components";
import { MyComboBox, MyItem } from "./ui/MyCombobox";

type WarframeComboboxProps = {
  warframes: any[];
};

export default function WarframeCombobox({ warframes }: WarframeComboboxProps) {
  console.log(warframes);
  const [selectedWarframe, setSelectedWarframe] = useState<any | null>(null);
  const [query, setQuery] = useState("");

  const fuse = useMemo(
    () =>
      new Fuse(warframes, {
        keys: ["name"],
        threshold: 0.3,
      }),
    [warframes]
  );

  const filteredItems =
    query === ""
      ? warframes.slice(0, 6)
      : fuse
          .search(query)
          .map((res) => ({ ...res.item }))
          .slice(0, 6);

  return (
    <>
      <h1>You selected {selectedWarframe}</h1>
      <Form>
        <MyComboBox
          label="Warframe"
          items={warframes}
          selectedKey={selectedWarframe}
          onSelectionChange={(selected) => setSelectedWarframe(selected)}
          inputValue={query}
          onInputChange={(value) => {
            setQuery(value);
            console.log(query);
          }}
          isRequired
        >
          {(item) => (
            <ListBoxItem id={item.name} textValue={item.name}>
              <>
                <Image
                  src={item.wikiaThumbnail}
                  alt="Warframe"
                  width={100}
                  height={100}
                />
                <span>{item.name}</span>
              </>
            </ListBoxItem>
          )}
        </MyComboBox>
        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
}
