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
  Textarea,
  Group,
  Button,
} from "@mantine/core";

import {
  mainContainer,
  textSpacing,
  checkboxSpacing,
  legendStyle,
} from "../../app/styles";
import { useForm } from "@mantine/form";
import { UseForm, UseFormReturnType } from "@mantine/form/lib/types";
import { ManagementQuestionnaireForm } from "../../form/farmManagement";

interface Props {
  form: UseFormReturnType<ManagementQuestionnaireForm>;
}

export default function FormManagementQuestionnaire() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      id: "",
      tempIn: null,
      tempOut: null,
      pastureAccess: false,
      pastureDaysYear: 0,
      pastureHoursDay: 0,
      pastureDaysComment: null,
      outdoorAccess: null,
      outdoorDaysYear: null,
      outdoorHoursDay: null,
      looseHoused: false,
      nrDystocia_12Mos: 0,
      nrDownercows_12Mos: 0,
      nrMortality_12Mos: 0,
      disbDehoOnFarm: 0,
      disbDehoMethod: 0,
      hotAir: null,
      disbDehoAnesthesia: 0,
      disbDehoAnalgesia: 0,
      tdOnFarm: 0,
      tdMethod: 0,
      tdAnesthesia: 0,
      tdAnalgesia: 0,
      calfMotherTime: 0,
      singleboxTime: 0,
      milkVolumeDaily: 0,
      colostrumVolume: 0,
      concentrateAge: 0,
      roughageAge: 0,
      waterAge: 0,
      favCow: false,
      specialMeasure: false,
      specialMeasureDesc: "",
      nrMilkrec_3mos: 0,
      avgDairyCow_12mos: 0,
      avgCalvingsYear: 0,
      pctScc400k_3mos: 0,
    },
  });
  return (
    <Container {...mainContainer}>
      <Fieldset
        {...textSpacing}
        legend={<Text style={legendStyle}>Management Questionnaire</Text>}
      >
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <Grid>
            <Grid.Col span={6}>
              <NumberInput
                label="Temperature Inside"
                min={-50}
                max={50}
                mt="md"
                {...form.getInputProps("tempIn")}
              ></NumberInput>
            </Grid.Col>
            <Grid.Col span={6}>
              <NumberInput
                label="Temperature Outside"
                min={-50}
                max={50}
                mt="md"
                {...form.getInputProps("tempOut")}
              ></NumberInput>
            </Grid.Col>
          </Grid>

          <Grid mt="xl" style={{ borderBottom: "solid #D9DDDC" }}></Grid>

          <Grid m="lg">
            <Grid.Col span={4}>
              <Checkbox
                {...checkboxSpacing}
                mt="md"
                label="Animals go out to pasture"
                {...form.getInputProps("pastureAccess")}
              />
            </Grid.Col>
            <Grid.Col span={4}>
              <NumberInput
                label="Days cows have access to pasture"
                min={0}
                max={999}
                mt="md"
                {...form.getInputProps("pastureDaysYear")}
              />
            </Grid.Col>
            <Grid.Col span={4}>
              <NumberInput
                label="Hours cows have access to pasture"
                min={0}
                max={999}
                mt="md"
                {...form.getInputProps("pastureHoursDay")}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <TextInput
                label="Comments on cows access to pasture"
                placeholder="Type here"
                mt="md"
                {...form.getInputProps("pastureDaysComment")}
              />
            </Grid.Col>
          </Grid>

          <Grid mt="xl" style={{ borderBottom: "solid #D9DDDC" }}></Grid>

          <Grid m="lg">
            <Grid.Col span={4}>
              <Checkbox
                {...checkboxSpacing}
                mt="md"
                label="Access to outdoor loafing area"
                {...form.getInputProps("outdoorAccess")}
              />
            </Grid.Col>
            <Grid.Col span={4}>
              <NumberInput
                label="Days cows have access to loafing area"
                min={0}
                max={999}
                mt="md"
                {...form.getInputProps("outdoorDaysYear")}
              />
            </Grid.Col>
            <Grid.Col span={4}>
              <NumberInput
                label="Hours cows have access to loafing area"
                min={0}
                max={999}
                mt="md"
                {...form.getInputProps("outdoorHoursDay")}
              />
            </Grid.Col>
          </Grid>

          <Grid mt="xl" style={{ borderBottom: "solid #D9DDDC" }}></Grid>

          <Checkbox
            {...checkboxSpacing}
            mt="md"
            label="Loose housed cows"
            {...form.getInputProps("looseHoused")}
          />

          <Grid>
            <Grid.Col span={4}>
              <NumberInput
                label="Cases of Dystocia in the last 12 months"
                min={0}
                max={999}
                mt="md"
                {...form.getInputProps("nrDystocia_12Mos")}
              />
            </Grid.Col>
            <Grid.Col span={4}>
              <NumberInput
                label="Downercows in the last 12 months"
                min={0}
                max={999}
                mt="md"
                {...form.getInputProps("nrDownercows_12Mos")}
              />
            </Grid.Col>
            <Grid.Col span={4}>
              <NumberInput
                label="Mortality in the last 12 months"
                min={0}
                max={999}
                mt="md"
                {...form.getInputProps("nrMortality_12Mos")}
              />
            </Grid.Col>
          </Grid>

          <Grid mt="xl" style={{ borderBottom: "solid #D9DDDC" }}></Grid>

          <Text style={legendStyle} mt="lg">
            Disbudding and Dehorning
          </Text>
          <Grid>
            <Grid.Col span={12}>
              <Select
                label="Calves disbudded or dehorned?"
                placeholder="Pick value"
                data={["Yes", "No", "NA"]}
                mt="md"
                {...form.getInputProps("disbDehoOnFarm")}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Select
                label="Method for disbudding or dehorning"
                placeholder="Pick value"
                data={["None", "Thermocautery", "Caustic paste", "Dehorned"]}
                mt="md"
                {...form.getInputProps("disbDehoMethod")}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Select
                label="Anasthesia, disbudding or dehorning?"
                placeholder="Pick value"
                data={["Yes", "No", "NA"]}
                mt="md"
                {...form.getInputProps("disbDehoAnesthesia")}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Select
                label="Analgesia, disbudding or dehorning?"
                placeholder="Pick value"
                data={["Yes", "No", "NA"]}
                mt="md"
                {...form.getInputProps("disbDehoAnalgesia")}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Select
                label="Hot air gun used for thermocautery"
                placeholder="Pick value"
                data={["Yes", "No", "NA"]}
                mt="md"
                {...form.getInputProps("hotAir")}
              />
            </Grid.Col>
          </Grid>

          <Grid mt="xl" style={{ borderBottom: "solid #D9DDDC" }}></Grid>

          <Text style={legendStyle} mt="lg">
            Tail Docking
          </Text>

          <Grid>
            <Grid.Col span={12}>
              <Select
                label="Tail docking performed?"
                placeholder="Pick value"
                data={["Yes", "No", "NA"]}
                mt="md"
                {...form.getInputProps("tdOnFarm")}
              />
            </Grid.Col>
            <Grid.Col span={4}>
              <Select
                label="Mathod for taildocking"
                placeholder="Pick value"
                data={["Rubber ring", "Surgery", "NA"]}
                mt="md"
                {...form.getInputProps("tdMethod")}
              />
            </Grid.Col>
            <Grid.Col span={4}>
              <Select
                label="Anasthesia, tail docking?"
                placeholder="Pick value"
                data={["Yes", "No", "NA"]}
                mt="md"
                {...form.getInputProps("tdAnesthesia")}
              />
            </Grid.Col>
            <Grid.Col span={4}>
              <Select
                label="Annalgesia, tail docking?"
                placeholder="Pick value"
                data={["Yes", "No", "NA"]}
                mt="md"
                {...form.getInputProps("tdAnalgesia")}
              />
            </Grid.Col>
          </Grid>

          <Grid mt="xl" style={{ borderBottom: "solid #D9DDDC" }}></Grid>

          <Text style={legendStyle} mt="lg">
            Calf
          </Text>

          <Grid>
            <Grid.Col span={6}>
              <NumberInput
                label="Calf-Mother time"
                placeholder="Days"
                min={0}
                max={999}
                mt="md"
                {...form.getInputProps("calfMotherTime")}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <NumberInput
                label="Single-Box time"
                placeholder="Days"
                min={0}
                max={999}
                mt="md"
                {...form.getInputProps("singleboxTime")}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <NumberInput
                label="Milk Volume"
                description="Daily"
                placeholder="Liters"
                min={0}
                max={999}
                mt="md"
                {...form.getInputProps("milkVolumeDaily")}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <NumberInput
                label="Colostrum Volume"
                description="First Day"
                placeholder="Liters"
                min={0}
                max={999}
                mt="md"
                {...form.getInputProps("colostrumVolume")}
              />
            </Grid.Col>

            <Grid.Col span={4}>
              <NumberInput
                label="Age when recieving concetrate feed"
                description="First Time"
                placeholder="Days"
                min={0}
                max={999}
                mt="md"
                {...form.getInputProps("concentrateAge")}
              />
            </Grid.Col>
            <Grid.Col span={4}>
              <NumberInput
                label="Age when recieving roughage"
                description="First Time"
                placeholder="Days"
                min={0}
                max={999}
                mt="md"
                {...form.getInputProps("roughageAge")}
              />
            </Grid.Col>
            <Grid.Col span={4}>
              <NumberInput
                label="Age when recieving water"
                description="First Time"
                placeholder="Days"
                min={0}
                max={999}
                mt="md"
                {...form.getInputProps("waterAge")}
              />
            </Grid.Col>
          </Grid>

          <Grid mt="xl" style={{ borderBottom: "solid #D9DDDC" }}></Grid>

          <Text style={legendStyle} mt="lg">
            Other
          </Text>

          <Checkbox
            {...checkboxSpacing}
            mt="md"
            label="Farmer Have Favorite Cow?"
            {...form.getInputProps("favCow")}
          />
          <Checkbox
            {...checkboxSpacing}
            mt="md"
            label="Farmer Does Something Special to Improve Animal Welfare?"
            {...form.getInputProps("specialMeasure")}
          />
          <Grid>
            <Grid.Col span={12}>
              <Textarea
                label="Special Measure"
                description="Description of what the farmer does to improve animal welfare"
                placeholder="Input placeholder"
                {...form.getInputProps("specialMeasureDesc")}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <NumberInput
                label="Milk Recordings Last 3 Months"
                min={0}
                max={999}
                mt="md"
                {...form.getInputProps("nrMilkrec_3mos")}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <NumberInput
                label="Dairy Cows on the Last Unit Last 12 Months"
                min={0}
                max={999}
                mt="md"
                {...form.getInputProps("avgDairyCow_12mos")}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <NumberInput
                label="Calvings per Year"
                min={0}
                max={999}
                mt="md"
                {...form.getInputProps("avgCalvingsYear")}
              ></NumberInput>
            </Grid.Col>
            <Grid.Col span={6}>
              <NumberInput
                label="Percantage of Cows With SCC Above 400,000 the Last 3 Months"
                placeholder="%"
                min={0}
                max={100}
                mt="md"
                {...form.getInputProps("pctScc400k_3mos")}
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
