"use client";

import { Container, Text, Fieldset, Button, Grid } from "@mantine/core";

import { mainContainer, textSpacing, legendStyle } from "../../app/styles";
import { UseFormReturnType, useForm } from "@mantine/form";
import { AvoidanceDistanceTestForm } from "../../form/farmDistanceAvoidance";

interface Props {
  form: UseFormReturnType<AvoidanceDistanceTestForm>;
}

export default function AvoidanceDistanceTestingComponent() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      id: "",
      groupName: "",
      earTag: "",
      side: "",
      aDT1: 0,
      aDT2: 0,
      nasalDischarge: "",
      ocularDischarge: "",
      comment: "",
    },
  });

  return (
    <Container {...mainContainer} mt="xl">
      <Fieldset
        {...textSpacing}
        legend={<Text style={legendStyle}>Avoidance Distance Testing</Text>}
      >
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <Grid>
            <Grid.Col span={12}>
              <Button style={{ width: "100%" }}>Add Animal</Button>
            </Grid.Col>
          </Grid>
        </form>
      </Fieldset>
    </Container>
  );
}
