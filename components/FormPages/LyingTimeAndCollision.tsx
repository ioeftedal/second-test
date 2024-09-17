"use client";

import {
  Button,
  Group,
  Space,
  NumberInput,
  Select,
  Title,
  Flex,
} from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";
import { IconTrashX } from "@tabler/icons-react";
import { LyingTimeAndCollisionForm } from "../../form/lyingTimeAndColission";

function LyingTimeCollision({
  form,
}: {
  form: UseFormReturnType<LyingTimeAndCollisionForm>;
}) {
  return (
    <>
      <Title order={3}>Lying Time And Collision</Title>
      {form.values.individuals.map((individual, index) => (
        <div key={index}>
          <Flex justify="space-between" align="center">
            <Title order={5}>{`Registration ${index + 1}`}</Title>
            <Button
              onClick={() => form.removeListItem("individuals", index)}
              color="red"
              variant="outline"
            >
              <IconTrashX /> Remove
            </Button>
          </Flex>
          <Group grow gap="md">
            <NumberInput
              label="Lying time"
              rightSection="s"
              {...form.getInputProps(`individuals.${index}.lyingTime`)}
            />
            <Select
              label="Collision"
              data={["Absent", "Present"]}
              {...form.getInputProps(`individuals.${index}.collision`)}
            />
          </Group>
          <Space h="md" />
        </div>
      ))}
      <Button
        onClick={() =>
          form.insertListItem("individuals", {
            lyingTime: undefined,
            collision: undefined,
          })
        }
        fullWidth
      >
        {" "}
        + Add Lying Time and Collision
      </Button>
    </>
  );
}

export default LyingTimeCollision;
