import { Grid, Text, Title } from "@mantine/core";
import { footer } from "../../app/styles";

export default function Footer() {
  return (
    <Grid align="center" {...footer}>
      {/* Empty space between logo and buttons */}
      <Grid.Col span={1} />

      <Grid.Col span="content">
        <Title order={4}>Made By Eik</Title>
      </Grid.Col>

      <Grid.Col span="auto" />
    </Grid>
  );
}
