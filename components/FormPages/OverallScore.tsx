"use client";

import {
  Container,
  Text,
  Fieldset,
  TextInput,
  NumberInput,
  Grid,
} from "@mantine/core";

import { textSpacing, legendStyle } from "../../app/styles";
import { UseFormReturnType } from "@mantine/form";
import { OverallScore } from "../../form/farmOverallScores";

interface Props {
  form: UseFormReturnType<OverallScore>;
}

export default function OverallScoreInfo({ form }: Props) {
  return (
    <Container style={{ display: "flex", flexdirection: "column" }}>
      <Fieldset
        {...textSpacing}
        legend={<Text style={legendStyle}>Overall Score</Text>}
      >
        <Grid>
          <Grid.Col span={12}>
            <TextInput
              label="Welfare Category"
              mt="md"
              {...form.getInputProps("welfare_category")}
            ></TextInput>
          </Grid.Col>
        </Grid>

        <Grid mt="xl" style={{ borderBottom: "solid #D9DDDC" }}></Grid>

        <Text mt="xl" style={legendStyle}>
          Principle Scoring
        </Text>
        <Grid>
          <Grid.Col span={3}>
            <NumberInput
              label="Good Feeding"
              min={0}
              max={100}
              placeholder="0 - 100"
              {...form.getInputProps("principle_good_feeding")}
            />
          </Grid.Col>
          <Grid.Col span={3}>
            <NumberInput
              label="Good Housing"
              min={0}
              max={100}
              placeholder="0 - 100"
              {...form.getInputProps("principle_good_housing")}
            />
          </Grid.Col>
          <Grid.Col span={3}>
            <NumberInput
              label="Good Health"
              min={0}
              max={100}
              placeholder="0 - 100"
              {...form.getInputProps("principle_good_health")}
            />
          </Grid.Col>
          <Grid.Col span={3}>
            <NumberInput
              label="Good Behaviour"
              min={0}
              max={100}
              placeholder="0 - 100"
              {...form.getInputProps("principle_good_behavior")}
            />
          </Grid.Col>
        </Grid>

        <Grid mt="xl" style={{ borderBottom: "solid #D9DDDC" }}></Grid>

        <Text mt="xl" style={legendStyle}>
          Criteria Scoring
        </Text>
        <Grid>
          <Grid.Col span={3}>
            <NumberInput
              label="Good Feeding"
              min={0}
              max={100}
              placeholder="0 - 100"
              {...form.getInputProps("")}
            />
          </Grid.Col>
          <Grid.Col span={3}>
            <NumberInput
              label="Good Housing"
              min={0}
              max={100}
              placeholder="0 - 100"
              {...form.getInputProps("")}
            />
          </Grid.Col>
          <Grid.Col span={3}>
            <NumberInput
              label="Good Health"
              min={0}
              max={100}
              placeholder="0 - 100"
              {...form.getInputProps("")}
            />
          </Grid.Col>
          <Grid.Col span={3}>
            <NumberInput
              label="Good Behaviour"
              min={0}
              max={100}
              placeholder="0 - 100"
              {...form.getInputProps("")}
            />
          </Grid.Col>
          <Grid.Col span={3}>
            <NumberInput
              label="Absence of Prolonged Hunger"
              min={0}
              max={100}
              placeholder="0 - 100"
              {...form.getInputProps("absence_of_prolonged_hunger")}
            />
          </Grid.Col>
          <Grid.Col span={3}>
            <NumberInput
              label="Absence of Prolonged Thirst"
              min={0}
              max={100}
              placeholder="0 - 100"
              {...form.getInputProps("absence_of_prolonged_thirst")}
            />
          </Grid.Col>
          <Grid.Col span={3}>
            <NumberInput
              label="Comfort Around Resting"
              min={0}
              max={100}
              placeholder="0 - 100"
              {...form.getInputProps("comfort_around_resting")}
            />
          </Grid.Col>
          <Grid.Col span={3}>
            <NumberInput
              label="Ease of Movement"
              min={0}
              max={100}
              placeholder="0 - 100"
              {...form.getInputProps("ease_of_movement")}
            />
          </Grid.Col>
          <Grid.Col span={3}>
            <NumberInput
              label="Absence of Injuries"
              min={0}
              max={100}
              placeholder="0 - 100"
              {...form.getInputProps("absence_of_injuries")}
            />
          </Grid.Col>
          <Grid.Col span={3}>
            <NumberInput
              label="Absence of Disease"
              min={0}
              max={100}
              placeholder="0 - 100"
              {...form.getInputProps("absence_of_disease")}
            />
          </Grid.Col>
          <Grid.Col span={3}>
            <NumberInput
              label="Absence of Pain"
              min={0}
              max={100}
              placeholder="0 - 100"
              {...form.getInputProps("absence_of_pain")}
            />
          </Grid.Col>
          <Grid.Col span={3}>
            <NumberInput
              label="Social Behaviours"
              min={0}
              max={100}
              placeholder="0 - 100"
              {...form.getInputProps("expression_of_social_behaviors")}
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <NumberInput
              label="Other Behavours"
              min={0}
              max={100}
              placeholder="0 - 100"
              {...form.getInputProps("expression_of_other_behaviors")}
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <NumberInput
              label="Human Animal Relationship"
              min={0}
              max={100}
              placeholder="0 - 100"
              {...form.getInputProps("good_human_animal_relationship")}
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <NumberInput
              label="Postive Emotional State"
              min={0}
              max={100}
              placeholder="0 - 100"
              {...form.getInputProps("positive_emotional_state")}
            />
          </Grid.Col>
        </Grid>
      </Fieldset>
    </Container>
  );
}
