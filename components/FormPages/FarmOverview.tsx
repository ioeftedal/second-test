"use client";

import {
  Container,
  Text,
  Fieldset,
  TextInput,
  Checkbox,
  NumberInput,
  Select,
  Grid,
  Group,
  Button,
} from "@mantine/core";

import {
  mainContainer,
  textSpacing,
  checkboxSpacing,
  legendStyle,
} from "../../app/styles";
import { useForm, UseFormReturnType } from "@mantine/form";
import { farmOverviewData } from "../../form/farmOverview";

interface Props {
  form: UseFormReturnType<farmOverviewData>;
}

export default function FarmOverview() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      isDryCowMixed: false,
      isHeiferMixed: false,
      isBreedingBullMixed: false,
      isCowsOnPasture: false,
      isStockPersonAvailable: false,
      isLockingHeadYokes: false,
      nrOfHeadlocks: 0,
      canBullBeSeperated: "No",
      milkingSystem: "AMS",
      feedingRoutine: "",
      morningRoutine: "",
      interference: "",
      herdSize: 0,
      nrGroups: 0,
      groups: [],
    },
  });

  return (
    <Container {...mainContainer} mt="xl">
      <Fieldset
        {...textSpacing}
        legend={<Text style={legendStyle}>Farm Overview</Text>}
      >
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <Grid>
            <Grid.Col span={12}>
              <Checkbox
                {...checkboxSpacing}
                label="Dry coes with main milking group"
                {...form.getInputProps("isDryCowMixed")}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <Checkbox
                {...checkboxSpacing}
                label="Pregnant heifers mixed with main milking group of dry cows"
                {...form.getInputProps("isHeiferMixed")}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <Checkbox
                {...checkboxSpacing}
                label="Breeding bull with the main milking group"
                {...form.getInputProps("isBreedingBullMixed")}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <Checkbox
                {...checkboxSpacing}
                label="Cows on pasture during visit"
                {...form.getInputProps("isCowsOnPasture")}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <Checkbox
                {...checkboxSpacing}
                label="Stockperson awailable"
                {...form.getInputProps("isStockPersonAvailable")}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <Checkbox
                {...checkboxSpacing}
                label="Locking head yokes (fanghek)"
                {...form.getInputProps("isLockingHeadYokes")}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <Select
                label="Can bull be seperated during visit"
                placeholder="Pick value"
                data={["Yes", "No", "NA"]}
                mt="md"
                {...form.getInputProps("canBullBeSeperated")}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <Select
                label="Milking system"
                placeholder="Pick value"
                data={["AMS", "Milking Parlour", "Other"]}
                mt="md"
                {...form.getInputProps("milkingSystem")}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <NumberInput
                label="Number of Headlocks"
                placeholder="0-999"
                min={0}
                max={999}
                mt="md"
                {...form.getInputProps("nrOfHeadlocks")}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <TextInput
                label="Feeding routine"
                placeholder="Type here"
                mt="md"
                {...form.getInputProps("feedingRoutine")}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <TextInput
                label="Morning routine"
                placeholder="Type here"
                mt="md"
                {...form.getInputProps("morningRoutine")}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <TextInput
                label="Interference"
                placeholder="Type here"
                mt="md"
                {...form.getInputProps("interference")}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <Text style={legendStyle} mt="lg">
                Create Group
              </Text>
            </Grid.Col>
            <Grid.Col span={12}>
              <NumberInput
                label="Herd size"
                placeholder="0-999"
                min={0}
                max={999}
                {...form.getInputProps("herdSize")}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <Group justify="flex-end" mt="md">
                <Button type="submit">Submit</Button>
              </Group>
            </Grid.Col>
          </Grid>
        </form>
      </Fieldset>
    </Container>
  );
}
