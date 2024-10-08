"use client";

import {
  Group,
  TextInput,
  Container,
  Fieldset,
  Grid,
  Text,
  Button,
} from "@mantine/core";
import { legendStyle, mainContainer } from "../../app/styles";
import { FarmDetails } from "../../form/farmDetails";
import { UseFormReturnType, useForm } from "@mantine/form";

interface Props {
  form: UseFormReturnType<FarmDetails>;
}

export default function FormScheduleVisit() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      id: "",
      country: "",
      address: "",
      zip: "",
      town: "",
    },
  });
  return (
    <Container {...mainContainer} mt="xl">
      <Fieldset legend={<Text style={legendStyle}>Farm Details</Text>}>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <Grid>
            <Grid.Col span={12}>
              <TextInput
                label="ID Number"
                placeholder="Type Here"
                {...form.getInputProps("id")}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <TextInput
                label="Country"
                placeholder="Type Here"
                {...form.getInputProps("country")}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <TextInput
                label="Address"
                placeholder="Type Here"
                {...form.getInputProps("address")}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <TextInput
                label="ZIP / Postcode"
                placeholder="Type Here"
                {...form.getInputProps("zip")}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <TextInput
                label="City / Town"
                placeholder="Type Here"
                {...form.getInputProps("town")}
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
