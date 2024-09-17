import { Grid, Button, Image } from "@mantine/core";
import { header } from "../../app/styles";
import Link from "next/link";

export default function Header() {
  return (
    <Grid {...header} align="center">
      <Grid.Col span="content" m="lg">
        <Link href="/dash" style={{ textDecoration: "none" }}>
          <Image src="/nmbu_svart.png" alt="Logo" width={70} height={70} />
        </Link>
      </Grid.Col>

      {/* Empty space between logo and buttons */}
      <Grid.Col span="auto" />

      <Grid.Col span="content">
        <Button m="xs">Sign In</Button>
        <Button m="xs">Read More</Button>
      </Grid.Col>
    </Grid>
  );
}
