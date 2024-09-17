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

import { mainContainer, textSpacing, legendStyle } from "../../app/styles";
import { UseFormReturnType } from "@mantine/form";
import { ClinicalScoring } from "../../form/farmClinicalScoring";

interface Props {
  form: UseFormReturnType<ClinicalScoring>;
}

export default function ClinicalScoringInfo({ form }: Props) {
  return (
    <Container {...mainContainer} style={{ flexDirection: "column" }}>
      <Container style={{ display: "flex", flexdirection: "column" }}>
        <Fieldset
          {...textSpacing}
          legend={<Text style={legendStyle}>Clinical Scoring</Text>}
        >
          <Text style={legendStyle}>Animal Information</Text>
          <Grid>
            <Grid.Col span={12}>
              <TextInput
                label="Group Name"
                {...form.getInputProps("group_name")}
              ></TextInput>
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                label="Side"
                {...form.getInputProps("side")}
              ></TextInput>
            </Grid.Col>
            <Grid.Col span={6}>
              <NumberInput
                label="Eartag"
                min={0}
                max={999}
                {...form.getInputProps("ear_tag")}
              ></NumberInput>
            </Grid.Col>
            <Grid.Col span={4}>
              <Select
                label="Type of breed"
                placeholder="Pick"
                data={["NRF", "Dairy-Type Breed", "Dual-Purpose"]}
                {...form.getInputProps("breed")}
              />
            </Grid.Col>
            <Grid.Col span={4}>
              <Select
                label="Body Condition Score - (WQ-Guidelines)"
                placeholder="Pick"
                data={["Very Lean", "Normal", "Very Fat"]}
                {...form.getInputProps("bcs_wqt")}
              />
            </Grid.Col>
            <Grid.Col span={4}>
              <Select
                label="Body Condition Score - Standard"
                placeholder="Select Score"
                data={[
                  "Undefined",
                  "0.5",
                  "1.0",
                  "1.5",
                  "2.0",
                  "2.5",
                  "3.0",
                  "3.5",
                  "4.0",
                  "4.5",
                  "5.0",
                ]}
                {...form.getInputProps("bcs_std")}
              />
            </Grid.Col>
          </Grid>

          <Grid mt="xl" style={{ borderBottom: "solid #D9DDDC" }}></Grid>

          <Text mt="xl" style={legendStyle}>
            Clealiness Score
          </Text>
          <Grid>
            <Grid.Col span={2.4}>
              <Select
                label="Lower hindlegs"
                data={["Clean", "Dirty"]}
                {...form.getInputProps("clean_scr_lower_hindleg")}
              />
            </Grid.Col>
            <Grid.Col span={2.4}>
              <Select
                label="Udder hindlegs"
                data={["Clean", "Dirty"]}
                {...form.getInputProps("clean_scr_upper_hindleg")}
              />
            </Grid.Col>
            <Grid.Col span={2.4}>
              <Select
                label="Udder"
                data={["Clean", "Dirty"]}
                {...form.getInputProps("clean_scr_udderwq")}
              />
            </Grid.Col>
            <Grid.Col span={2.4}>
              <Select
                label="Just the udder"
                data={["Clean", "Dirty"]}
                {...form.getInputProps("clean_scr_udder")}
              />
            </Grid.Col>
            <Grid.Col span={2.4}>
              <Select
                label="Just the teats"
                data={["Clean", "Dirty"]}
                {...form.getInputProps("clean_scr_teats")}
              />
            </Grid.Col>
          </Grid>

          <Grid mt="xl" style={{ borderBottom: "solid #D9DDDC" }}></Grid>

          <Text mt="xl" style={legendStyle}>
            Tarsus - Left
          </Text>
          <Grid>
            <Grid.Col span={3}>
              <Select
                label="Integumental Score"
                data={[
                  "Normal",
                  "Hairless Patch(es) Present",
                  "Lesion(s) Present",
                  "Swelling(s) Present",
                ]}
                {...form.getInputProps("integ_tarsus")}
              />
            </Grid.Col>
            <Grid.Col span={3}>
              <NumberInput
                label="Nr. Hairless Patches"
                min={0}
                max={999}
                {...form.getInputProps("nr_hairless_tarsus")}
              />
            </Grid.Col>
            <Grid.Col span={3}>
              <NumberInput
                label="Nr. Lesions"
                min={0}
                max={999}
                {...form.getInputProps("nr_lesion_tarsus")}
              />
            </Grid.Col>
            <Grid.Col span={3}>
              <NumberInput
                label="Nr. Swellings"
                min={0}
                max={999}
                {...form.getInputProps("nr_swelling_tarsus")}
              />
            </Grid.Col>
          </Grid>

          <Grid mt="xl" style={{ borderBottom: "solid #D9DDDC" }}></Grid>

          <Text mt="xl" style={legendStyle}>
            Hindquarters - Left
          </Text>
          <Grid>
            <Grid.Col span={3}>
              <Select
                label="Integumental Score"
                data={[
                  "Normal",
                  "Hairless Patch(es) Present",
                  "Lesion(s) Present",
                  "Swelling(s) Present",
                ]}
                {...form.getInputProps("integ_hindquarter")}
              />
            </Grid.Col>
            <Grid.Col span={3}>
              <NumberInput
                label="Nr. Hairless Patches"
                min={0}
                max={999}
                {...form.getInputProps("nr_hairless_hq")}
              />
            </Grid.Col>
            <Grid.Col span={3}>
              <NumberInput
                label="Nr. Lesions"
                min={0}
                max={999}
                {...form.getInputProps("nr_lesion_hq")}
              />
            </Grid.Col>
            <Grid.Col span={3}>
              <NumberInput
                label="Nr. Swellings"
                min={0}
                max={999}
                {...form.getInputProps("nr_swelling_hq")}
              />
            </Grid.Col>
          </Grid>

          <Grid mt="xl" style={{ borderBottom: "solid #D9DDDC" }}></Grid>

          <Text mt="xl" style={legendStyle}>
            Neck, Shoulder and Back - Left
          </Text>
          <Grid>
            <Grid.Col span={3}>
              <Select
                label="Integumental Score"
                data={[
                  "Normal",
                  "Hairless Patch(es) Present",
                  "Lesion(s) Present",
                  "Swelling(s) Present",
                ]}
                {...form.getInputProps("integ_neck_shoulder_back")}
              />
            </Grid.Col>
            <Grid.Col span={3}>
              <NumberInput
                label="Nr. Hairless Patches"
                min={0}
                max={999}
                {...form.getInputProps("nr_hairless_nsb")}
              />
            </Grid.Col>
            <Grid.Col span={3}>
              <NumberInput
                label="Nr. Lesions"
                min={0}
                max={999}
                {...form.getInputProps("nr_lesion_nsb")}
              />
            </Grid.Col>
            <Grid.Col span={3}>
              <NumberInput
                label="Nr. Swellings"
                min={0}
                max={999}
                {...form.getInputProps("nr_swelling_nsb")}
              />
            </Grid.Col>
          </Grid>

          <Grid mt="xl" style={{ borderBottom: "solid #D9DDDC" }}></Grid>

          <Text mt="xl" style={legendStyle}>
            Carpus - Left
          </Text>
          <Grid>
            <Grid.Col span={3}>
              <Select
                label="Integumental Score"
                data={[
                  "Normal",
                  "Hairless Patch(es) Present",
                  "Lesion(s) Present",
                  "Swelling(s) Present",
                ]}
                {...form.getInputProps("integ_carpus")}
              />
            </Grid.Col>
            <Grid.Col span={3}>
              <NumberInput
                label="Nr. Hairless Patches"
                min={0}
                max={999}
                {...form.getInputProps("nr_hairless_carpus")}
              />
            </Grid.Col>
            <Grid.Col span={3}>
              <NumberInput
                label="Nr. Lesions"
                min={0}
                max={999}
                {...form.getInputProps("nr_lesion_carpus")}
              />
            </Grid.Col>
            <Grid.Col span={3}>
              <NumberInput
                label="Nr. Swellings"
                min={0}
                max={999}
                {...form.getInputProps("nr_swelling_carpus")}
              />
            </Grid.Col>
          </Grid>

          <Grid mt="xl" style={{ borderBottom: "solid #D9DDDC" }}></Grid>

          <Text mt="xl" style={legendStyle}>
            Flank Side Udder - Left
          </Text>
          <Grid>
            <Grid.Col span={3}>
              <Select
                label="Integumental Score"
                data={[
                  "Normal",
                  "Hairless Patch(es) Present",
                  "Lesion(s) Present",
                  "Swelling(s) Present",
                ]}
                {...form.getInputProps("integ_flank_side_udder")}
              />
            </Grid.Col>
            <Grid.Col span={3}>
              <NumberInput
                label="Nr. Hairless Patches"
                min={0}
                max={999}
                {...form.getInputProps("nr_hairless_fsu")}
              />
            </Grid.Col>
            <Grid.Col span={3}>
              <NumberInput
                label="Nr. Lesions"
                min={0}
                max={999}
                {...form.getInputProps("nr_lesion_fsu")}
              />
            </Grid.Col>
            <Grid.Col span={3}>
              <NumberInput
                label="Nr. Swellings"
                min={0}
                max={999}
                {...form.getInputProps("nr_swelling_fsu")}
              />
            </Grid.Col>
          </Grid>

          <Grid mt="xl" style={{ borderBottom: "solid #D9DDDC" }}></Grid>

          <Text mt="xl" style={legendStyle}>
            Other - Left
          </Text>
          <Grid>
            <Grid.Col span={6}>
              <Select
                label="Integumental Score"
                placeholder="Select"
                data={[
                  "Normal",
                  "Hairless Patch(es) Present",
                  "Lesion(s) Present",
                  "Swelling(s) Present",
                ]}
                {...form.getInputProps("integ_other")}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                label="Details for Integumental Score"
                {...form.getInputProps("integ_other_specify")}
              />
            </Grid.Col>
            <Grid.Col span={3}>
              <Select
                label="Broken Tail"
                placeholder="Select"
                data={["Absent", "Present"]}
                {...form.getInputProps("tail_broken")}
              />
            </Grid.Col>
            <Grid.Col span={3}>
              <Select
                label="Hampered Respiration"
                placeholder="Select"
                data={["Absent", "Present"]}
                {...form.getInputProps("hampered_respiration")}
              />
            </Grid.Col>
            <Grid.Col span={3}>
              <Select
                label="Diarrhoea"
                placeholder="Select"
                data={["Absent", "Present"]}
                {...form.getInputProps("diarrhoea")}
              />
            </Grid.Col>
            <Grid.Col span={3}>
              <Select
                label="Vulval Discharge"
                placeholder="Select"
                data={["Absent", "Present"]}
                {...form.getInputProps("vulval_discharge")}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Select
                label="Lameness Score"
                placeholder="Select"
                data={[
                  "Normal Gait",
                  "Irregular Gait",
                  "Strong Reluctance to Bear Weight (Moderate / Severe Lameness)",
                ]}
                {...form.getInputProps("lameness")}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput label="Comment" {...form.getInputProps("comment")} />
            </Grid.Col>
          </Grid>
        </Fieldset>
      </Container>
    </Container>
  );
}
