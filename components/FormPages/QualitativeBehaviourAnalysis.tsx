import {
  Container,
  Text,
  Title,
  Slider,
  Space,
  Fieldset,
  Group,
  Button,
} from "@mantine/core";
import { useForm, UseFormReturnType } from "@mantine/form";
import { upperFirst } from "@mantine/hooks";
import { QBehaviorAnalysisForm } from "../../form/farmBehaviourQuality";
import { legendStyle, textSpacing } from "../../app/styles";
//
// TODO: Har lagt til sliders, vet ikke om det er riktig
const SLIDERS = [
  { title: "active", initialValue: 0 },
  { title: "relaxed", initialValue: 0 },
  { title: "fearful", initialValue: 0 },
  { title: "agitated", initialValue: 0 },
  { title: "calm", initialValue: 0 },
  { title: "content", initialValue: 0 },
  { title: "inDifferent", initialValue: 0 },
  { title: "frustrated", initialValue: 0 },
  { title: "friendly", initialValue: 0 },
  { title: "bored", initialValue: 0 },
  { title: "playful", initialValue: 0 },
  { title: "positivelyOccupied", initialValue: 0 },
  { title: "lively", initialValue: 0 },
  { title: "inquisitive", initialValue: 0 },
  { title: "irritable", initialValue: 0 },
  { title: "calmlessUneasy", initialValue: 0 },
  { title: "sociable", initialValue: 0 },
  { title: "apathetic", initialValue: 0 },
  { title: "happy", initialValue: 0 },
  { title: "distressed", initialValue: 0 },
] as const;

interface Props {
  form: UseFormReturnType<QBehaviorAnalysisForm>;
}

export default function QBehaviorAnalysis() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      active: 0,
      relaxed: 0,
      fearful: 0,
      agitated: 0,
      calm: 0,
      content: 0,
      inDifferent: 0,
      frustrated: 0,
      friendly: 0,
      bored: 0,
      playful: 0,
      positivelyOccupied: 0,
      lively: 0,
      inquisitive: 0,
      irritable: 0,
      calmlessUneasy: 0,
      sociable: 0,
      apathetic: 0,
      happy: 0,
      distressed: 0,
    },
  });
  return (
    <Container style={{ display: "flex", flexdirection: "column" }}>
      <Fieldset
        {...textSpacing}
        legend={<Text style={legendStyle}>Qualitative Behaviour Analysis</Text>}
      >
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          {SLIDERS.map((slider, index) => (
            <div key={index}>
              <Container m="md">
                <Text size="md">{upperFirst(slider.title)}</Text>
                <Slider
                  min={0}
                  max={125}
                  marks={[
                    { value: 0, label: "min" },
                    { value: 125, label: "max" },
                  ]}
                  {...form.getInputProps(slider.title)}
                />
              </Container>
              <Space h="md" />
            </div>
          ))}
          <Group justify="flex-end" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </Fieldset>
    </Container>
  );
}
