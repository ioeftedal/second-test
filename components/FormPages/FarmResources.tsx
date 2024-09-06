"use client";

import {
  Container,
  Text,
  Fieldset,
  TextInput,
  NumberInput,
  Select,
  Grid,
} from "@mantine/core";

import { textSpacing, legendStyle } from "../../app/styles";
import { useForm, UseFormReturnType } from "@mantine/form";
import { FarmResources } from "../../form/farmResources";

interface Props {
  form: UseFormReturnType<FarmResources>;
}

export default function Page8() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      id: "",
      group_name: "",
      nr_wps: 0,
      type: 0,
      cleanliness: 0,
      functioning: "",
      waterflow: "",
    },
  });
  return (
    <Container style={{ display: "flex", flexdirection: "column" }}>
      <Fieldset
        {...textSpacing}
        legend={<Text style={legendStyle}>Resources</Text>}
      >
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <Text style={legendStyle}>Pens / Groups</Text>
          <Grid>
            <Grid.Col span={4}>
              <TextInput
                label="Group Name"
                min={-50}
                max={50}
                disabled
                mt="md"
              ></TextInput>
            </Grid.Col>
            <Grid.Col span={4}>
              <NumberInput
                label="Group Size"
                min={-50}
                max={50}
                disabled
                mt="md"
              ></NumberInput>
            </Grid.Col>
            <Grid.Col span={4}>
              <NumberInput
                label="No. Water Points"
                min={-50}
                max={50}
                mt="md"
              ></NumberInput>
            </Grid.Col>
          </Grid>

          <Grid mt="xl" style={{ borderBottom: "solid #D9DDDC" }}></Grid>

          <Text mt="xl" style={legendStyle}>
            Water Points
          </Text>
          <Grid m="lg">
            <Grid.Col span={12}>
              <TextInput
                label="Group Name"
                placeholder="Type here"
                mt="md"
              ></TextInput>
            </Grid.Col>

            <Grid.Col span={6}>
              <NumberInput
                label="Animals Using Water Points"
                min={0}
                max={999}
                mt="md"
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <NumberInput
                label="Through Length"
                placeholder="cm"
                min={0}
                max={999}
                mt="md"
              />
            </Grid.Col>

            <Grid.Col span={6}>
              <Select
                label="Type of Water Points"
                placeholder="Pick "
                data={[
                  "Through",
                  "Tip Over Through",
                  "Bowl",
                  "Bowl With Reserviour",
                  "Through With Balls / Anti-Frost Devices",
                  "Nipple Drinker",
                ]}
                mt="md"
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Select
                label="Water Points"
                placeholder="Pick "
                data={["Clean", "Partially Dirty", "Dirty"]}
                mt="md"
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Select
                label="Function"
                placeholder="Pick "
                data={["Functioning", "Not Functioning"]}
                mt="md"
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Select
                label="Waterflow"
                placeholder="Pick "
                data={["Adequate", "Inadequate"]}
                mt="md"
              />
            </Grid.Col>
          </Grid>
        </form>
      </Fieldset>
    </Container>
  );
}
