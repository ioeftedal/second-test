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

export default function Resources({ form }: Props) {
  return (
    <Container style={{ display: "flex", flexdirection: "column" }}>
      <Fieldset
        {...textSpacing}
        legend={<Text style={legendStyle}>Resources</Text>}
      >
        <Text style={legendStyle}>Pens / Groups</Text>
        {/* <Grid> */}
        {/*   <Grid.Col span={4}> */}
        {/*     <TextInput */}
        {/*       label="Group Name" */}
        {/*       min={-50} */}
        {/*       max={50} */}
        {/*       disabled */}
        {/*       mt="md" */}
        {/*       {...form.getInputProps("group_name")} */}
        {/*     ></TextInput> */}
        {/*   </Grid.Col> */}
        {/*   <Grid.Col span={4}> */}
        {/*     <NumberInput */}
        {/*       label="Group Size" */}
        {/*       min={-50} */}
        {/*       max={50} */}
        {/*       disabled */}
        {/*       mt="md" */}
        {/*       {...form.getInputProps("group_name")} */}
        {/*     ></NumberInput> */}
        {/*   </Grid.Col> */}
        {/*   <Grid.Col span={4}> */}
        {/*     <NumberInput */}
        {/*       label="No. Water Points" */}
        {/*       min={-50} */}
        {/*       max={50} */}
        {/*       mt="md" */}
        {/*       {...form.getInputProps("group_name")} */}
        {/*     ></NumberInput> */}
        {/*   </Grid.Col> */}
        {/* </Grid> */}

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
              {...form.getInputProps("group_name")}
            ></TextInput>
          </Grid.Col>

          <Grid.Col span={6}>
            <NumberInput
              label="Animals Using Water Points"
              min={0}
              max={999}
              mt="md"
              {...form.getInputProps("nr_wps")}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <NumberInput
              label="Through Length"
              placeholder="cm"
              min={0}
              max={999}
              mt="md"
              {...form.getInputProps("group_name")}
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
              {...form.getInputProps("type")}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Select
              label="Cleanliness"
              placeholder="Pick "
              data={["Clean", "Partially Dirty", "Dirty"]}
              mt="md"
              {...form.getInputProps("cleanliness")}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Select
              label="Function"
              placeholder="Pick "
              data={["Functioning", "Not Functioning"]}
              mt="md"
              {...form.getInputProps("functioning")}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Select
              label="Waterflow"
              placeholder="Pick "
              data={["Adequate", "Inadequate"]}
              mt="md"
              {...form.getInputProps("waterflow")}
            />
          </Grid.Col>
        </Grid>
      </Fieldset>
    </Container>
  );
}
