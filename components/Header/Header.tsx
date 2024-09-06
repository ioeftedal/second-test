import { Grid, Button, Title } from "@mantine/core";
import { header } from "../../app/styles";

export default function Header() {
  return (
    <Grid {...header} align="center">
      <Grid.Col span="content">
        <Title order={1}>LOGO</Title>
      </Grid.Col>

      {/* Empty space between logo and buttons */}
      <Grid.Col span="auto" />

      <Grid.Col span="content">
        <Button m="xs">Home Page</Button>
        <Button m="xs">Read More</Button>
      </Grid.Col>
    </Grid>
  );
}
