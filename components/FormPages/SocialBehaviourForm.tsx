"use client";

import {
  Group,
  TextInput,
  Space,
  Select,
  Title,
  SimpleGrid,
  Button,
  NumberInputProps,
  NumberInput,
} from "@mantine/core";
import { TimeInput } from "@mantine/dates";
import { UseFormReturnType } from "@mantine/form";
import { upperFirst, useCounter } from "@mantine/hooks";
import { useEffect } from "react";
import {
  SocialBehaviourAndCoughingForm,
  defaultSocialBehaviourAndCoughingForm,
  defaultSocialBehaviourAndCoughingData,
} from "../../form/farmSocialBehaviourAndCoughing";
import { HerdGroup } from "../../form/farmOverview";

interface IncrementalInputProps extends Omit<NumberInputProps, "form"> {
  index: number;
  form: UseFormReturnType<SocialBehaviourAndCoughingForm>;
  name: string;
}

function IncrementalInput({ label, form, index, name }: IncrementalInputProps) {
  const [count, handlers] = useCounter(0, { min: 0 });
  useEffect(() => {
    form.setFieldValue(`groups.${index}.${name}`, count);
  }, [count]);
  return (
    <Group gap="md" grow align="center">
      <Button w={64} onClick={handlers.decrement}>
        -
      </Button>
      <NumberInput
        description={label}
        disabled
        value={form.getInputProps(`groups${index}${name}`).value}
      />
      <Button w={64} onClick={handlers.increment}>
        +
      </Button>
    </Group>
  );
}

// TODO: Må hente gruppe og må se på TimeInput
function SocialBehaviorComponent({
  form,
  index,
  groups,
}: {
  form: UseFormReturnType<SocialBehaviourAndCoughingForm>;
  index: number;
  groups: HerdGroup[];
}) {
  const startSum =
    form.values.groups[index].standingStart +
    form.values.groups[index].eatDrinkStart +
    form.values.groups[index].lyingStart;
  const endSum =
    form.values.groups[index].standingFinish +
    form.values.groups[index].eatDrinkFinish +
    form.values.groups[index].lyingFinish;
  const groupSelectionData = groups.map((group) => group.groupName);
  console.log(groupSelectionData);
  return (
    <>
      <Title order={3}>Social Behavior and Coughing</Title>
      <Space h="md" />
      <Title order={5}>Segment</Title>
      <Group grow gap="md">
        <TextInput
          label="Segment"
          {...form.getInputProps(`groups.${index}.segment`)}
        />
        <Select label="Group" data={groups} />
      </Group>
      <Space h="xl" />
      <SimpleGrid cols={2}>
        <Title content="center" order={4}>
          Start
        </Title>
        <Title order={4}>End</Title>
        <TimeInput
          label="Start Time"
          name="start"
          {...form.getInputProps(`groups.${index}.start`)}
        />
        <TimeInput
          label="End Time"
          {...form.getInputProps(`groups.${index}.end`)}
        />
        {["standing", "eatDrink", "lying"].map((name: string, _: number) => (
          <>
            <IncrementalInput
              key={`${name + index}start`}
              label={upperFirst(name)}
              form={form}
              index={index}
              name={`${name}Start`}
              min={0}
            />
            <IncrementalInput
              key={`${name + index}stop`}
              label={upperFirst(name)}
              form={form}
              index={index}
              name={`${name}Finish`}
              min={0}
            />
          </>
        ))}
        <NumberInput label="Sum" disabled value={startSum} />
        <NumberInput label="Sum" disabled value={endSum} />
      </SimpleGrid>
      <Space h="md" />
    </>
  );
}

function SocialBehavior({
  form,
  groups,
}: {
  form: UseFormReturnType<SocialBehaviourAndCoughingForm>;
  groups: HerdGroup[];
}) {
  console.table(form.values.groups);
  return (
    <>
      {form.values.groups.map((group, index) => (
        <SocialBehaviorComponent
          key={`scgroup${index}`}
          form={form}
          index={index}
          groups={groups}
        />
      ))}
      <Button
        fullWidth
        onClick={() => {
          form.insertListItem(
            "groups",
            defaultSocialBehaviourAndCoughingData(),
          );
        }}
      >
        + Add Segment
      </Button>
    </>
  );
}

export default SocialBehavior;
